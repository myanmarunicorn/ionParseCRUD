import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoProvider as Todo } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  todo: Todo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todo = new Todo();
  }

  addTodo() {
    this.todo.save().then(
      () => {
        this.navCtrl.pop();
      },
      error => {

      });
  }
}
