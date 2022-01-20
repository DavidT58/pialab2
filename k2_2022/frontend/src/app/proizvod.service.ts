import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  getAllProducts(){
    return this.http.get(`${this.uri}/getAllProducts`);
  }

  buyItem(naziv, kor_ime){
    const data = {
      naziv: naziv,
      kor_ime: kor_ime
    }
    console.log("here")
    return this.http.post(`${this.uri}/buyItem`, data);
  }

  comment(naziv, komentar){
    const data = {
      naziv: naziv,
      komentar: komentar
    }

    return this.http.post(`${this.uri}/comment`, data);
  }

  add(imeProizvoda){
    const data = {
      naziv: imeProizvoda
    }
    return this.http.post(`${this.uri}/addProduct`, data);
  }

  remove(imeProizvoda){
    const data = {
      naziv: imeProizvoda
    }
    return this.http.post(`${this.uri}/removeProduct`, data);
    
  }
}
