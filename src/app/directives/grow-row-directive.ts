import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[growRowDirective]'
})
export class GrowRowDirective {
    constructor(private el: ElementRef) { }

    @Input() defaultColor: string;
    @Input() rows: number = 3;

    @Input('appHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        //console.log("estamos en el mousenter");
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        //console.log("code key ", event);
        if(event.keyCode === 13 && (event.altKey || event.ctrlKey)) {            
            if(event.altKey) this.rows--; else if (event.ctrlKey) this.rows++;
            this.setRows();            
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private setRows() {
        this.el.nativeElement.rows = this.rows;
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}