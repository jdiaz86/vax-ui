import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-vax-detail',
  templateUrl: './vax-detail.component.html',
  styleUrls: ['./vax-detail.component.scss']
})
export class VaxDetailComponent implements OnInit {
  myForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      dui: new FormControl('', [
        Validators.required
      ]),
      last_name: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      date: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      state: new FormControl(''),
      vax: new FormControl(''),
      date_vax: new FormControl(''),
      dosis: new FormControl(''),
    })
  }

  save() {

  }
}
