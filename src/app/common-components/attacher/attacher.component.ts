import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AttacherService } from '../../services/attacher.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-attacher',
  templateUrl: './attacher.component.html',
  styleUrls: ['./attacher.component.css']
})
export class AttacherComponent implements OnInit {
  files: any
  fileName: String = '';
  previewData: any = '';
  fullMode: Boolean = false;
  @Output() sendFileOut = new EventEmitter<Object>()
  
  @Input() id: string;
  @Input() srcImage: string;
  @Input() editionMode: Boolean = true;
  constructor(private attacherService: AttacherService) { }

  ngOnInit() {
    if (this.srcImage) {
      this.previewData = this.srcImage;
    }
  }
  
  uploadImage(event) {
    this.files = event.target.files; 
    let reader = new FileReader();

    let formData = new FormData();
    formData.append('imgUploader', this.files[0], this.files[0].name);
    
    reader.onload = (readerEvt: any) => {
      this.previewData = reader.result;
      this.fileName = this.files[0].name;
      this.sendFileOut.emit({data: formData, filename:this.fileName});
    }  
    reader.readAsDataURL(this.files[0]);
  }

  sendFile() { 
    let formData = new FormData();
    formData.append('imgUploader', this.files[0], this.files[0].name);
    this.attacherService.postAttachment(formData)
      .subscribe((data) => {
        const filename = data.path.split("\\")[1];
        this.srcImage = data.fileName;
        this.sendFileOut.emit({data: formData, filename:filename, fullUrl:this.getFullUrl});
        console.log('data received', data);
      });
  }

  sendFileEmmitter(fileData: Object) {
    this.sendFileOut.emit(fileData);
  }

  getFullUrl(imgName) {
    if (!this.srcImage) {
      return this.attacherService.getFullUrl(imgName);
    } else {
      return this.attacherService.getFullUrl(this.srcImage);
    }
  }

  toogleFullImage() {
    this.fullMode = !this.fullMode;
  }


}