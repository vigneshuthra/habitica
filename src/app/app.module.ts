import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { DailyComponent } from './daily/daily.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HabitsComponent } from './habits/habits.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { FilterPipe } from './filterbar/filter.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DailyRouteComponent } from './daily-route/daily-route.component';
import { ProfileBannerComponent } from './profile-banner/profile-banner.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DailyComponent,
    TodoListComponent,
    HabitsComponent,
    FilterbarComponent,
    FilterPipe,
    DailyRouteComponent,
    ProfileBannerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
