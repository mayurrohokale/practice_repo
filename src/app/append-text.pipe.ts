import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText'
})
export class AppendTextPipe implements PipeTransform {

  transform(value:string): number {
    let count = 0;
    
    for(const ch of value){
      if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch<= 'z')
      {
        count++;
    }
   
  }
  return count;
  }
  }
