import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: string[] = [];
  newMessage: string="";
  isChatVisible: boolean = false;

  hideChat() {
    this.isChatVisible = !this.isChatVisible;
  }
  sendMessage() {
    if (this.newMessage) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}
