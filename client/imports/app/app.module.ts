import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { WishComponent } from "./wish/wish.component";
import { WishDataService } from "./wish/wish-data.service";
import { FormComponent } from './form/form.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    WishComponent,
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
    ReactiveFormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
