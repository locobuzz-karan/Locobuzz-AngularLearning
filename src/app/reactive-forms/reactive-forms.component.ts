import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-forms', 
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  USerDataForm = new FormGroup({
    UserName : new FormControl('',[Validators.required]),
    USerEmail: new FormControl('',[Validators.required])
  });

  onSubmit(){
    console.log("Reactive form Submitted ..." + "Data:" + this.USerDataForm.value );
     this.USerDataForm.reset(); 
  }

}
