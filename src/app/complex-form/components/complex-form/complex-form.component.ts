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
  public phoneCtrl!: FormControl;

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
    this.phoneCtrl = this.formBuilder.control('');
  }

  onSubmitForm(): void {
    throw new Error('Method not implemented.');
  }
}
