import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { TemplateComponent } from './template-form/template/template.component';
import { ReactiveComponent } from './reactive-form/reactive/reactive.component';


@NgModule({
  declarations: [TemplateComponent, ReactiveComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
