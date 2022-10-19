import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  taskList: any[] = [];
  private _jsonURL = 'assets/daily.json';

  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  addValue: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}
  addTask() {
    const value = this.newTodoForm.value.todoItem;
    this.taskList.push({ id: this.taskList.length, name: value });
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
    this.newTodoForm.reset();
  }
  markDone(value: any) {}

  removeTask(i: any) {
    this.taskList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  getdata() {
    this.getJSON().subscribe((data) => {
      this.addValue = data;
      console.log(this.addValue);
    });
  }

  removeData(i: any) {
    this.addValue.splice(i, 1);
  }
}
