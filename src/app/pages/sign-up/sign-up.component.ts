import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
