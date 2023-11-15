import { Component } from '@angular/core';
import { PasswordStrengthService } from './service/Password-strength.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordInputComponent } from './components/password-input/password-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'usense-test-2-app';
}
