import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageItemComponent } from '../message-item/message-item.component';

import { io } from 'socket.io-client';

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

  socket!: any;

  messages: any[] = [
    {username: 'Ahmed', message: 'Hello all'}
  ];

  constructor() {
    this.socket = io('ws://172.16.227.115:3000');
    this.socket.on('message', (messageObject: any) => {
      this.messages.push(messageObject);
    })
  }

  sendMessage(username: string, message: string) {
    this.message = '';
    this.socket.emit('message', {username: username, message: message})
  }
}
