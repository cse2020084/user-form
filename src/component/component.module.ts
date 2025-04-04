import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { TemplateComponent } from './template-form/template/template.component';
import { ReactiveComponent } from './reactive-form/reactive/reactive.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TemplateComponent, ReactiveComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TemplateComponent,
    ReactiveComponent
  ]
})
export class ComponentModule { }
