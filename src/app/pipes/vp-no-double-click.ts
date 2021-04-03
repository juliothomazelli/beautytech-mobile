import { Directive,  HostListener, EventEmitter, Output, Input, ElementRef  } from '@angular/core';

@Directive({
    selector: '[vp-dc-prevent]'
  })

  export class VPNoDoubleClickDirective{
    @Output() vpClick = new EventEmitter();
    @Input() vpFreeButton : boolean = null;
    @Input() vpDebounce  = 0;

    private clicked = false;
    private element : ElementRef = null;

    constructor(el : ElementRef){
        this.element = el;
    }

    ngDoCheck() {
        if (this.vpFreeButton == null){
            return;
        }

        if (!this.clicked){
            return;
        }

        if (!this.vpFreeButton){
            return;
        }

        if (this.element != null){
            this.element.nativeElement.removeAttribute('disabled');
        }

        this.clicked = false;
        this.vpFreeButton = false;
    }
    

    @HostListener('click', ['$event'])
    public clickEvent(event){
        if (this.clicked){
            return;
        }

        this.clicked = true;
        
        event.preventDefault();
        event.stopPropagation();
        event.srcElement.setAttribute('disabled', true);
        
        this.vpClick.emit();

        let debounceTime = this.vpDebounce;
        if (debounceTime == 0 && this.vpFreeButton == null){
            debounceTime = 1000;
        }

        if (debounceTime == 0){
            return;
        }

        setTimeout(() => {            
            this.clicked = false;
            event.srcElement.removeAttribute('disabled');
        }, debounceTime);
    }
  }

