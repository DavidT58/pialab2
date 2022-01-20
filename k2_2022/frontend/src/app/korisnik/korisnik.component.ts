import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proizvod } from '../models/proizvod';
import { Korisnik } from '../models/user';
import { ProizvodService } from '../proizvod.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  constructor(private proizvodService: ProizvodService, private router: Router, private korisnikService: UsersService) { }

  proizvodi: Proizvod[];
  poruka: string;
  korisnik: Korisnik;

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'))
    
    if(this.korisnik.tip!="S"){
      this.router.navigate(['prijava']);
    }

    this.proizvodService.getAllProducts().subscribe((proizvodi: Proizvod[]) => {
      this.proizvodi = proizvodi;
    })
  }

  kupiProizvode(){
    this.proizvodi.forEach((proizvod) => {
      if(proizvod.zaKupovinu){
        this.proizvodService.buyItem(proizvod.naziv, this.korisnik.kor_ime).subscribe((resp) => {
          if(resp['poruka'] == -1){
            this.poruka = 'Greska';
          }
          else{
            this.korisnikService.getUserByUsername(this.korisnik.kor_ime).subscribe((korisnik: Korisnik) => {
              this.korisnik = korisnik;
              localStorage.setItem('prijavljen', JSON.stringify(korisnik));
              location.reload();
            })
          }
        })
      }
    })
  }

  kupljenProizvod: string;
  komentar: string;

  komentarisi(){
    this.proizvodService.comment(this.kupljenProizvod, this.komentar).subscribe((resp) => {
      if(resp['poruka'] == -1) this.poruka = 'Greska';
    })
    location.reload()
  }

}
