import { NgModule }                         from "@angular/core";
import { BrowserModule }                    from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { AccountsModule }                   from 'angular2-meteor-accounts-ui';

import { AppComponent }                     from "./app.component";
import { WishInfoComponent }                from "./wish/wish-info.component";
import { WishComponent }                    from "./wish/wish.component";
import { WishDataService }                  from "./wish/wish-data.service";
import { FormComponent }                    from './form/form.component';
import { routes, ROUTES_PROVIDERS }         from './app.routes';

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
    WishDataService,
    ...ROUTES_PROVIDERS
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsModule,
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
