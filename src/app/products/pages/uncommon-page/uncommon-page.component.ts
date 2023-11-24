import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {

  //i18nSelect 
  public name: string= "Luis";

  //
  public gender: 'male' | 'female'= 'male';
  public invitationMap ={
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient():void{
    this.name= 'Melissa';
    this.gender= 'female';
  }

  public clients:string[]=[
    'Maria',
    'Pedro',
    'Fernando',
    'Fernando',
    'Fernando'
  ]

  deleteClient():void{
    this.clients.pop()
  }

  public clientsMap={
    '=0': 'no tenemos nigun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  //async pipe

  public myObservableTimer:Observable<number> = interval(2000)
  .pipe(
    tap(value=> console.log('tap:',value))
  )

  public promiseValue:Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    }, 3500)
  })
}
