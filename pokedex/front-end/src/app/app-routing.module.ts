import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: 'team', component: TeamListComponent},
  {path: 'team/:id', component: TeamDetailComponent},
  {path: 'trainer', component: TrainerListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
