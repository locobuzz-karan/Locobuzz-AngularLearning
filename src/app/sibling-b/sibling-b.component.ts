import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling-b',
  templateUrl: './sibling-b.component.html'
})
export class SiblingBComponent implements OnInit {
  receivedMessage = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.message$.subscribe(message => {
      this.receivedMessage = message;
    });
  }
}
