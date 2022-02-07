import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from "@angular/core";
import { Message } from "src/app/state/message.model";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'app-list-item',
    template: `
        <div class="message" *ngFor="let message of messages">
            <div class="mess_left">

                <div class="photo" 
                [style.background-image]="'url(' + [message.imageUrl] + ')'">
                </div>

                <div class="text_content">
                    <div class="title_like">
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
                    <p>{{message.text}}</p>
                </div>

            </div>

            <div class="mess_right">
                <div class="button_block">
                    <button type="button"
                    (click)="editMessage.emit(message.id)">
                        <img src="assets/icons/edit.svg" alt="">
                    </button>

                    <button type="button" 
                    (click)="delete.emit(message.id)">
                        <img src="assets/icons/recycler.svg" alt="">
                    </button>
                </div>
            </div>

        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./list-item.css']
})

export class ListItemComponent implements OnInit {

    @Input() messages: Message[];
    @Output() delete = new EventEmitter<string>()
    @Output() liked = new EventEmitter<string>()
    @Output() editMessage = new EventEmitter<string>()

    ngOnInit(): void {
    }
}