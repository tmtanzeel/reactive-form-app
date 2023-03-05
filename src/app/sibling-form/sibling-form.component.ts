import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sibling-form',
  templateUrl: './sibling-form.component.html',
  styleUrls: ['./sibling-form.component.scss']
})
export class SiblingFormComponent implements OnInit {

  @Input() parentFormGroup : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.parentFormGroup.setControl('siblingsArray', new FormArray([
      new FormGroup({
        siblingName: new FormControl(),
        siblingAge: new FormControl(),
        siblingOccupation: new FormControl(),
      })
    ]))    
  }

  get siblingsArray(): FormArray {
    return this.parentFormGroup.get('siblingsArray') as FormArray;
  }


  addMethod() {
  this.siblingsArray.push(new FormGroup({
    siblingName: new FormControl(),
    siblingAge: new FormControl(),
    siblingOccupation: new FormControl(),
    }))

  }
}






  
  

