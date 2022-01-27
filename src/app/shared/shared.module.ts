import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PipesPipe } from './pipes/pipes.pipe';



@NgModule({
  declarations: [
    PipesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
