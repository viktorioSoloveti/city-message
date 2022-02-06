import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "src/app/state/message.model";

@Component({
    selector: 'app-table-item',
    template: `
      <div class="messages_grid">
        <div class="message" *ngFor="let message of messages">
            <div class="photo" 
            [style.background-image]="'url(' + [message.imageUrl] + ')'"
            ></div>
            <div class="text_content">
                <div class="head">
                        <div class="head_left">
                            <h3>{{message.title}}</h3>
                            <button type="button" 
                            (click)="liked.emit(message.id)"
                            *ngIf="!message.liked">
                                <img src="assets/icons/no_like.svg" alt="">
                            </button>

                            <button type="button" 
                            (click)="liked.emit(message.id)"
                            *ngIf="message.liked"
                            >
                                <img src="assets/icons/like.svg" alt="">
                            </button>
                        </div>
                        <div class="head_right">
                            <button type="button">
                                <img src="assets/icons/edit.svg" alt="">
                            </button>

                            <button type="button" 
                            (click)="delete.emit(message.id)">
                                <img src="assets/icons/recycler.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <p>{{message.text}}</p>
            </div>
        </div> 
      </div>  
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./table-item.css']
})

export class TableItemComponent implements OnInit{

    @Input() messages: Message[];
    @Output() delete = new EventEmitter<string>()
    @Output() liked = new EventEmitter<string>()

    ngOnInit(): void {
    }
}