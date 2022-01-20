import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proizvod } from '../models/proizvod';
import { Korisnik } from '../models/user';
import { ProizvodService } from '../proizvod.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private proizvodService: ProizvodService, private router: Router, private korisnikService: UsersService) { }

  korisnik: Korisnik;
  proizvodi: Proizvod[];
  poruka: string;
  
  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'));

    if(this.korisnik.tip!="A"){
      this.router.navigate(['prijava']);
    }

    this.proizvodService.getAllProducts().subscribe((proizvodi: Proizvod[]) => {
      this.proizvodi = proizvodi;
    })
  }

  dodajProizvod(proizvod){
    this.proizvodService.add(proizvod).subscribe((resp) => {
      if(resp['poruka'] != 1) this.poruka = 'Greska'
      location.reload()
    })
  }

  skloniProizvod(proizvod){
    this.proizvodService.remove(proizvod).subscribe((resp) => {
      if(resp['poruka'] != 1) this.poruka = 'Greska'
      location.reload()
    })
  }

}
