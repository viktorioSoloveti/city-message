import { Message } from './state/message.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './state/message.service';
import { MessageQuery } from './state/message.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.initMessages();
  }
}
