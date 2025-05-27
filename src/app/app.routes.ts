import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


export const routes: Routes = [
     {path:'TwoWayBinding' , component:TwoWayDataBindingComponent},
     {path: 'About', component: AboutComponent },  
     {path:'TemplateDrivenForm', component:TemplateDrivenFormComponent}   
];