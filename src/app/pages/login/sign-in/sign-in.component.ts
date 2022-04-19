import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
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
  @Output() onClickForgot = new EventEmitter<any>();

  signInForm;
  emailErr: String = '';
  passwordErr: String = '';
  arr = _.range(1, 20);
  // aaa = '';

  get selectedArr() {
    return this.signInForm.get('selectedArr') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent,
    private store: Store<AppState>,
    private localStorage: LocalStorage,
    private _router: Router,
    private signInService: SignInService
  ) {
    this.signInForm = this.fb.group({
      email: [''],
      password: [''],
      selectedArr: [['']],
    });
  }

  ngOnInit(): void {
    this.signInForm.valueChanges.subscribe((signInForm) => {
      // this.emailErr = '';
      // this.passwordErr = '';
    });
  }

  ngOnChanges(): void {}

  signUp(): void {
    this.onClickSignUp.emit();
  }

  forgot(): void {
    this.onClickForgot.emit();
  }

  add(): void {
    this.selectedArr.value.push('');
  }

  onDelete(idx: number): void {
    this.selectedArr.value.splice(idx, 1);
  }

  getArr(val: any): number[] {
    const newArr = _.difference([...this.arr], [...this.selectedArr.value]);
    console.log({ newArr, val, values: this.selectedArr.value });
    return [...newArr];
    // return [...this.arr]
  }

  onChange(e: any, idx: number): void {
    this.selectedArr.value[idx] = e.value;
  }

  onFormSubmit() {
    const { email, password } = this.signInForm.value;
    console.log({ email, password });
    const checking = this.signInService.checkingParams(email, password);
    if (!_.isEmpty(checking)) {
      this.emailErr = checking.emailErr || '';
      this.passwordErr = checking.passwordErr || '';
    }

    // this.digitalcvSv
    //   .login(signInForm.email, signInForm.password)
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
