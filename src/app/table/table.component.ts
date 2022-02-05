import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../state/message.model';
import { MessageQuery } from '../state/message.query';
import { MessageService } from '../state/message.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
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

}
