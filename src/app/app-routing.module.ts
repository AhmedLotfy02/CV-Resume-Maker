import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTemplateComponent } from './View/first-template/first-template.component';

const routes: Routes = [{ path: '', component: FirstTemplateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
