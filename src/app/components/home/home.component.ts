import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listacategorias: any[];
  categorias_i: any;
  hola = 'hola';

  constructor(private http: HttpClient) {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(listacategorias => {
        // categorias = Object.keys(categorias);
        // console.log(listacategorias['categorias']['data']);
        // this.categorias_i = listacategorias['categorias']['data'];
        console.log(listacategorias['data']['0']);
      });
  }

  ngOnInit() {
  }


  envioDato() {
    return this.http.post('http://192.168.1.77/farmacia/public/categoria/registrar', this.hola)
      .subscribe(
        (data: any) => {
          console.log(data);
        });
    // .pipe(
    //   catchError(e => throwError(e))
    // );

    // console.log(this.http.post(`http://192.168.1.77/farmacia/public/prueba`, this.hola));
  }

  envioPrueba() {
    this.http.post('https://reqres.in/api/users',
      {
        'name': 'Jeannuel',
        'job': 'Front End Developer'
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        });
    }

  // envioPrueba() {
  //   fetch(`https://panes-uber.000webhostapp.com/clientes/insertar_cliente.php`, {
  //     method: 'POST',
  //     body: {
  //       nombre: 'this.hola'
  //     },
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }

  // });

}
