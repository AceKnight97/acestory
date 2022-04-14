import { Component, Input, OnChanges, OnInit, Output , EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import LocalStorage from 'src/app/localStorage';
import { AppState } from 'src/app/reducers';
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnChanges {
  @Output() onClickSignUp = new EventEmitter<any>();

  signUp(): void {
    this.onClickSignUp.emit();
  }

  loginForm;
  emailErr: String = '';
  passwordErr: String = '';

  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent,
    private store: Store<AppState>,
    private localStorage: LocalStorage,
    private _router: Router,
    private signInService: SignInService
  ) {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => {
      this.emailErr = '';
      this.passwordErr = '';
    });
  }

  ngOnChanges(): void {}


  onFormSubmit() {
    const { email, password } = this.loginForm.value;
    console.log({ email, password });
    const checking = this.signInService.checkingParams(email, password);
    if (!_.isEmpty(checking)) {
      this.emailErr = checking.emailErr || '';
      this.passwordErr = checking.passwordErr || '';
    }

    // this.digitalcvSv
    //   .login(loginForm.email, loginForm.password)
    //   .subscribe((login: MutationResponse) => {
    //     // console.log({ login });
    //     try {
    //       if (login.isSuccess) {
    //         const saveData = {
    //           ...login?.data?.user,
    //           token: login?.data?.token,
    //           isSuccess: true,
    //         };
    //         this.localStorage.login(saveData);
    //         this.store.dispatch(new AuthActions.UpdateAuth(saveData));
    //         this._router.navigate(['home']);
    //       } else {
    //         alert('Incorrect username or password!');
    //       }
    //     } catch (error) {
    //       alert(error);
    //     }
    //   });
  }
}
