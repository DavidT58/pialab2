import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  login(kor_ime, lozinka){
    const data = {
      kor_ime: kor_ime,
      lozinka: lozinka
    }
    return this.http.post(`${this.uri}/login`, data);
  }

  getUserByUsername(kor_ime){
    return this.http.get(`${this.uri}/getUserByUsername?kor_ime=${kor_ime}`);
  }
}
