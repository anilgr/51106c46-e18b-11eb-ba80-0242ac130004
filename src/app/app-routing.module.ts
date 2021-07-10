import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'scorecard',
    loadChildren: () => import('./scorecard/scorecard.module').then( m => m.ScorecardPageModule)
  },
  {
    path: '',
    redirectTo: 'scorecard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
