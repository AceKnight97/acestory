import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed-header',
  templateUrl: './news-feed-header.component.html',
  styleUrls: ['./news-feed-header.component.scss'],
})
export class NewsFeedHeaderComponent implements OnInit {
  email = 'Triet.TruongThanh@vn.Bosch.com';
  constructor() {}

  ngOnInit(): void {}

  getFormatedEmail() {
    const formatedE = this.email.slice(0, this.email.indexOf('@'));
    return formatedE.length > 25
      ? formatedE.slice(0, 25) + '...'
      : formatedE;
  }
}
