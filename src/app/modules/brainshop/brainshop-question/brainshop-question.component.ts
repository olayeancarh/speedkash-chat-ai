import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Brainshop } from 'src/app/core/models';

@Component({
  selector: 'app-brainshop-question',
  templateUrl: './brainshop-question.component.html',
})
export class BrainshopQuestionComponent implements OnInit, OnChanges {

  @Input() message: Brainshop | undefined | null;
  public slideup: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let question = changes['message'];
    if (question.currentValue) {
      this.message = question.currentValue;
      this.slideup = true;
    }
    setTimeout(() => this.slideup = false, 2000);
  }

}
