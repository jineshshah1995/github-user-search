import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryComponent } from './user-history/user-history.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    component: UserHistoryComponent,
  },
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [UserHistoryComponent],
  exports: [UserHistoryComponent]
})
export class UserHistoryModule { }