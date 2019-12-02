import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

//services
import { StudentService } from '../../services/student.service';
import { GradeService } from '../../services/grade.service';

//models
import { IStudent, Student, IModelShow } from '../../models/student';
import { Grade, IGrade } from '../../models/grade';

@Component({
    selector: 'app-grades',
    templateUrl: './grades.component.html',
    styleUrls: ['./grades.component.css'],
    providers: [StudentService, GradeService]
})
export class GradesComponent implements OnInit {
    private selectedGrade: IGrade = {};
    private students: IStudent[] = [];
    private studentsBygrade: any[] = [];
    private menuStates = {
        showRight: false,
    };

    public mapGrade = (grade: IGrade): IModelShow => {
        const modelGrade: IModelShow = {
            textToShow: grade.gradeLiteral
        };
        return modelGrade;
    }

    private isVisibleLoaderStudents: boolean = true;

    private modelItemGrade: IModelShow = {
        textToShow: "",
        onMapModel: this.mapGrade,
        onSelectItem: () => { }
    };
    constructor(private studentsService: StudentService,
        private gradesService: GradeService
        ) { }

    ngOnInit() {
        this.gradesService
            .getGrades()
            .subscribe((grades: any) => {
                if (grades.data.length > 0) {
                    this.studentsBygrade = grades.data;
                }
            });
    }


    private showProfile = () => {
        this.menuStates.showRight = !this.menuStates.showRight;
    }

    private catchSelect = ($event) => {
        this.selectedGrade = $event.q;
        this.studentsService
            .getStudents(this.selectedGrade._id)
            .subscribe((students: any) => {
                if (students.data.length > 0) {
                    this.students = students.data;
                    this.selectedGrade = students.data[0];
                }
            });
    }

    setNewGrade = (newItem: IGrade) => {
        (<any>newItem).title = "title that has no sence"
        newItem.grade = "new grade ...";
    }

    private receivingData = ($event) => {
        let dataFound = $event.b64.replace(/.*;base64,/g, "");
        const byteCharacters = atob(dataFound);
        $event.data = null;
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        var data = new Uint8Array(byteNumbers);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");

        let workbook = XLSX.read(bstr, { type: 'binary' });

        var first_sheet_name = workbook.SheetNames[0];

        var worksheet = workbook.Sheets[first_sheet_name];
        let index = 10;
        const students: any = [];

        const literalGrade: string = worksheet[`K4`].v;
        const gradeAndParalel = literalGrade.split("\"");
        const gradeString = gradeAndParalel[0].trim();
        const paralelString = gradeAndParalel[1].trim();

        const getNumericParalel = (paralString: string) => {
            let num: number = 0;
            switch (paralString.toLowerCase()) {
                case "primero":
                    num = 1;
                    break;
                case "segundo":
                    num = 2;
                    break;
                case "tercero":
                    num = 3;
                    break;
                case "cuarto":
                    num = 4;
                    break;
                case "quinto":
                    num = 5;
                    break;
                case "sexto":
                    num = 6;
                    break;
                case "septimo":
                    num = 7;
                    break;
                case "octavo":
                    num = 8;
                    break;
            }
            return num;
        }

        let grade: Grade = new Grade(undefined, gradeString, paralelString, getNumericParalel(gradeString));
        this.gradesService.addGrade(grade)
            .subscribe((gradeResult)=> {
                const newGrade = gradeResult.data;
                while (worksheet[`A${index}`] && worksheet[`A${index}`].v) {
                    index++;
                    if (worksheet[`B${index}`] && worksheet[`B${index}`].v) {
                        const fullname = worksheet[`B${index}`].v;
                        let student: Student = new Student(null, fullname, worksheet[`A${index}`].v, newGrade);
                        this.studentsService.addStudent(<any>student)
                            .subscribe((questionary) => {
        
                                console.log(questionary);
                            });;
                        students.push(student);
                        //console.log(`${worksheet[`A${index}`].v}.- ${worksheet[`B${index}`].v}`);
                    }
                }

            })

        //console.log("cols->", worksheet["!cols"].length);
        //console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
    }

    toogleLoadStudents = () => {
        this.isVisibleLoaderStudents = !this.isVisibleLoaderStudents;
    }

}
