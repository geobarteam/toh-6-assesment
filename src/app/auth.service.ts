import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private readonly router: Router,
    private readonly messageService: MessageService
  ) {}

  login(user: string, passwd: string, redirectTo?: string): void {
    if (user === 'flx' && passwd === 'Fluxys@2020') {
      this.log('Login success');
      sessionStorage.setItem('toh-auth', '1');
      if (redirectTo != undefined && redirectTo !== '') {
        this.router.navigateByUrl(redirectTo);
      } else {
        this.router.navigate(['']);
      }
    } else {
      this.log('Invalid username or password! Try again.');
    }
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('toh-auth') === '1';
  }

  logout(): void {
    this.log('Logout success');
    sessionStorage.removeItem('toh-auth');
    this.router.navigate(['']);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
