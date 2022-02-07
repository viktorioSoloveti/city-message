import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";

export class InMessageService implements InMemoryDbService{
    createDb() {
        let messages = [
            {
                id: 'asdwq12', 
                title: 'Касимов', 
                text: 'Городец мещерский', 
                imageUrl: 'https://putidorogi-nn.ru/images/stories/evropa/rossiya/kasimov_2.jpg', 
                liked: true
            },
            {
                id: 'sdfdsfe2', 
                title: 'Рязань', 
                text: 'Административный центр Рязанской области и Рязанского муниципального района', 
                imageUrl: 'http://ryazantourism.ru/uploads/images/ryazan1.jpg', 
                liked: false
            }
        ];
        return {messages}
    }
}