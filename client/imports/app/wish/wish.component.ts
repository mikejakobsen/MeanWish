import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable }                   from "rxjs";
import { Subscription }                 from 'rxjs/Subscription';
import { MeteorObservable }             from 'meteor-rxjs';

import { WishDataService }              from "./wish-data.service";
import { Wish }                         from "../../../../both/models/wish.model";
import { WishCollection }               from "../../../../both/collections/wish.collection";

import template                         from "./wish.component.html";
import style                            from "./wish.component.scss";

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

  constructor(private wishDataService: WishDataService) {
    this.title = "Wishlist";
  }

  ngOnInit() {
    // this.data = this.wishDataService.getData().zone();
    this.data = WishCollection.find({}).zone();
    this.wishSub = MeteorObservable.subscribe('wish').subscribe();
  }
  deleteWish(wish: Wish): void {
    WishCollection.remove(wish._id);
  }
  ngOnDestroy() {
    this.wishSub.unsubscribe();
  }
}
