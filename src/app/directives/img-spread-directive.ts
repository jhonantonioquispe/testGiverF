import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[imgSpreadDirective]'
})
export class ImgSpreadDirective {
    constructor(private el: ElementRef) { 
        this.setMargin(this.el.nativeElement.parentElement.offsetWidth)
    }

    @Input() items: number=3;   
    @Input() itemsWidth: number=50;
    private margin = 12;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        let widthCurrent = event.target.innerWidth;
        this.setMargin(widthCurrent)
    }
    private setMargin(widthCurrent) {
        console.log(this.el.nativeElement.parentElement.offsetWidth);
        this.margin = 100/(this.items + 1) - this.itemsWidth*100/widthCurrent;
        this.el.nativeElement.style.marginLeft = `${this.margin}%`;
    }

}