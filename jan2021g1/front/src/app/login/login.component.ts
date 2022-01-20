import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string;
  lozinka: string;
  tip: string;
  message: string;

  login(){
    this.userService.login(this.kor_ime, this.lozinka, this.tip).subscribe((user: User) => {
      if(user){
        localStorage.setItem('prijavljen', JSON.stringify(user));
        if(user.tip == 'kupac'){
          this.router.navigate(['kupac']);
        }
        else if(user.tip == 'radnik'){
          this.router.navigate(['radnik']);
        }
        else{
          this.message = 'No user with that type';
        }
      }
      else{
        this.message = 'Bad data';
      }
    })
  }
}
