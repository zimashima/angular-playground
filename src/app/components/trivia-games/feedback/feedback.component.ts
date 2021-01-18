import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {

  @Input() feedbackIsCorrect: boolean;
  @Input() feedbackIsSubmitted: boolean;
  @Input() feedbackCorrectAnswer: boolean;

  constructor() {
  }

  ngOnInit():void {}
}
