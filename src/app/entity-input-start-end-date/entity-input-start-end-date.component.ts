import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entity-input-start-end-date',
  templateUrl: './entity-input-start-end-date.component.html',
  styleUrls: ['./entity-input-start-end-date.component.scss'],
})
export class EntityInputStartEndDateComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  @Input() formArray: any;
  formGroupDisplayed: FormGroup;

  @Input() headerName: string;
  @Input() formControlNameString: string;

  startDateControlName: string;
  endDateControlName: string;

  constructor() {}

  ngOnInit(): void {
    this.startDateControlName = this.formControlNameString + 'StartDate';
    this.endDateControlName = this.formControlNameString + 'EndDate';

    if (this.formArray instanceof FormGroup) {
      console.log('1');

      this.formGroupDisplayed = this.formArray;
    } else if (this.formArray) {
      console.log('2');

      this.formArray.controls.forEach((item: any) => {
        console.log(item);

        this.formGroupDisplayed = item;
      });
    }
  }
}
