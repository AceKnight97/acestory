import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LearningComponent } from './learning.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [LearningComponent],
})
export class LearningModule {}
