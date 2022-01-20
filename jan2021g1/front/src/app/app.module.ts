import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KupacComponent } from './kupac/kupac.component';
import { RadnikComponent } from './radnik/radnik.component';
import { HttpClientModule } from '@angular/common/http';
import { ProizvodComponent } from './proizvod/proizvod.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KupacComponent,
    RadnikComponent,
    ProizvodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
