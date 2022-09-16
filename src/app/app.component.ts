import { Component } from '@angular/core';
import { Task } from './item/item.component';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
constructor (public modalService: ModalService) {}
  showDate():String {
const date = new Date();
     const today = date.toLocaleDateString('en-EN', { weekday: 'long' });   
	 let utcDate = date.toUTCString().split(",")[1].split("GMT")[0]
	return `${today} , ${utcDate}`;
  }
deleteMarkedTasks():void {
	this.modalService.items =this.modalService.items.filter((task :Task) =>!task.isDone);
	localStorage.setItem("items", JSON.stringify(this.modalService.items));
}
clearAllTodos():void {
	this.modalService.items =[];
	localStorage.setItem("items","[]");
}

markAllChecked():void {
	this.modalService.items.forEach((el:Task)=>{el.isDone =true});
	localStorage.setItem("items", JSON.stringify(this.modalService.items));

}
}
