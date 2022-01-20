import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit {

  constructor(private router: Router) { }

  user: User;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('prijavljen'));
    if(this.user.tip != "radnik"){
      this.router.navigate(['/']);
    }
  }

}
