import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Habit {
  name: string;
  selected: boolean;
  disabled: boolean;
  habitCollection?: Habit[];
}

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
})
export class HabitsComponent implements OnInit {
  taskList: any[] = [];
  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  constructor(private formBuilder: FormBuilder) {}
  habits: Habit = {
    name: 'Dynamic Movie List',
    selected: false,
    disabled: false,
    habitCollection: [
      { name: ' wake up at 5 a.m', selected: true, disabled: false },
      { name: 'work out at the gym', selected: false, disabled: false },
      {
        name: 'practices yoga and meditation',
        selected: true,
        disabled: false,
      },
      {
        name: 'being present',
        selected: false,
        disabled: false,
      },
      { name: 'Keep work space clean', selected: false, disabled: false },
      { name: 'Healthy diet', selected: true, disabled: false },
    ],
  };

  ngOnInit(): void {}

  addTask() {
    const value = this.newTodoForm.value.todoItem;
    this.newTodoForm.reset();
  }
}
