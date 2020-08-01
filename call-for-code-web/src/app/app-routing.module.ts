import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeNewsComponent } from './components/fake-news/fake-news.component';


const routes: Routes = [
  { path: '', component: FakeNewsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
