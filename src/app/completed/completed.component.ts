import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  completedItems: string[] = [];

  constructor(private data: DataService) {
    this.data.completed.subscribe(items => this.completedItems = items);
  }

  ngOnInit(): void {
  }

}
