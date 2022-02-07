import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
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
    private messageQuery: MessageQuery,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.messages$ = this.messageQuery.selectAll();
  }

  delete(id: string) {
    this.messageService.delete(id).pipe().subscribe()
  }

  liked(id: string) {
    this.messageService.liked(id)
  }

  editMessage(id: string) {
    this.router.navigate(['edit/' + id]);
  }

}
