import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  guests = [
    { id: 1, first_name: 'Juan', phone: '+639123456789', follow_up_day: 5 },
    { id: 2, first_name: 'Maria', phone: '+639987654321', follow_up_day: 1 }
  ];

  openSmsHandler(guest: any) {
    const message = `Hi ${guest.first_name}, it's been ${guest.follow_up_day} days since you visited NewLifePH! How can we pray for you?`;
    
    // Detect iOS for the correct separator
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIOS ? '&' : '?';
    
    const smsUrl = `sms:${guest.phone}${separator}body=${encodeURIComponent(message)}`;
    
    window.location.href = smsUrl;
  }
}
