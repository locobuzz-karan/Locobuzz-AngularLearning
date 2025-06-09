import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-ng-material',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule
  ],
  templateUrl: './ng-material.component.html',
  styleUrls: ['./ng-material.component.css']
})
export class NgMaterialComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  optionalLabelText: string = '';
  optionalLabelTextChoices: string[] = ['(optional)', '(not required)', '(if needed)'];

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
  }

  updateOptionalLabel() {
    // You can perform an action when the label changes
    console.log('Optional label changed to:', this.optionalLabelText);
  }
}
