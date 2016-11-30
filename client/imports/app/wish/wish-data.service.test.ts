// chai uses as asset library
import { assert } from "chai";

// Project imports
import { WishDataService } from "./wish-data.service";
import { Observable } from "rxjs";

describe("WishDataService", () => {
  let wishDataService: WishDataService;

  beforeEach(() => {
    // Create the service instance
    wishDataService = new WishDataService();
  });

  it("Should return Observable when requesting the data", () => {
    assert.isTrue(wishDataService.getData() instanceof Observable);
  });
});
