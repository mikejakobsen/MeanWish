import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { Subscription }                 from 'rxjs/Subscription';
import { Meteor }                       from 'meteor/meteor';
import { MeteorObservable }             from 'meteor-rxjs';

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
  wishSub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params
    .map(params => params['wishId'])
    .subscribe(wishId => {
      this.wishId = wishId;

      // Query the collection
      // this.wish = WishCollection.findOne(this.wishId);
      if (this.wishSub) {
        this.wishSub.unsubscribe();
      }

      this.wishSub = MeteorObservable.subscribe('wish', this.wishId).subscribe(() => {
        this.wish = WishCollection.findOne(this.wishId);
      });
    });
  }
  saveWish() {
    if (!Meteor.userId()) {
      alert('Please log in');
      return;
    }
    WishCollection.update(this.wish._id, {
      $set: {
        name: this.wish.name,
        description: this.wish.description,
      }
    });
  }
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.wishSub.unsubscribe();
  }
}
