import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith, tap } from 'rxjs';

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

  public showEmailCtrl$!: Observable<boolean>;
  public showPhoneCtrl$!: Observable<boolean>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormControls();
    this.initMainFrom();
    this.initFormObservables();
  }

  private initMainFrom(): void {
    this.mainForm = this.formBuilder.group({
      personnalInfo: this.personnalInfoForm,
      contactPreference: this.contactPreferenceCtrl,
      email: this.emailForm,
      phone: this.phoneCtrl,
      loginInfo: this.loginInfoForm
    });
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

  private initFormObservables() {
    this.showEmailCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference === 'email'),
      tap(showEmailCtrl => this.setEmailValidators(showEmailCtrl))
    );

    this.showPhoneCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference === 'phone'),
      tap(showPhoneCtrl => this.setPhoneValidators(showPhoneCtrl))
    );
  }

  private setEmailValidators(showEmailCtrl: boolean) {
    if (showEmailCtrl) {
      this.emailCtrl.addValidators([Validators.required, Validators.email]);
      this.confirmEmailCtrl.addValidators([Validators.required, Validators.email]);
    } else {
      this.emailCtrl.clearValidators();
      this.confirmEmailCtrl.clearValidators();
    }
    this.emailCtrl.updateValueAndValidity();
    this.confirmEmailCtrl.updateValueAndValidity();
  }

  private setPhoneValidators(showPhoneCtrl: boolean) {
    if (showPhoneCtrl) {
      this.phoneCtrl.addValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    } else {
      this.phoneCtrl.clearValidators();
    }
    this.phoneCtrl.updateValueAndValidity();
  }

  onSubmitForm(): void {
    console.log(this.mainForm.value);
  }
}
