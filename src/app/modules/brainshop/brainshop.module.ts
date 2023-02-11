import { NgModule } from '@angular/core';
import { BrainshopQuestionComponent } from './brainshop-question/brainshop-question.component';
import { BrainshopAnswerComponent } from './brainshop-answer/brainshop-answer.component';
import { BrainshopComponent } from './brainshop.component';
import { BrainshopFormComponent } from './brainshop-form/brainshop-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BrainshopQuestionComponent,
    BrainshopAnswerComponent,
    BrainshopComponent,
    BrainshopFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BrainshopModule { }
