import { Injectable } from '@angular/core';
import { Todo } from '../Models/Todo.model';
 
@Injectable({
    providedIn: 'root'
})
export class TodoService {

    public List:Todo[] = []

    GetTodos(){
        return this.List;
    }

    PostTodo(Todo){
        this.List.push(Todo);
    }

    SetCounter(){
        return this.List.length + 1;
    }

    DeleteTodo(id){
        const index = this.List.indexOf(id);

        this.List.splice(index,1)
    }
}