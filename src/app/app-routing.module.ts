import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'main', component: MainComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
