import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText',
  pure: false
})
export class AppendTextPipe implements PipeTransform {

  transform(value:number[]): number 
  {
    let sum = 0;
    for(let num of value)
    {
      sum += num;
    }
    return sum;
  }


  }


