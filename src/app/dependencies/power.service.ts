import { Injectable } from '@angular/core';
import { DemoService } from './demo.service';

@Injectable()
export class PowerService {

  showAlert()
{
  console.log("second service");
}
}
