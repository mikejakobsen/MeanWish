import { Component, OnInit } from "@angular/core";
import { Observable }        from "rxjs";
import { WishDataService }   from "./wish-data.service";
import { Wish }              from "../../../../both/models/wish.model";
import template              from "./wish.component.html";
import style                 from "./wish.component.scss";

@Component({
  selector: "wish",
  template,
  styles: [ style ]
})
export class WishComponent implements OnInit {
  title: string;
  data: Observable<Wish[]>;

  constructor(private wishDataService: WishDataService) {
    this.title = "Wishlist";
  }

  ngOnInit() {
    this.data = this.wishDataService.getData().zone();
  }
}
