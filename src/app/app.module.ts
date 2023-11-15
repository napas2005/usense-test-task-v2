import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { StrengthBarComponent } from './components/strength-bar/strength-bar.component';
import { PasswordStrengthService } from './service/Password-strength.service';


@NgModule({
  declarations: [
    AppComponent, 
    PasswordInputComponent,
    StrengthBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [StrengthBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
