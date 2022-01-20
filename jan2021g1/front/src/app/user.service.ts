import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000"

  login(kor_ime, lozinka, tip){
    const data = {
      kor_ime: kor_ime,
      lozinka: lozinka,
      tip: tip
    }

    return this.http.post(`${this.uri}/users/login`, data);
  }
}
