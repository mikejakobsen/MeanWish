// Test stuff
import {assert}                      from "chai";
import {TestBed, TestModuleMetadata} from "@angular/core/testing";

// Project imports
import {WishComponent}               from "./wish.component";
import {Wish}                        from "../../../../both/models/wish.model";
import {WishDataService}             from "./wish-data.service";
import {Observable, BehaviorSubject} from "rxjs";

describe("WishComponent", () => {
  let wishComponentInstance: WishComponent;
  let wishComponentElement;
  let componentFixture;

  let mockData = new BehaviorSubject([]);
  mockData.next([
    <Wish>{
      name: "A new Bike",
      description: "I really want a new bike"
    }
  ]);

  let mockDataService = {
    getData: () => mockData
  };

  beforeEach(() => {
    TestBed.configureTestingModule(<TestModuleMetadata>{
      declarations: [WishComponent],
      providers: [
        {provide: WishDataService, useValue: mockDataService}
      ]
    });

    componentFixture = TestBed.createComponent(WishComponent);
    wishComponentInstance = componentFixture.componentInstance;
    wishComponentElement = componentFixture.debugElement;
  });

  describe("@Component instance", () => {
    it("Should have a title above the wishlist", () => {
      assert.typeOf(wishComponentInstance.title, "string", "title should be a string!");
    });

    it("Should list a name and the word wishlist", () => {
      assert.equal(wishComponentInstance.title, "Wishlist");
    });

    it("Should have an Observable", () => {
      wishComponentInstance.ngOnInit();
      assert.isTrue(wishComponentInstance.data instanceof Observable);
    });

    it("Should have an items in the Observable", (done) => {
      wishComponentInstance.ngOnInit();
      assert.isTrue(wishComponentInstance.data instanceof Observable);

      wishComponentInstance.data.subscribe((data) => {
        assert.equal(data.length, 1);
        assert.typeOf(data, "array");

        done();
      });
    });
  });

  describe("@Component view", () => {
    it("Should print the wishlist and name", () => {
      componentFixture.detectChanges();
      assert.include(wishComponentElement.nativeElement.innerHTML, "Wishlist");
    });

    it("Should change the h2 when the item changes", () => {
      componentFixture.detectChanges();
      assert.include(wishComponentElement.nativeElement.innerHTML, "Wishlist");
      wishComponentInstance.title = "Another wishlist";
      componentFixture.detectChanges();
      assert.include(wishComponentElement.nativeElement.innerHTML, "Another wishlist");
    });

    it("Should display a list (ul) of wishes", () => {
      componentFixture.detectChanges();
      assert.isNotNull(wishComponentElement.nativeElement.querySelector("ul"));
    });
  });
});
