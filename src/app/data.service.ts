import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private todoItems: any = new BehaviorSubject([
    {id: 1, task: 'Clean the car'},
    {id: 2, task: 'Buy groceries'},
    {id: 3, task: 'Pay electricity bills'},
    {id: 4, task: 'Water plants'},
    {id: 5, task: 'Wash the dishes'}
  ].sort((a,b) => {return a.id > b.id ? 1: -1;}));
  todo = this.todoItems.asObservable();

  private compSet: any = new BehaviorSubject([]);
  completed = this.compSet.asObservable();

  constructor() { }

  setList (items: object[]) {
    this.todoItems.next(items);
  }

  setCompleted (items: object[]) {
    this.compSet.next(items);
  }
}
