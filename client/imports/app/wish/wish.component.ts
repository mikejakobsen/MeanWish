import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable }                   from "rxjs";
import { Subscription }                 from 'rxjs/Subscription';
import { MeteorObservable }             from 'meteor-rxjs';

import { WishDataService }              from "./wish-data.service";
import { Wish }                         from "../../../../both/models/wish.model";
import { WishCollection }               from "../../../../both/collections/wish.collection";

import template                         from "./wish.component.html";
import style                            from "./wish.component.scss";

interface Pagination {
  limit: number;
  skip: number;
}

interface Options extends Pagination {
  [key: string]: any
}

@Component({
  selector: "wish",
  template,
  styles: [ style ]
})
export class WishComponent implements OnInit, OnDestroy {
  // Simple Headline
  title: string;
  data: Observable<Wish[]>;
  wishSub: Subscription;
  pageSize: number = 10;
  curPage: number = 1;
  nameOrder: number = 1;

  constructor(private wishDataService: WishDataService) {
    this.title = "Wishlist";
  }

  ngOnInit() {
    const options: Options = {
      limit: this.pageSize,
      skip: (this.curPage - 1) * this.pageSize,
      sort: { name: this.nameOrder }
    };

    this.wishSub = MeteorObservable.subscribe('wish', options).subscribe(() => {
      this.data = WishCollection.find({}).zone();
    });
  }


  deleteWish(wish: Wish): void {
    WishCollection.remove(wish._id);
  };

  search(value: string): void {
    this.data = WishCollection.find(value ? { name: value } : {}).zone();
  };

  ngOnDestroy() {
    this.wishSub.unsubscribe();
  }
}
