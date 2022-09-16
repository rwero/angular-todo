import { Component, OnInit,Input } from '@angular/core';
import { ModalService } from '../modal.service';
export interface Task {
id : string,
name : string,
isDone : boolean
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private modalService : ModalService) { }

  ngOnInit(): void {
  }
  @Input() task: Task  = {id :'',name :'',isDone : false};
handleCheck(task:Task):void{
	task.isDone = !task.isDone;
	localStorage.setItem("items",JSON.stringify(this.modalService.items))
}
deleteTask(task:Task):void{
	this.modalService.items = this.modalService.items.filter((el:Task)=>el.id != task.id);
	localStorage.setItem("items",JSON.stringify(this.modalService.items))

}
}
