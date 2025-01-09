import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
reservationFrom:FormGroup;
constructor(private fb:FormBuilder){
  this.reservationFrom=this.fb.group({
    date: ['', Validators.required],
    name: ['', [Validators.required, Validators.minLength(3)]],
    time: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    people: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

  })
}
onSubmit(){
  if(this.reservationFrom.valid){
    alert('Reservation Successful!')
  }else{
    alert('Please fill out the form correctly.');
  }
}
}
