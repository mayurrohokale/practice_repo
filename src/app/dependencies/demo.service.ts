import { Injectable } from "@angular/core";

@Injectable()
export class DemoService {
  log(): void{
    console.log("this is Service 1");
  }

}
