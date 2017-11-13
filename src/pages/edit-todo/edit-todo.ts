import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoProvider as Todo } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {
  todo: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todo = this.navParams.data;
  }

  editTodo() {
    Todo.save(this.todo)
      .then(data => {
        this.navCtrl.pop();
      })
      .catch(error => {
        console.error(error);
      });
  }

  removeTodo() {
    Todo.destroy(this.navParams.data.objectId)
      .then(data => {
        this.navCtrl.pop();
      })
      .catch(error => {
        console.error(error);
      });
  }
}
