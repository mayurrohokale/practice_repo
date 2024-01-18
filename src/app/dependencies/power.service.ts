import { Injectable } from '@angular/core';
import { DemoService } from './demo.service';

@Injectable()
export class PowerService {

  log(): void{
    console.log("this is Service 2");
  }
}
