import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IndexComponent } from './pages/index/index.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'workflow',
    component: WorkflowComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
