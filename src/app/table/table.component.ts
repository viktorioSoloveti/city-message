import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private messageQuery: MessageQuery,
    private router: Router
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

  editMessage(id: string){
    this.router.navigate(['edit/' + id]);
  }

}
