import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000"

  dohvatiSveProizvode(){
    return this.http.get(`${this.uri}/proizvodi/dohvatiSveProizvode`)
  }
}
