import { Meteor }         from 'meteor/meteor';
import { WishCollection } from '../../../both/collections/wish.collection';

Meteor.publish('wishes', function() {
  return WishCollection.find(buildQuery.call(this));
});

Meteor.publish('wishes', function(wishId: string) {
  return WishCollection.find(buildQuery.call(this, wishId));
});


function buildQuery(wishId?: string): Object {
  const isAvailable = {
    $or: [{
      public: true
    },
    { 
      // current user is the owner
      $and: [{
        owner: this.userId 
      }, {
        owner: {
          $exists: true
        }
      }]
    }]
  };

  if (wishId) {
    return {
      $and: [{
          _id: wishId
        },
        isAvailable
      ]
    };
  }

  return isAvailable;
}
