import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Previous approach
  //selectedUser = DUMMY_USERS[randomIndex];

  // Signal approach
  //selectedUser = signal(DUMMY_USERS[randomIndex]);

  // Signal approach
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  //imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  /*get imagePath() {
    return 'assets/users/' + this.selectedUser().avatar;
  }*/

  //onSelectUser() {
  //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //this.selectedUser = DUMMY_USERS[randomIndex];

  // Signal approach
  //this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //}

  // Approach with inputs

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  //@Output() selectedName = new EventEmitter<string>();

  // output function approach
  //select = output<string>();

  // Signal approach
  //avatar = input<string>();
  //name = input<string>();

  // Signal required approach
  //avatar = input.required<string>();
  //name = input.required<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  //imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.id);
    //this.selectedName.emit(this.name);
  }

  
}

