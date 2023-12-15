import { Component, Input } from '@angular/core';

@Component({
  selector: 'joe-message-item',
  standalone: true,
  imports: [],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss'
})
export class MessageItemComponent {
  @Input() username!: string;
  @Input() message!: string;
}
