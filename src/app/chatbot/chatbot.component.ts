import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  chat: boolean;
  constructor() {
    this.chat = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.chat = false;
    }, 3000);
  }
  showChat() {
    this.chat = !this.chat;
  }
}
