import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ This includes NgModel

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling-a',
  standalone: true, // ✅ Only if you're using standalone components
  imports: [FormsModule], // ✅ This is correct
  templateUrl: './sibling-a.component.html',
  styleUrls: ['./sibling-a.component.css']
})
export class SiblingAComponent {
  message = '';

  constructor(private sharedService: SharedService) {}

  send() {
    this.sharedService.sendMessage(this.message);
    this.message = '';
  }
}
