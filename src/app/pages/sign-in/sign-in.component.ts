import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import LocalStorage from 'src/app/localStorage';
import { MutationResponse } from 'src/app/models';
import { AppState } from 'src/app/reducers';
import { AuthInterface } from 'src/app/reducers/auth/auth';
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';
import * as AuthActions from '../../reducers/auth/auth.action';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent,
    private store: Store<AppState>,
    private localStorage: LocalStorage,
    private _router: Router
  ) {
    this.loginForm = this.fb.group({
      email: 'aceknight@gmail.com',
      password: '123456',
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    const loginForm = this.loginForm.value;
    // console.log({ loginForm });
    this.digitalcvSv
      .login(loginForm.email, loginForm.password)
      .subscribe((login: MutationResponse) => {
        // console.log({ login });
        try {
          if (login.isSuccess) {
            const saveData = {
              ...login?.data?.user,
              token: login?.data?.token,
              isSuccess: true,
            };
            this.localStorage.login(saveData);
            this.store.dispatch(new AuthActions.UpdateAuth(saveData));
            this._router.navigate(['home']);
          } else {
            alert('Incorrect username or password!');
          }
        } catch (error) {
          alert(error);
        }
      });
  }

}
