import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public modalService : ModalService) { }

  ngOnInit(): void {
  }
  itemValue = "";
  addTodo():void{
	console.log(`added ${this.itemValue}`);
	
	this.modalService.items.push({id :`${this.modalService.items.length}` ,name:this.itemValue,isDone:false});

	localStorage.setItem("items",JSON.stringify(this.modalService.items));
	this.modalService.isModalOpen = false;
	this.itemValue = "";
  }
  cancel():void {

	console.log("cancel")
	this.modalService.isModalOpen = false;
  }

}
