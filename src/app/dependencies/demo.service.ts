import { Injectable } from "@angular/core";
import { admin_data } from "./admin_data";

@Injectable()
export class DemoService {
 getData:any;

 constructor()
 {
  this.getData = admin_data;
 }

}
