import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import{RouterModule} from '@angular/router';
import { FormGROUPcompComponent } from './form-groupcomp/form-groupcomp.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FormbuilderCompComponent } from './formbuilder-comp/formbuilder-comp.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplatDriven2ComPComponent } from './templat-driven2-com-p/templat-driven2-com-p.component';
import { DynamicFormCompComponent } from './dynamic-form-comp/dynamic-form-comp.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
 } from '@angular/material';
import { DynamicJsonFieldComponent } from './dynamic-json-field/dynamic-json-field.component';
import { DynamicCheckBoxValiComponent } from './dynamic-check-box-vali/dynamic-check-box-vali.component';
import { OrderBySelectedPipePipe } from './order-by-selected-pipe.pipe';
import { PyramidPatternComponent } from './pyramid-pattern/pyramid-pattern.component';
import { ScssCompComponent } from './scss-comp/scss-comp.component';
import { ScssNestedRullComponent } from './scss-nested-rull/scss-nested-rull.component';


@NgModule({
  declarations: [
    AppComponent,
    FormGROUPcompComponent,
    FormbuilderCompComponent,
    TemplateDrivenFormComponent,
    TemplatDriven2ComPComponent,
    DynamicFormCompComponent,
    ReactiveFormValidationComponent,
    DynamicJsonFieldComponent,
    DynamicCheckBoxValiComponent,
    OrderBySelectedPipePipe,
    PyramidPatternComponent,
    ScssCompComponent,
    ScssNestedRullComponent
  ],
  imports: [

      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    
    RouterModule.forRoot([
      {
        path:"FormGroup",
        component:FormGROUPcompComponent
      },
      {
        path:"FormBuilder",
        component:FormbuilderCompComponent
      },
      {
        path:"template",
        component:TemplateDrivenFormComponent
      },
      {
        path:"template2",
        component:TemplatDriven2ComPComponent
      },
      {
        path:'DynamicForm',
        component:DynamicFormCompComponent
      },
      {
        path:"ReactValid",
        component:ReactiveFormValidationComponent
      },
      {
        path:'dynamicJson',
        component:DynamicJsonFieldComponent
      },
      {
        path:'dynamicCheckBox',
        component:DynamicCheckBoxValiComponent

      },
      {
        path:'PATTERN',
        component:PyramidPatternComponent

      },
      {
        path:'SCssExample',
        component:ScssCompComponent
      },
      {
        path:'SassNested',
        component:ScssNestedRullComponent
      }

    ]),
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
