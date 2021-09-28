import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTemplateComponent } from './View/first-template/first-template.component';
import { MainPageComponent } from './View/main-page/main-page.component';

const routes: Routes = [{ path: 'create', component: FirstTemplateComponent },{path:'',component:MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
