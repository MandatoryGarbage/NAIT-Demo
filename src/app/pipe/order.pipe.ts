import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: string[]): string[] {
    return value.sort((n1, n2) => n1.length - n2.length);
  }

}
