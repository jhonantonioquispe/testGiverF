import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[imgSpreadDirective]'
})
export class ImgSpreadDirective {
    constructor(private el: ElementRef) { 
        this.setMargin(this.el.nativeElement.parentElement.offsetWidth)
    }

    @Input() items: number=3;   
    @Input() itemsWidth: number=150;
    private margin = 75;

    @HostListener('window:resize', ['$event'])
    onResize(event) {

        let widthCurrent = event.target.innerWidth;
        this.setMargin(widthCurrent)
    }
    private setMargin(widthCurrent) {
        // console.log(this.el.nativeElement.parentElement.offsetWidth);
        // let width:number = this.el.nativeElement.parentElement.offsetWidth;
        // let modulo = width%this.itemsWidth; 
        // let numberElements:number = 0  
        // let marginLeftCalc = 0;
        // //debugger
        // if(modulo !== 0 ){
            
        //     let widthItem:number = this.itemsWidth;
        //     numberElements = (width / widthItem);
        //     numberElements = parseInt(numberElements.toString());
        //     if ((width - this.itemsWidth*numberElements) > 50) {
        //         marginLeftCalc = (width - this.itemsWidth*numberElements)/(numberElements);
        //     } else {
        //         numberElements = (width / widthItem) - 1;
        //         numberElements = parseInt(numberElements.toString());
        //         marginLeftCalc = (width - this.itemsWidth*numberElements)/(numberElements);
        //     }
        // } else {
        //     numberElements = width/this.itemsWidth/2;
        //     marginLeftCalc = this.itemsWidth/(numberElements +1);
        // }
        // this.margin = parseInt(marginLeftCalc.toString());
        this.el.nativeElement.style.marginLeft = `${this.margin}px`;
    }

}