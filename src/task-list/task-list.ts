import { Component } from "@angular/core";
import { signal } from "@angular/core";
//task-list.ts
@Component({
    selector: 'task-list', // tên thẻ để dùng <task-list></task-list>
    template: `
    <h1>Task List</h1>
    <p>This is {{title}}</p>
    `,
    styles: `
    h1 {color: blue;}
    `

})


export class TaskList {
    title = 'Task List'

}