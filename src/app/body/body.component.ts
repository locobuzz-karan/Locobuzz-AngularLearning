import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
    showSkill = false;
   
    toggleSkillsCard(){
      this.showSkill = !this.showSkill;
    }

  Skills : string[] = [
    "C#",
    "Dot Net Core",
    "Web Api",
    "Rest Api's",
    "SQL DB",
    "Docker"
  ]

}
