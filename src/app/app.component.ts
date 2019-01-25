import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Seba";
  nombre_completo = "SeBaStIáN NiCoLáS ViLo SaLiNaS";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  monto = 800000;
  video = "16jlHgHERck";


  //Datos para el JSON
  datos = {
    nombre: "Seba",
    clave:"seba69",
    edad: 25,
    direccion: {
        pasaje: "Calle Falsa",
        numero: 123
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout( ()=>resolve("Llegó la merca oeee!!"),3500 );
  });

  fecha = new Date();

}
