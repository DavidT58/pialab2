import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proizvod } from '../models/proizvod';
import { User } from '../models/user';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private router: Router, private proizvodService: ProizvodService) { }

  user: User;

  proizvodi: Proizvod[];

  glavni: Proizvod;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('prijavljen'))
    if(this.user.tip != "kupac"){
      this.router.navigate(['/']);
    }
    this.proizvodService.dohvatiSveProizvode().subscribe((data: Proizvod[]) => {
      this.proizvodi = data;
    })
  }

  logout(){
    localStorage.setItem('prijavljen', "");
    this.router.navigate(['/']);
  }

  izaberi(){
    if(this.glavni){
      this.router.navigate(['dodaj'])
    }
    else{
      alert("morate izabrati glavni proizvod")
    }
  }

}
