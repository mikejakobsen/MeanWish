import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor }                             from 'meteor/meteor';
import { InjectUser }                         from 'angular2-meteor-accounts-ui';

import template                               from './form.component.html';
import { WishCollection }                     from '../../../../both/collections/wish.collection'

@Component({
  selector: 'form-element',
  template
})
@InjectUser('user')
export class FormComponent implements OnInit {
  user: Meteor.User;

  addForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [],
      // default value false
      public: [false]
    });
  }
  addWish(): void {
    if (!Meteor.userId()) {
      alert('Please sign in');
      return;
    }
    if (this.addForm.valid) {
      WishCollection.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));

      // Call Reset
      this.addForm.reset();
    }
  }
}
