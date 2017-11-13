import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoProvider as Todo } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {
  todo: Todo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todo = this.navParams.data;
  }

  editTodo() {
    this.todo.save().then(
      () => {
        this.navCtrl.pop();
      },
      error => {

      });
  }

  removeTodo() {
    this.todo.destroy().then(
      () => {
        this.navCtrl.pop();
      },
      error => {

      });
  }
}
