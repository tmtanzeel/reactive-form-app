import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  myBiodataForm: FormGroup;

  constructor() {
    this.myBiodataForm = new FormGroup({
      name : new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      age : new FormControl(),
      gender: new FormControl(),
     


    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myBiodataForm.value);
  }



}
