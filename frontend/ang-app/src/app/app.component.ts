
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[] = [];

  backendStatus = 'UNKNOWN';

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  checkBackend(): void {
    this.http.get<{status: string}>(
      `${this.apiUrl}/health`
    ).subscribe({
      next: response => {
        this.backendStatus = response.status;
      },
      error: () => {
        this.backendStatus = 'DOWN';
      }
    });
  }

  loadUsers(): void {
    this.http.get<User[]>(
      `${this.apiUrl}/users`
    ).subscribe({
      next: response => {
        this.users = response;
      },
      error: error => {
        console.error('API error:', error);
      }
    });
  }
}
