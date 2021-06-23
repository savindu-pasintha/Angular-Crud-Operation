import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-angular',
  templateUrl: './learning-angular.component.html',
  styleUrls: ['./learning-angular.component.css']
})
export class LearningAngularComponent implements OnInit {


  titleVariable = "This Title-variable";
  arrVariable = ["a","b","c","d"];
  conditionTrueVariable = true;
  conditionFalseVariable = false;

  //get input tag values onKey(event: KeyboardEvent) { // with type info
  inputTagValue = '';
  onKey(event: any) { // without type info
   // this.inputTagValue += event.target.value + ' | ';
   this.inputTagValue = event.target.value ;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
