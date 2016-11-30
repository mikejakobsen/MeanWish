import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import template                               from './form.component.html';
import { WishCollection }                     from '../../../../both/collections/wish.collection'

@Component({
  selector: 'form-element',
  template
})
export class FormComponent implements OnInit {
  addForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: []
    });
  }
  addWish(): void {
    if (this.addForm.valid) {
      WishCollection.insert(this.addForm.value);

      // Call Reset
      this.addForm.reset();
    }
  }
}
