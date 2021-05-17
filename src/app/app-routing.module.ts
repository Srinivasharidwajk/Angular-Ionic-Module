import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , redirectTo : 'receipes' , pathMatch : 'full'},
  {path : 'receipes' ,
  children : [
    {path : '',
    loadChildren : () => import('./pages/receipe-list/receipe-list.module').then(m => m.ReceipeListPageModule)},
    {path : ':receipeId',
      loadChildren: () => import('./pages/receipe-details/receipe-details.module').then( m => m.ReceipeDetailsPageModule)}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
