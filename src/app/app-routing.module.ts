import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from 'src/component/reactive-form/reactive/reactive.component';
import { TemplateComponent } from 'src/component/template-form/template/template.component';


const routes: Routes = [
  {path:'',redirectTo:'/reactive-form',pathMatch:'full'},
  {path:'template-form',component:TemplateComponent},
  {path:'reactive-form',component:ReactiveComponent},
  {path:'**', redirectTo: '/template-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
