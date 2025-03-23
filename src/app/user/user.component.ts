import { Component , computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    //selectedUsers = DUMMY_USERS[randomIndex]
    selectedUsers = signal( DUMMY_USERS[randomIndex]);

    // get imagePath(){
    //   return "assets/users/users/" + this.selectedUsers.avatar;
    // }

    //using signal
    
    imagePath = computed(()=>  "assets/users/users/" + this.selectedUsers().avatar)

    get userName(){
      return this.selectedUsers.name;
    }

    
    // onSelectUser(){
    //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    //   this.selectedUsers = DUMMY_USERS[randomIndex]
    //   console.log("CLicked!")
    // }

    //using signal

    onSelectUser(){
      const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
      this.selectedUsers.set(DUMMY_USERS[randomIndex])
      console.log("CLicked!")
    }

    
}
