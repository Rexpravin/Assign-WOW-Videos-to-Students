import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module'
import { AssignWowVideosWithStudentsRoutingModule } from './assign-wow-videos-with-students-routing.module';
import { AssignWowVideosWithStudentsComponent } from './assign-wow-videos-with-students/assign-wow-videos-with-students.component';
import { PrePayAndShareComponent } from '../assign-wow-videos-with-students/assign-wow-videos-with-students/pre-pay-and-share/pre-pay-and-share.component';

@NgModule({
  declarations: [AssignWowVideosWithStudentsComponent, PrePayAndShareComponent],
  imports: [
    CommonModule,
    SharedModule,
    AssignWowVideosWithStudentsRoutingModule,
  ],
})
export class AssignWowVideosWithStudentsModule {}
