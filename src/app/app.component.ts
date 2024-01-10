import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if(this.btnRef?.nativeElement){
      this.btnRef.nativeElement.innerHTML = "Counter ++"; // hide the button
    }
  }
  @ViewChild(LoginComponent) logincomponent?: LoginComponent;
  @ViewChild('btnctr') btnRef?:ElementRef<HTMLButtonElement>;

incrementCnt(){
  console.log(this.logincomponent);
  this.logincomponent?.incrementCnt();
}




}


