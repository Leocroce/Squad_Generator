import { GeneratorRoutingModule } from './generator-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorComponent } from './generator.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    GeneratorComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GeneratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class GeneratorModule { }
