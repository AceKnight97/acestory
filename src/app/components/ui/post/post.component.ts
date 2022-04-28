import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  title = faker.name.jobTitle();
  content = faker.lorem.paragraphs();
  date = moment().add(_.random(-24, 24), 'hours');
  author = faker.name.firstName() + ' ' + faker.name.lastName();
  isEdited = _.random();
  images: any[] | undefined = [];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.images= [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }, 1234);
  }

  renderTime() {
    const preText = this.isEdited ? 'Edited at ' : 'Created at ';
    if (
      moment(this.date).isBetween(moment().startOf('days'), moment().endOf('days'))
    ) {
      return preText + this.date.format('HH:mm');
    }
    return preText + this.date.format('DD/MM/YY - HH:mm');
  }
}
