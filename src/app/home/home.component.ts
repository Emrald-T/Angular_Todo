import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todoItems: any[] = [];
  completedItems: any[] = [];
  nextId: number;
  todoItemEntry: string = "";

  constructor(private data: DataService) {
    this.data.completed.subscribe(items => this.completedItems = items);
    this.data.todo.subscribe(items => {
      this.todoItems = items
      this.nextId = items[items.length - 1].id + 1;
    });
  }

  ngOnInit(): void {
  }

  addToList (event: KeyboardEvent) {
    if (event.key === "Enter" && this.todoItemEntry.trim() !== "") {
      this.todoItems.unshift({id: this.nextId, task: this.todoItemEntry});
      this.nextId++;
      this.todoItemEntry = "";
      this.data.setList(this.todoItems);
    }
  }

  setChecked (event: Event, item: string): void {
    // window.alert(`You have clicked ${item}`);
  }

  deleteItem (item: any): void {
    for (let i = this.todoItems.length - 1; i >= 0; i--) {
      if (this.todoItems[i].id === item.id) {
        this.todoItems.splice(i, 1);
        break;
      }
    }
    this.data.setList(this.todoItems);
  }

  completeItem (item: any): void {
    this.deleteItem(item);
    this.completedItems.push(item);
    this.data.setCompleted(this.completedItems);
  }
}
