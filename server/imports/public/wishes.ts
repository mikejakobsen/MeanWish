import { Meteor }         from 'meteor/meteor';
import { WishCollection } from '../../../both/collections/wish.collection';

interface Options {
  [key: string]: any;
}

Meteor.publish('wishes', function(options: Options) {
  return WishCollection.find(buildQuery.call(this), options);
});

Meteor.publish('wish', function(wishId: string) {
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
