import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  userName: string = '';
  selectedUserId: string = 'u1';

  onSelectUser(id: string) {
    console.log('Selected user id: ', id);
    this.selectedUserId = id;
  }

  onSelectName(name: string) {
    this.userName = name;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

}
