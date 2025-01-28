import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TitlePageComponent } from "../../shared component/title-page/title-page.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgClass, TitlePageComponent],
 templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
reservationFrom:FormGroup;
isInsideHomeComponent: boolean=false;
constructor(private fb:FormBuilder,private rout:ActivatedRoute){
  this.reservationFrom=this.fb.group({
    date: ['', Validators.required],
    name: ['', [Validators.required, Validators.minLength(3)]],
    time: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    people: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

  })
}
ngOnInit(): void {
  this.rout.url.subscribe((segments) => {
    const currentPath = segments.map(segment => segment.path).join('/');
    this.isInsideHomeComponent = currentPath === ''; // إذا كنت في HomeComponent
    console.log('Current Path:', currentPath);
  });
 
}
onSubmit(){
  if(this.reservationFrom.valid){
    alert('Reservation Successful!')
  }else{
    alert('Please fill out the form correctly.');
  }
}
}
