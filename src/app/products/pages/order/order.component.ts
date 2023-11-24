import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: 'order.component.html'
})

export class OrderPageComponent{ 

  public isUpperCase: boolean = false;
  public heroes: Hero[] =[
    {
      name:'Superman',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Batman',
      canFly:false,
      color:Color.black
    },
    {
      name:'Daredevil',
      canFly:false,
      color:Color.red
    },
    {
      name:'Linterna verde',
      canFly:true,
      color:Color.green
    }
  ]

  public orderBy: keyof Hero | undefined | '' = '';

  toggleUpperCase():void{
    console.log(this.isUpperCase)
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void{
    this.orderBy = value;
  }
}