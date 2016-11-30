import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { WishComponent } from "./wish/wish.component";
import { WishDataService } from "./wish/wish-data.service";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    WishComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    WishDataService
  ],
  // Modules
  imports: [
    BrowserModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
