import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css' 
})
export class TemplateDrivenFormComponent {

userData = {
   Name : '',
   Email: '',
   Gender: ''
}

currentDate: Date = new Date();

onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.userData);
      alert('Form submitted successfully!');
      form.reset(); // Reset form after submission
    } else {
      alert('Form is invalid!');
    }
  }

}
