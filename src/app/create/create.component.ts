import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../state/message.model';
import { MessageService } from '../state/message.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  adaptiveText: Array<string> = ['Создание', 'Создать']

  form: FormGroup;
  inputData: any;
  messageData: any;


  constructor(private messageService: MessageService,
    private router: Router) { 
    const urlId: Array<string> = this.router.url.split('/');
    this.messageData = this.messageService.getMessage(urlId[2])
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.minLength(1)),
      text: new FormControl('', Validators.minLength(1)),
      imageUrl: new FormControl('', Validators.minLength(1))
    })
    if(this.messageData != null){
      this.form.patchValue(
      {
        title: this.messageData.title,
        text: this.messageData.text,
        imageUrl: this.messageData.imageUrl
      })
      this.adaptiveText = ['Редактировать', 'Изменить'];
    }
  }

  submitData(){
    if(this.messageData != null){
      const newData: Message = {...this.form.value}
      this.messageService.updateMessage(this.messageData.id, newData.title, newData.text, newData.imageUrl)
    }else{
      const newData: Message = {...this.form.value};
      this.messageService.add(newData.title, newData.text, newData.imageUrl);
    }
    this.router.navigate(['/'])
  }
}
