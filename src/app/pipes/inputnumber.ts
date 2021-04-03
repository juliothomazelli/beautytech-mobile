import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'ion-input[currency-input]'
})

//? <ion-input>currency-input</ion-input>

export class InputNumber {
 vpReflectClassName = 'InputNumber';

  constructor(private elementRef : ElementRef){

  }

  @HostListener('keyup')
  onKeyUp() {    
    let v = this.elementRef.nativeElement.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';

    if (v.length <= 6){
      v = v.replace(".", ",");
    }    
    
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

    const value = v.replace(',', '.');

    this.elementRef.nativeElement.value = value.toLocaleString();

    this.elementRef.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));

  }
}