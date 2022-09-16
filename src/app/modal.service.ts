import { Injectable } from '@angular/core';
import { Task } from './item/item.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  isModalOpen = false;
  items :Task[]= JSON.parse(localStorage.getItem("items") || "[]");
}
