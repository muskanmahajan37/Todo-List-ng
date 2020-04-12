import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from "../../models/todo.model";
import { TodosComponent } from '../todos/todos.component';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
 
  // set dynamic classes
  setClasses(){
    let classes ={
      todo: true,   // this is the class name and this always want to get added so set to true
      'is-complete': this.todo.completed   // as is-completed class have a - this is why we need to put it in courts,
      // this class will be true only when completed will be true
    }
    return classes;
  }

  // toggle method
  onToggle(todo){
    // console.log('toggle');

    // on UI and toggling value of completed
    todo.completed=!todo.completed;

    // on Server 
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onDelete(todo){
    // console.log('delete');
    this.deleteTodo.emit(todo);
  }
}


// Input is to bring data from todos as code in TodosComponent.component.html
