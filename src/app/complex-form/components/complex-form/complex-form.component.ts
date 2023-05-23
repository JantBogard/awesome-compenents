import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {

  public mainForm!: FormGroup;
  public personnalInfoForm!: FormGroup;
  public contactPreferenceCtrl!: FormControl;
  public emailCtrl!: FormControl;
  public confirmEmailCtrl!: FormControl;
  public emailForm!: FormGroup;
  public phoneCtrl!: FormControl;
  public passwordCtrl!: FormControl;
  public confirmPasswordCtrl!: FormControl;
  public loginInfoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormControls();
    this.initMainFrom();
  }

  private initMainFrom(): void {
    this.mainForm = this.formBuilder.group({});
  }

  private initFormControls(): void {
    this.personnalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.contactPreferenceCtrl = this.formBuilder.control('email');
    this.emailCtrl = this.formBuilder.control('');
    this.confirmEmailCtrl = this.formBuilder.control('');
    this.emailForm = this.formBuilder.group({
      email: this.emailCtrl,
      confirm: this.confirmEmailCtrl
    })
    this.phoneCtrl = this.formBuilder.control('');
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);
    this.loginInfoForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    })
  }

  onSubmitForm(): void {
    throw new Error('Method not implemented.');
  }
}
