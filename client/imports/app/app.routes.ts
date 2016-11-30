import { Route }         from '@angular/router';

// Import Component
import { WishComponent } from './wish/wish.component';

// Append Component to routes array
export const routes: Route[] = [
  { path: '', component: WishComponent }
];
