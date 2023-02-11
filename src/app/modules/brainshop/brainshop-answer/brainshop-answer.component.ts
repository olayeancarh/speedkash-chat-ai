import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BrainshopResp } from 'src/app/core/models';

@Component({
  selector: 'app-brainshop-answer',
  templateUrl: './brainshop-answer.component.html',
})
export class BrainshopAnswerComponent implements OnInit, OnChanges {
  @Input() answer!: string | null;
  public slideup: boolean = true;
  public defaultMessage!: string;

  constructor() {}

  ngOnInit(): void {
    this.defaultMessage = `Hello there! What can I do for you? You can add the messages below to see how I work
      eg. "What is your name" and "What country are you from"`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    let new_message = changes['answer'];
    if (new_message.currentValue) {
      this.answer = new_message.currentValue;
      this.slideup = true;
    }
    setTimeout(() => this.slideup = false, 2000);
  }
}
