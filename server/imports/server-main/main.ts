import {WishCollection} from "../../../both/collections/wish.collection";
import {Wish}           from "../../../both/models/wish.model";

export class Main {
  start(): void {
    this.allIWantForChristmas();
  }

  allIWantForChristmas(): void {
    if (WishCollection.find({}).cursor.count() === 0) {
      const data: Wish[] = [{
        name: "A new Bike",
        description: "A really want a new Bike"
      }, {
        name: "Kandis CD",
        description: "Johnny is the man"
      }, {
        name: "A new MacBook",
        description: "The new one with the tap bar"
      }];
      data.forEach((obj: Wish) => {
        WishCollection.insert(obj);
      });
    }
  }
}
