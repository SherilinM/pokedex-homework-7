import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../models/team.model';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }



}
