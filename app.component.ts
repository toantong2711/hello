import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  courses = [
    { id : 1, name : 'course 1'},
    {id : 2, name : 'course 2'},
    {id : 3, name :'course 3'},
  ];
<<<<<<< HEAD
  message: "ft_xxx: dev change";
  message: "ft_xxx: after fix bug";
=======
  
  message: 'Master'
>>>>>>> d4be6f58634e644e323d9cb597b78e8c2695738d
  onAdd () {
    this.courses.push({id: 5, name : 'course 5'});
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  post = {
    title : "Title",
    isFavorite : true
  }
  
}
