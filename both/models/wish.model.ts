import { CollectionsObject } from './collection-object.model';

export interface Wish extends CollectionsObject {
  name: string;
  description: string;
  owner?: string;
  public: boolean;
}
