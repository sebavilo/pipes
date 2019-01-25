import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  //Aquí haremos una función que cambie por mayusculas la primera letra y deje todo el resto con minúscula. Haremos el caso si es que requiere el cambio o no.
  transform(value: string, todas:boolean = true ): string {
    value =  value.toLowerCase();

    let nombres = value.split(" ");

    if ( todas ){
      //Cambia todas las primeras letras por mayuscula y el resto por minuscula.
      for(let i in nombres ){
        nombres[i] = nombres[i] [0].toUpperCase() + nombres[i].substr(1);
      }
    }else{
      //Sino, cambia solo la primera letra de la primera palabra a mayuscula y el resto a minuscula
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(" ");
  }
}
