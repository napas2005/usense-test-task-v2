import { Component, Input, OnInit } from '@angular/core';
import { PasswordStrengthService } from 'src/app/service/Password-strength.service';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.css'],
})
export class StrengthBarComponent{
  @Input() complexity: number = 0;
}
