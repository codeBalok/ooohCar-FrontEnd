import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;
  authenticationData: any = {};
  constructor(private accountService: AccountService, private router: Router,
     private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
    
  }


  get f() { return this.loginForm.controls; }
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
  }
  this.authenticationData.UserName=this.f.username.value;
  this.authenticationData.Password=this.f.password.value;
  this.accountService.login(this.authenticationData).subscribe((response: any) => {
    debugger;
    var token = response.token; //response;
    var user = response;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['']);

  }, error => {
    console.log(error);
  });
  }
}
