import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './compenents/candidate-list/candidate-list.component';
import { SingleCandidateComponent } from './compenents/single-candidate/single-candidate.component';

const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'candidates/:id', component: SingleCandidateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'candidates' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveStateRoutingModule { }
