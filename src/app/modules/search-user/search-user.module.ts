import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '**',
    component: SearchUserComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [SearchUserComponent],
  exports: [SearchUserComponent],
})
export class SearchUserModule {}
