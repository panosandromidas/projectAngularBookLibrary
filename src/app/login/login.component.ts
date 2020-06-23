import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;


  instructions = instructions.login;
  constructor(
    private router: Router
    ) { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      email : new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('^[a-z0-9_-]{8,15}$')]))

    });
  }

  onLogin() {
    if (this.signupForm.valid) {
      this.router.navigate(['/list']);
    }

  }

}
