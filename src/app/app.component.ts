import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  showDate():String {
	return `${new Date().toUTCString().split("GMT")[0]}`
  }
  items = ["learn angular", "build todo app","deploy it"];
}
