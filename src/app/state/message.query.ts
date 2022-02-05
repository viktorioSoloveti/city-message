import { Injectable } from "@angular/core";
import { MessageState, MessageStore } from "./message.store";
import {QueryEntity} from "@datorama/akita"
import { combineLatest } from "rxjs";
import { Message } from "./message.model";

@Injectable({providedIn: 'root'})
export class MessageQuery extends QueryEntity<MessageState>{

    constructor(override store: MessageStore){
        super(store);
    }

}