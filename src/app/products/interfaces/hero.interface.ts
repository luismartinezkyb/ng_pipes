export enum Color {
  red='ROJO', 
  black='NEGRO', 
  blue='AZUL', 
  green='VERDE'
}

export interface Hero{
  name:string;
  canFly:boolean;
  color:Color;
}