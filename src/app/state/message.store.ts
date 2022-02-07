import { Message } from "./message.model";
import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita"

export interface MessageState extends EntityState<any>{}

@Injectable({ providedIn: 'root'})

@StoreConfig({ name: 'messages'})
export class MessageStore extends EntityStore<MessageState>{
    constructor(){
        super();
    }
}