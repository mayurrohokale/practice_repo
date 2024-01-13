import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgcolor?:string;
  @HostBinding('style.color') textcolor?:string;

  ngOnInit(): void {
    this.bgcolor = 'aqua';
    this.textcolor = 'red';
  }

  @HostListener('click') OnToggle(){
    if (this.bgcolor === 'aqua'){
      this.bgcolor = 'green';
      this.textcolor = 'black';
  }
  else
  {
    this.bgcolor = 'aqua';
    this.textcolor = 'white';
  }
}
}
