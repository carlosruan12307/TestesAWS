import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formC!: FormGroup;

  constructor(private serv: HttpService) {}
  ngOnInit(): void {
    this.formC = new FormGroup({
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  get usuario() {
    return this.formC.get('usuario');
  }
  get senha() {
    return this.formC.get('senha');
  }
}
