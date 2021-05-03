import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../Interfaces/interfaces';
import {delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/Data/Opciones-menu.json');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/Data/superheroes.json').pipe(delay(1500));
  }

  



}
