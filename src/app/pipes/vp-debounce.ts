import { Directive,  HostListener, EventEmitter, Output, Input, ElementRef  } from '@angular/core';

@Directive({
    selector: '[vp-debounce]'
  })

  export class VPDebounceDirective{
    @Output() vpDebounceExec   = new EventEmitter();
    @Input()  vpDebounceTime   = 700               ;
    @Input()  vpDebounceMin    = 3                 ;
    @Output() vpDebounceCancel = new EventEmitter();
    @Output() vpDebounceTyped  = new EventEmitter();
    @Output() vpDebounceClearText = new EventEmitter();

    private timeoutId : any = null;

    constructor(private el : ElementRef){
    }

    @HostListener('input', ['$event'])
    public type(event){
        this.vpDebounceTyped.emit(this.el.nativeElement.value);

        if (this.timeoutId != null){
            clearTimeout(this.timeoutId);
            this.vpDebounceCancel.emit();
        }

        if (this.el.nativeElement.value.length == 0){
          this.vpDebounceClearText.emit();
        }

        if (this.el.nativeElement.value.length < this.vpDebounceMin){
            return;
        }

        this.timeoutId = setTimeout(() => {
            this.timeoutId = null;
            this.vpDebounceExec.emit(this.el.nativeElement.value);
        }, this.vpDebounceTime);
    }
  }
  