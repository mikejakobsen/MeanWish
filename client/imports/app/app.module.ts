import { NgModule }                         from "@angular/core";
import { BrowserModule }                    from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';

import { AppComponent }                     from "./app.component";
import { WishInfoComponent }                from "./wish/wish-info.component";
import { WishComponent }                    from "./wish/wish.component";
import { WishDataService }                  from "./wish/wish-data.service";
import { FormComponent }                    from './form/form.component';
import { routes }                           from './app.routes';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    WishComponent,
    WishInfoComponent,
    FormComponent
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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // References the route import above
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
