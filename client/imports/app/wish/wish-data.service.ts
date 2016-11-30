import { Injectable }       from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Wish }             from "../../../../both/models/wish.model";
import { WishCollection }   from "../../../../both/collections/wish.collection";

@Injectable()
export class WishDataService {
  private data: ObservableCursor<Wish>;

  constructor() {
    this.data = WishCollection.find({});
  }

  public getData(): ObservableCursor<Wish> {
    return this.data;
  }
}
