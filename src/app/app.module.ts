import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes,RouterModule } from '@angular/router';
import{FormsModule, ReactiveFormsModule}from'@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
   NavBarComponent,
   FooterComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
