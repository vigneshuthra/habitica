import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  taskList: any[] = [];
  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  addTask() {
    const value = this.newTodoForm.value.todoItem;
    this.taskList.push({ id: this.taskList.length, name: value });
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
    this.newTodoForm.reset();
  }
  markDone(value: any) {
    
  }
  
  removeTask(i: any) {
    this.taskList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
  }
}
