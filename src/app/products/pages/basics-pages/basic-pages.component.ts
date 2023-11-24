import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-pages.component.html'
})

export class BasicPageComponent{

  public name:string = 'lUis rAmon marTinez'

  public customDate: Date = new Date();
  public timeZone:string = 'GMT-6'
}