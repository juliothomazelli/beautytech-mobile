import { Directive,  HostListener, EventEmitter, Output, Input, ElementRef, AfterViewInit  } from '@angular/core';

@Directive({
    selector: '[vp-auto-focus]'
  })

export class VpAutoFocusDirective implements AfterViewInit {
    private element : ElementRef;

    constructor(el : ElementRef){
        this.element = el;
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.element.nativeElement.focus();
        }, 100);
    }
}