import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrainshopComponent } from './modules/brainshop/brainshop.component';

const routes: Routes = [
  { path: '', redirectTo: 'brainshop', pathMatch: 'full' },
  {
    path: '',
    component: BrainshopComponent,
    children: [
      {
        path: 'brainshop',
        loadChildren: () =>
          import('src/app/modules/brainshop/brainshop.module').then(m => m.BrainshopModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
