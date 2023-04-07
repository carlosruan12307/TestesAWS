import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formC!: FormGroup;

  ngOnInit(): void {
    this.formC = new FormGroup({
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }
  handleClick() {
    console.log(this.usuario?.errors?.['required']);
  }
  get usuario() {
    return this.formC.get('usuario');
  }
  get senha() {
    return this.formC.get('senha');
  }
  constructor() {}
}
