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
    console.log('hola mundo');
    this.http.get('http://192.168.1.77/farmacia/public/prueba')
      .subscribe(listacategorias => {
        // categorias = Object.keys(categorias);
        console.log(listacategorias['categorias']['data']);
        this.categorias_i = listacategorias['categorias']['data'];
        console.log(this.categorias_i);
      });
  }

  ngOnInit() {
  }


  envioDato() {
    return this.http.post(`http://192.168.1.77/farmacia/public/prueba`, {
      nombre: 'jeannuel'
    })
      .subscribe(
        (data: any) => {
          console.log(data);
        });
      // .pipe(
      //   catchError(e => throwError(e))
      // );

    console.log(this.http.post(`http://192.168.1.77/farmacia/public/prueba`, this.hola));
  }

}
