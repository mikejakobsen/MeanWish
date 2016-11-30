import { Route }             from '@angular/router';

// Import Component
import { WishComponent }     from './wish/wish.component';
import { WishInfoComponent } from './wish/wish-info.component';

// Append Component to routes array
export const routes: Route[] = [
  { path: '', component: WishComponent },
  { path: 'wish/:wishId', component: WishInfoComponent},
];
