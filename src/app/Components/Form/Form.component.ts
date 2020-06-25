import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo.model';
import { NgModel } from '@angular/forms';
import { TodoService } from 'src/app/Services/todo.services';

@Component({
    selector: 'app-form',
    templateUrl: './Form.component.html',
    styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {
    constructor(private Services: TodoService) { }

    public form ={
        Descrip: ""
    }

    public Todo:number;
    public Model:Todo = new Todo();

    ngOnInit(): void { }

    Registrar(Form:NgModel){
        this.Model.Descrip = Form.value.Descrip
        this.Todo = this.Services.SetCounter();

        if (Form.valid == true) {
            this.Services.PostTodo(JSON.parse(JSON.stringify(this.Model)));
            this.form.Descrip = "";
        }
        else{
            alert('You have tos write a todo')
        }
    }
}
