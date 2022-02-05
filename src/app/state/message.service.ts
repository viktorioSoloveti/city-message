import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";
import { of } from "rxjs";
import data from "../messages.data";
import { MessageStore } from "./message.store";

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    constructor(private messageStore: MessageStore) { }

    initMessages(): void {
        // имитация запроса на бек
        // this.http.get('').subscribe(data => {
        //     this.messageStore.set(data);
        // })

        this.messageStore.set(data);
    }

    delete(id: string) {
        this.messageStore.remove(id)
    }

    liked(id: string) {
        this.messageStore.update(id, enity => {
            console.log(enity)
            return {
                ...enity,
                liked: !enity.liked
            }
        })
    }

}