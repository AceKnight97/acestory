import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-feed-header',
  templateUrl: './news-feed-header.component.html',
  styleUrls: ['./news-feed-header.component.scss'],
})
export class NewsFeedHeaderComponent implements OnInit {
  email = 'Triet.TruongThanh@vn.Bosch.com';
  formatedE = this.email.slice(0, this.email.indexOf('@'));
  location = window.location.pathname;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  logout() {
    this._router.navigate(['login']);
  }

  newsFeedClick() {
    if (this.location.includes('news-feed')) {
      return;
    }
    this._router.navigate(['news-feed']);
  }

  getFormatedEmail() {
    return this.formatedE.length > 25
      ? this.formatedE.slice(0, 25) + '...'
      : this.formatedE;
  }
}
