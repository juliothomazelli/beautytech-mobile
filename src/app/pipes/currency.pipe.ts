import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'vpcurrency'})
export class VpCurrencyPipe implements PipeTransform {
  constructor() {
  }

  transform(value: number, places: number = 2): string {
    let newValue = 0;

    if (value !== undefined && value !== null) {
      newValue = value;
    }

    // ! DEVO FORMATAR AINDA
    return '';
  }
}
