import { Component } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

    subjectlist = [
      {
        subcode : 101,
        name :  'javascript',
      },
      {
        // subcode : 102,
        name :  'c++',
      },
      {
        subcode : 103,
        name :  'datastructure',
      },
    ]
}

