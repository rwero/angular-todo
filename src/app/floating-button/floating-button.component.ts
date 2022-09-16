import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {

  constructor(private modalService : ModalService) { }

  ngOnInit(): void {
  }

  toggleModal():void  {
	this.modalService.isModalOpen = true;
  }
}
