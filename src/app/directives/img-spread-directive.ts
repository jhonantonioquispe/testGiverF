import {Directive, ElementRef, Input, HostListener, OnChanges,  AfterViewInit } from '@angular/core';

@Directive({
  selector: '[imgSpreadDirective]'
})
export class ImgSpreadDirective {
    public static maxHeight:number = 0;

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

    ngAfterViewInit(): void {
        let elemsParent = this.el.nativeElement.parentElement.parentElement;

        if (ImgSpreadDirective.maxHeight< this.el.nativeElement.clientHeight) {                
            ImgSpreadDirective.maxHeight = this.el.nativeElement.clientHeight;
        }

        setTimeout(() => {
            for (let el in elemsParent.children) {
                if (ImgSpreadDirective.maxHeight && (parseInt(el)|| el == "0")) {
                    elemsParent.children[el].children[0].style.height = ImgSpreadDirective.maxHeight+"px";
                }
            }
        });
        
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