import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  getNames():string[]
  {
    return [
      "John Doe",
      "Jane Smith",
      "alex perry",
      "sophie divine",
    ];
  }
}
