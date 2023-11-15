import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateComplexity(password: string): number {
    const hasLettersEn = password.match(/[a-zA-Z]/);
    const hasLettersUkr = password.match(/[а-яіїєґҐЄІЇ]/iu);
    const hasNumbers = password.match(/[0-9]/);
    const hasSymbols = password.match(/[!@#$%^&*()_+]/);

    if (password.length === 0) {
      return 0;
    }
    else if(password.length > 0 && password.length < 8){
      return 404;
    }

    let count = 0;
    if (hasLettersEn || hasLettersUkr) {
      count++;
    }
    if (hasNumbers) {
      count++;
    }
    if (hasSymbols) {
      count++;
    }

    return count;
  }
}
