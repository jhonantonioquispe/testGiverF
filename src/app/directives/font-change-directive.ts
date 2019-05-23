import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[fontChangeDirective]'
})
export class FontChangeDirective {
    constructor(private el: ElementRef) { 
        this.setFontSize();
        this.setFontColor();
    }

    @Input('fontColor') fontColor: string = "#000";
    @Input('fontSize') fontSize: number = 14;

    private setFontColor() {
        this.el.nativeElement.style.color = this.fontColor;        
    }

    ngAfterViewInit(): void {  
        this.setFontSize();  
    }

    private setFontSize() {
        this.el.nativeElement.style.fontSize = `${this.fontSize}px`;
    }
}