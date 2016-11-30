import "angular2-meteor-polyfills";
import 'foundation-sites/dist/foundation.js';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode }         from "@angular/core";
import { Meteor }                 from "meteor/meteor";
import { AppModule }              from "./imports/app";

enableProdMode();

Meteor.startup(() => {
   platformBrowserDynamic().bootstrapModule(AppModule);
});
