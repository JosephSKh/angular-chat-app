import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { TODOsService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TODO } from './todo.model';
import { DotDotDotPipe } from './dotdotdot.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MessagesComponent, HttpClientModule, DotDotDotPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'SWA - Chat App';

  todos$!: Observable<TODO>;

  constructor(
    private todoService: TODOsService
  ) { }

  ngOnInit(): void {
    const id = 1;
    this.todos$ = this.todoService.getTODOS(id);
  }

  ngOnDestroy(): void {
    
  }

}
