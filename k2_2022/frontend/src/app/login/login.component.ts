import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string;
  lozinka: string;
  poruka: string;

  login(){
    this.usersService.login(this.kor_ime, this.lozinka).subscribe((korisnik: Korisnik) => {
      if(!korisnik) this.poruka = 'Korisnik ne postoji';
      else{
        localStorage.setItem('prijavljen', JSON.stringify(korisnik));
        if(korisnik.tip == 'S'){
          this.router.navigate(['korisnik'])
        }
        else if (korisnik.tip == 'A'){
          this.router.navigate(['admin'])
        }
        else{
          this.poruka = 'Pogresan tip'
        }
      }
    })
  }

  

}
