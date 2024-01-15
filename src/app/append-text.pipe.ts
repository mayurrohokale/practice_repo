import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText'
})
export class AppendTextPipe implements PipeTransform {

  transform(value:number): number {
    console.log('count incremented to ', value)
    return value;
  }
 
  }
