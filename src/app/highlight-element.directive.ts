import { Directive, HostBinding, OnInit } from '@angular/core';

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

}
