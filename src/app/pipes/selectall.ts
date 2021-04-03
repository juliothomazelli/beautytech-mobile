import { ElementRef, HostListener, Directive } from '@angular/core';

@Directive({
  selector: 'ion-input[select-all]'
})

export class SelectAll {
 vpReflectClassName = 'SelectAll';

  constructor(private el: ElementRef) {
  }

  
  @HostListener('click')
  selectAll() {
    let nativeEl: HTMLInputElement = this.el.nativeElement.querySelector('input');

    if (nativeEl) {
      if (nativeEl.setSelectionRange) {
        return nativeEl.setSelectionRange(0, nativeEl.value.length);
      }

      nativeEl.select();
    }
  }
}