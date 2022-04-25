import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_ENUMS } from 'src/app/models';


const {YOUR_PAGE,LOGIN, NEW_FEEDS}=ROUTING_ENUMS;

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.scss']
})
export class InnerHeaderComponent implements OnInit {
  email = 'Triet.TruongThanh@vn.Bosch.com';
  formatedE = this.email.slice(0, this.email.indexOf('@'));
  location = window.location.pathname;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  logout() {
    this._router.navigate([LOGIN]);
  }

  yourPage() {
    if (this.location.includes(YOUR_PAGE)) {
      return;
    }
    this._router.navigate([YOUR_PAGE]);
  }

  newsFeedClick() {
    if (this.location.includes(NEW_FEEDS)) {
      return;
    }
    this._router.navigate([NEW_FEEDS]);
  }

  getFormatedEmail() {
    return this.formatedE.length > 25
      ? this.formatedE.slice(0, 25) + '...'
      : this.formatedE;
  }
}
