import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface _Daily {
  id: number;
  name: string;
}

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss'],
})
export class FilterbarComponent implements OnInit {
  searchTerm = '';
  dailies: _Daily[] = [];
  allDaily: _Daily[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<_Daily[]>('./assets/daily.json')
      .subscribe((data: _Daily[]) => {
        this.dailies = data;
        this.allDaily = this.dailies;
        console.log(this.allDaily);
      });
  }

  search(value: string): void {
    this.dailies = this.allDaily.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
}
