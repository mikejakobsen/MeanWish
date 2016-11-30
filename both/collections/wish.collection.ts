import { MongoObservable } from "meteor-rxjs";
import {Wish}              from "../models/wish.model";

export const WishCollection = new MongoObservable.Collection<Wish>("wish-collection");
