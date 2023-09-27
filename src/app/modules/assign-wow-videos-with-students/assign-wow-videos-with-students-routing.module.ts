import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignWowVideosWithStudentsComponent } from '../assign-wow-videos-with-students/assign-wow-videos-with-students/assign-wow-videos-with-students.component';
import { PrePayAndShareComponent } from '../assign-wow-videos-with-students/assign-wow-videos-with-students/pre-pay-and-share/pre-pay-and-share.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assign-wow-videos-with-students',
    pathMatch: 'full',
  },
  {
    path: 'assign-wow-videos-with-students',
    component: AssignWowVideosWithStudentsComponent,
  },
  {
    path: 'pre-pay-and-share',
    component: PrePayAndShareComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignWowVideosWithStudentsRoutingModule {}


