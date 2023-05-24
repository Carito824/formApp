import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrerPageComponent } from './pages/registrer-page/registrer-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'sing-up', component: RegistrerPageComponent},
      {path: '**', redirectTo: 'sing-up'},
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
