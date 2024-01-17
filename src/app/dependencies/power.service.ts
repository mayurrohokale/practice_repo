import { Injectable } from '@angular/core';
import { DemoService } from './demo.service';

@Injectable()
export class PowerService {

  constructor(public demoservice: DemoService ){}

  calculateCube(value: number): number{
    return this.demoservice.calculatePower(value,3);
  }
}
