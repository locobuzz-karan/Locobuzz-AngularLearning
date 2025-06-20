import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { ParentComponent } from './parent/parent.component';
import { NgMaterialComponent } from './ng-material/ng-material.component';


export const routes: Routes = [
     {path:'TwoWayBinding' , component:TwoWayDataBindingComponent},
     {path: 'About', component: AboutComponent },  
     {path:'TemplateDrivenForm', component:TemplateDrivenFormComponent},
     {path:'ReactiveForm',component:ReactiveFormsComponent},
     {path:'ToDoApp' , component:ToDoAppComponent},
     {path:'SiblingCommunicaton' , component:ParentComponent},
     {path:'ngMaterial' , component:NgMaterialComponent}
];