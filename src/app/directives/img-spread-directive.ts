import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[imgSpreadDirective]'
})
export class ImgSpreadDirective {
    constructor(private el: ElementRef) { 
        this.setPercentageWidth(this.el.nativeElement.parentElement.offsetWidth)
    }

    @Input() items: number=3;   
    @Input() itemsWidth: number=150;
    private minWidth = 180;
    private widthPercentage = 20;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        let widthCurrent = event.target.innerWidth;
        this.setPercentageWidth(widthCurrent)
    }
    private setPercentageWidth(currentWidth) {
        let widthByElement = currentWidth/this.items;
        if(widthByElement >= this.minWidth) {
            this.widthPercentage = widthByElement*100/currentWidth;
        } else {
            let divRows = 2;
            while (widthByElement<this.minWidth && this.widthPercentage > 18) {
                widthByElement = currentWidth/(this.items/divRows);
                this.widthPercentage = widthByElement*100/currentWidth;            
                divRows++;
            } 
        }
        this.el.nativeElement.style.width = `${this.widthPercentage}%`;
    }

}