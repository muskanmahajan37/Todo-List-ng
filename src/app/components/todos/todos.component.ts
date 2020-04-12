import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(Todos=>{
      this.todos=Todos;
    });
  }

  deleteTodo(todo: Todo){
    // console.log('Delete me');

    // on UI
    this.todos = this.todos.filter(t => t.id !== todo.id);  // returning all todos without matching IDs

    // on server
    this.todoService.deleteTodo(todo).subscribe(todo =>{
      console.log('Deleted From Server');
    });
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo =>{
    this.todos.push(todo);
    })
  }

}
