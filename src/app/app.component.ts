import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FormControl, FormGroup} from '@angular/forms';
import {ShoppingListItem} from './shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todoForm: FormGroup;



  constructor() {
    this.todoForm = new FormGroup({
      todoInput: new FormControl('')
    });
  }

  ShoppingList: ShoppingListItem[] = [
    { title: 'milk', amount: 2 },
    { title: 'water', amount: 3 },
    { title: 'gas', amount: 1 }
  ];

  // Transfer Items Between Lists
  TodosList = [
    'Drag To Rearrange',
    'Bag',
    'Shirt',
    'Jeans',
    'Jacket',
  ];

  DoneTodosList = [
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  addTodo() {
    this.TodosList.push(this.todoForm.value.todoInput);
  }

  deleteTodo(doneTodosList) {
    console.log(doneTodosList);
    const index = this.DoneTodosList.indexOf(doneTodosList);
    console.log(index);
    if(index > -1) {
      this.DoneTodosList.splice(index, 1);
    }
  }
}
