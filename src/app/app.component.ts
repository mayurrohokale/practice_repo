import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  msg = 'interpolation is one way data binding technique used to output the data from .ts to .html';

  val = 'Hello';
}
