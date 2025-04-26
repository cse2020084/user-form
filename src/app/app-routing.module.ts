import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicConditionalComponent } from 'src/component/Dynamic-forms/dynamic-conditional/dynamic-conditional.component';
import { DynamicJsonComponent } from 'src/component/Dynamic-forms/dynamic-json/dynamic-json.component';
import { ReactiveComponent } from 'src/component/reactive-form/reactive/reactive.component';
import { TemplateComponent } from 'src/component/template-form/template/template.component';


const routes: Routes = [
  {path:'',redirectTo:'/d-json',pathMatch:'full'},
  {path:'template-form',component:TemplateComponent},
  {path:'reactive-form',component:ReactiveComponent},
  {path:'d-con',component:DynamicConditionalComponent},
  {path:'d-json',component:DynamicJsonComponent},
  {path:'**', redirectTo: '/template-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
