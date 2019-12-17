import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(x => x.UserModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(x => x.AboutModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
