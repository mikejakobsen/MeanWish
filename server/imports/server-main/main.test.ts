import * as chai          from "chai";
import * as spies         from "chai-spies";
import StubCollections    from "meteor/hwillson:stub-collections";

import { Main }           from "./main";
import { WishCollection } from "../../../both/collections/wish.collection";

chai.use(spies);

describe("Backend (-.-)Zzz...", () => {
  let mainInstance: Main;

  beforeEach(() => {
    // Creating database mock
    StubCollections.stub(WishCollection);

    // Create instance of main class
    mainInstance = new Main();
  });

  afterEach(() => {
    // Restore Mongo
    StubCollections.restore();
  });

  it("Should call allIWantForChristmas on startup", () => {
    mainInstance.allIWantForChristmas = chai.spy();
    mainInstance.start();

    chai.expect(mainInstance.allIWantForChristmas).to.have.been.called();
  });

  it("I want 3 items", () => {
    WishCollection.insert = chai.spy();
    mainInstance.allIWantForChristmas();

    chai.expect(WishCollection.insert).to.have.been.called.exactly(3);
  });
});
