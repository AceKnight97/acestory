import { Component, OnInit } from '@angular/core';
import { IAddFoodInput } from 'src/app/apollo/models/mutations';
import FetchServices from '../../apollo/fetch-services';
import MutationServices from '../../apollo/mutation-services';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  loading = true;
  menu: any[] = [];

  constructor(
    private fetchServices: FetchServices,
    private mutationServices: MutationServices
  ) {
    this.loadMenu();
    this.loading = false;
  }

  ngOnInit(): void {}

  private loadMenu() {
    this.fetchServices.getMenu().subscribe((menu) => {
      this.menu = menu;
    });
  }

  addFood() {
    const data: IAddFoodInput[] = [
      {
        title: 'Seafood test',
        name: 'Lobster test',
        price: 1200000,
        rating: 3,
      },
      {
        title: 'Seafood test',
        name: 'Crab test',
        price: 200000,
        rating: 3,
      },
    ];
    this.mutationServices.handleAddFood(data).subscribe((res) => {
      console.log({ res });
    });
  }
}
