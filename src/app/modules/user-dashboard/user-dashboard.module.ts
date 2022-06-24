import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from '../search-user/search-user/search-user.component';
const routes: Routes = [
  {
    path: 'search-user',
    loadChildren: () =>
      import('../search-user/search-user.module').then(
        (m) => m.SearchUserModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [UserDashboardComponent],
  exports: [UserDashboardComponent],
})
export class UserDashboardModule {}
