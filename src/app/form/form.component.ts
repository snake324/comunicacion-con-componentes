import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() personAdded = new EventEmitter<any>();
  @Input() people: any[] = [];

  personForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.personForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  addPerson() {
    if (this.personForm.valid) {
      const person = {
        id: this.personForm.value.id,
        name: this.personForm.value.name,
        lastName: this.personForm.value.lastName,
        position: this.personForm.value.position,
        salary: this.personForm.value.salary
      };

      this.personAdded.emit(person);
      this.personForm.reset();
    }
  }
}
