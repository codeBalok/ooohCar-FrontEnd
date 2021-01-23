import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { timer, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  errors: string[];
  registerData: any = {};

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),
        Validators.pattern("^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d]).*$")]]
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.registerData.DisplayName=this.f.fullname.value;
    this.registerData.Email=this.f.email.value;
    this.registerData.Password=this.f.password.value;
    this.accountService.register(this.registerData).subscribe(response => {
      this.router.navigateByUrl('/login');
    }, error => {
      console.log(error);
      this.errors = error.errors;
    });
  }

  validateEmailNotTaken(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.accountService.checkEmailExists(control.value).pipe(
            map(res => {
              return res ? { emailExists: true } : null;
            })
          );
        })
      );
    };
  }

}
