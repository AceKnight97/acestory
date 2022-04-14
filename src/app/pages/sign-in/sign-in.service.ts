import { Injectable } from '@angular/core';

interface CheckingSignIn {
  emailErr?:String,
  passwordErr?: String
}

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor() {}

  isValidEmail = (email: String = '') => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.trim()).toLowerCase());
  };

  checkingParams = (email: String = '', password: String = ''): CheckingSignIn => {
    if (!email) {
      return { emailErr: 'Email is empty!' };
    }
    if (!this.isValidEmail(email)) {
      return { emailErr: 'Email format is incorrect!' };
    }
    if (!password) {
      return { passwordErr: 'Password is empty!' };
    }
    return {};
  };
}
