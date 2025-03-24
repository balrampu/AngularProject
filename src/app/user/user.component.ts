import { Component , EventEmitter, Input , Output, output , computed,input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   @Input({required: true}) id! : string;
  @Input({required : true}) avatar! : string;
  @Input({required : true}) name! : string;

  // avatar = input.required<string>();
  // name = input.required<string>();
  get imagePath(){
    return "assets/users/users/" + this.avatar;
  }

  //  imagePath= computed( ()=>{
  //   return "assets/users/users/" + this.avatar();
  //  } );

  @Output() select = new EventEmitter();
  @Output() selectName = new EventEmitter();
            selectAvtar = output<string>();
    onSelectUser(){
      this.select.emit(this.id);
      this.selectName.emit(this.name);
      this.selectAvtar.emit(this.avatar);
      
    }

    
}
