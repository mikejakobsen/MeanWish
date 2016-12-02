import { MongoObservable } from "meteor-rxjs";
import { Meteor }          from 'meteor/meteor';
import {Wish}              from "../models/wish.model";

export const WishCollection = new MongoObservable.Collection<Wish>("wish-collection");

function loggedIn() {
  return !Meteor.user();
}

WishCollection.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
