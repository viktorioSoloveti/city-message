import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../state/message.model';
import { MessageQuery } from '../state/message.query';
import { MessageService } from '../state/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(
    private messageService: MessageService,
    private messageQuery: MessageQuery
  ) { }

  ngOnInit(): void {
    this.messages$ = this.messageQuery.selectAll();
  }

  delete(id: string){
    this.messageService.delete(id);
  }
  
  liked(id: string){
    this.messageService.liked(id)
  }

}
