import { Route }             from '@angular/router';
import { Meteor }             from 'meteor/meteor';

// Import Component
import { WishComponent }     from './wish/wish.component';
import { WishInfoComponent } from './wish/wish-info.component';

// Append Component to routes array
export const routes: Route[] = [
  { path: '', component: WishComponent },
  { path: 'wish/:wishId', component: WishInfoComponent, canActivate: ['canActivateForLoggedIn'] }
];

// Contains a Boolean - true if loggedIn
export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
