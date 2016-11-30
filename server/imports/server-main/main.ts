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
        description: "I really want a new Bike",
        public: true
      }, {
        name: "Kandis CD",
        description: "Johnny from Kandis is the man",
        public: false
      }, {
        name: "A new MacBook",
        description: "The new one with the tap bar",
        public: true
      }];
      data.forEach((obj: Wish) => {
        WishCollection.insert(obj);
      });
    }
  }
}
