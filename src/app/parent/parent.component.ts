import { Component } from '@angular/core';
import { SiblingAComponent } from '../sibling-a/sibling-a.component';
import { SiblingBComponent } from '../sibling-b/sibling-b.component';


@Component({
  selector: 'app-parent',
  imports: [SiblingAComponent,SiblingBComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
