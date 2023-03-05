import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { SiblingFormComponent } from './sibling-form/sibling-form.component';
import { LeSingleComponent } from './le-single/le-single.component';
import { EntityInputStartEndDateComponent } from './entity-input-start-end-date/entity-input-start-end-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    SiblingFormComponent,
    LeSingleComponent,
    EntityInputStartEndDateComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
