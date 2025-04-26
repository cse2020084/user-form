import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentRoutingModule } from './component-routing.module';
import { TemplateComponent } from './template-form/template/template.component';
import { ReactiveComponent } from './reactive-form/reactive/reactive.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicConditionalComponent } from './Dynamic-forms/dynamic-conditional/dynamic-conditional.component';
import { DynamicNestedComponent } from './Dynamic-forms/dynamic-nested/dynamic-nested.component';
import { DynamicJsonComponent } from './Dynamic-forms/dynamic-json/dynamic-json.component';


@NgModule({
  declarations: [TemplateComponent, ReactiveComponent, DynamicConditionalComponent, DynamicNestedComponent, DynamicJsonComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    TemplateComponent,
    ReactiveComponent
  ]
})
export class ComponentModule { }
