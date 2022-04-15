import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() onClickSignIn = new EventEmitter<any>();

  signIn(): void {
    this.onClickSignIn.emit();
  }
  signUpForm;
  emailErr: String = '';
  passwordErr: String = '';
  confirmPasswordErr: String = '';

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService
    ) {
    this.signUpForm = this.fb.group({
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    const { email, password , confirmPassword} = this.signUpForm.value;
    console.log({ email, password });
    const checking = this.signUpService.checkingParams(email, password, confirmPassword);
    if (!_.isEmpty(checking)) {
      this.emailErr = checking.emailErr || '';
      this.passwordErr = checking.passwordErr || '';
      this.confirmPasswordErr = checking.confirmPasswordErr || '';
    }
  }

}
