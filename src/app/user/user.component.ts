import { Component , EventEmitter, Input , Output, output , computed,input } from '@angular/core';
// type User={
//     id: string;
//     avatar : string;
//     name : string;
// }
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

   
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id! : string;
  // @Input({required : true}) avatar! : string;
  // @Input({required : true}) name! : string;
  // @Input({required : true}) user! : {
  //   id: string;
  //   avatar : string;
  //   name : string;
  // };

  @Input({required : true}) user! : User;
  // avatar = input.required<string>();
  // name = input.required<string>();
  get imagePath(){
    return "assets/users/users/" + this.user.avatar;
  }

  //  imagePath= computed( ()=>{
  //   return "assets/users/users/" + this.avatar();
  //  } );
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter();
  @Output() selectName = new EventEmitter();
            selectAvtar = output<string>();
    onSelectUser(){
      this.select.emit(this.user.id);
      this.selectName.emit(this.user.name);
      this.selectAvtar.emit(this.user.avatar);
      
    }

    
}
