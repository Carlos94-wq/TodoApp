import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo.model';
import { TodoService } from '../../Services/todo.services';

@Component({
    selector: 'app-card',
    templateUrl: './Card.component.html',
    styleUrls: ['./Card.component.css']
})

export class CardComponent implements OnInit{
    constructor(private _Services: TodoService){}

    public List:Todo[] = []

    ngOnInit() {
        this.List = this._Services.GetTodos();
        console.log(this.List);
    }

    Delete(id:number){
        this._Services.DeleteTodo(id);
    }
}