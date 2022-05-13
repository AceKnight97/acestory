import { Component, OnInit } from '@angular/core';
import data from './aaa.json';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  isReview: boolean = false;

  constructor() {}

  // birthday(arr: number[]) {
  // }

  ngOnInit(): void {
    console.log({data})
    // this.birthday(data.data);
  }
}
