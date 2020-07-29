import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: { user: string; passwd: string } = { user: '', passwd: '' };

  constructor(
    private readonly auth: AuthService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  signIn(): void {
    const redirectTo = this.activatedRoute.snapshot.queryParamMap.get('redirectTo');
    this.auth.login(this.form.user, this.form.passwd, redirectTo);
  }
}
