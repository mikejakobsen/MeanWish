import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { Subscription }                 from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

// Import the interface and DB instance
import { WishCollection }               from '../../../../both/collections/wish.collection';
import { Wish }                         from '../../../../both/models/wish.model';

import template                         from './wish-info.component.html';

@Component({
  selector: 'wish-info',
  template
})
export class WishInfoComponent implements OnInit, OnDestroy {
  wishId: string;
  paramsSub: Subscription;
  wish: Wish;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params
    .map(params => params['wishId'])
    .subscribe(wishId => {
      this.wishId = wishId

      // Query the collection
      this.wish = WishCollection.findOne(this.wishId);
    });
  }
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
