import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of, tap, throwError } from "rxjs";
import data from "../messages.data";
import { createMessage, Message } from "./message.model";
import { MessageQuery } from "./message.query";
import { MessageStore } from "./message.store";

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    private messageUrl = 'api/messages';
    httpOption = {
        headers: new HttpHeaders({ 'Contents-Type': 'application/json' })
    }

    constructor(private messageStore: MessageStore,
        private messageQuery: MessageQuery,
        private http: HttpClient
    ) { }

    initMessages(): void {
        // Пришлось изменить тип на ANY
        this.http.get('api/messages').subscribe(data => {
            this.messageStore.set(data);
        })
        // this.messageStore.set(data);
    }

    delete(id: string) {
        return this.http.delete(this.messageUrl + '/' + id)
            .pipe(
                tap((data) => {
                    console.log('успех');
                }),
                catchError((err) => {
                    console.error(err);
                    return throwError(() => err)
                }),
                catchError((err) => {
                    console.error('err2');
                    return throwError(() => err)
                }),
            )
        // .subscribe({
        //     next: data => {
        //         console.log('Успешно удалено');
        //         this.initMessages();
        //     },
        //     error: error => {
        //         console.error(error);
        //     }
        // });
        // this.messageStore.remove(id);
    }

    liked(id: string) {
        const message: Message = this.getMessage(id);
        const newMessage = { ...message };
        newMessage.liked = !newMessage.liked;
        this.http.post(this.messageUrl + '/' + id, newMessage).subscribe((v) => {
            console.log(v);
        })
        // .subscribe({
        //     next: data => {
        //         console.log('Успех');
        //         this.initMessages();
        //     },
        //     error: error => console.log(error)
        // })
        // this.messageStore.update(id, enity => {
        //     return {
        //         ...enity,
        //         liked: !enity.liked
        //     }
        // })
    }

    add(title: string, text: string, imageUrl: string) {
        const message = createMessage(title, text, imageUrl);
        this.http.post(this.messageUrl, message)
            .subscribe({
                next: data => {
                    this.initMessages();
                },
                error: error => console.log(error)
            })

        // this.messageStore.add(message);
    }

    getMessage(id: string) {
        const select = this.messageQuery.getEntity(id);
        return select;
    }

    updateMessage(id: string, title: string, text: string, imageUrl: string) {
        const body = { title, text, imageUrl };
        this.http.post(this.messageUrl + '/' + id, body)
            .subscribe({
                next: data => {
                    console.log('Успех');
                    this.initMessages();
                },
                error: error => console.log(error)
            })
        // this.messageStore.update(id,
        //     enity =>
        //     ({
        //         ...enity,
        //         title,
        //         text,
        //         imageUrl
        //     })
        // );
    }

}