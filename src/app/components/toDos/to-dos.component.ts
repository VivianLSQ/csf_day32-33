import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';


//Custom Validator for Future Date
const futureDate = (c: AbstractControl) => {
  if (Date.now() < Date.parse(c.value))
    return(null)
  else return {futureDate: true} as ValidationErrors
}

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent {

  taskForm!: FormGroup
  fb = inject (FormBuilder) //alt to constructor method
    //constructor(private fb: FormBuilder) { }

  @Output() newTask: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    //Need EventEmitter for Output
    //@Output() newItemEvent = new EventEmitter<string>();



  ngOnInit() {
    //(1) Bind the formGroup variable to the FormBuilder
    this.taskForm = this.fb.group({
      //(2) Bind attributes to FormControlName (this is where you validate too)
      details: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
      priority: this.fb.control<string>('low', [Validators.required,]),
      dueDate: this.fb.control<string>('', [Validators.required, futureDate ])

    });
  }


addTask(){
    console.log(this.taskForm.value);
    console.log("task details: " + this.taskForm.value.details);
    this.newTask.emit(this.taskForm.value);
  }


}
