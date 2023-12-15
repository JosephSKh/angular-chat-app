import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageItemComponent } from '../message-item/message-item.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageItemComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

  username!: string;
  message!: string;

  messages: any[] = [
    {username: 'Ahmed', message: 'Hello all'}
  ];

  sendMessage(username: string, message: string) {
    this.messages.push(
      {username: username, message: message}
    );
    this.message = '';
  }
}
