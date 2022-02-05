import{ guid } from "@datorama/akita"

export interface Message{
    id: string,
    title: string,
    text: string,
    imageUrl: string,
    liked: boolean
}

export function createMessage(title: string, text: string, imageUrl: string): Message{
    return {
        id: guid(),
        title,
        text,
        imageUrl,
        liked: false
    } as Message
}