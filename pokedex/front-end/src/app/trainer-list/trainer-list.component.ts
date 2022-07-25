import { TrainerService } from './../service/trainer.service';
import { Trainer } from './../models/trainer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {
  trainers: Observable<Trainer[]> | undefined;

  constructor(
   private trainerService: TrainerService    
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.trainers = this.trainerService.getTrainersList();
  }

  highlighted : Trainer | null = null;
  highlight(trainer: Trainer | null) : void {
    this.highlighted = trainer;
  }
}
