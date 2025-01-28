import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
sendMessage:FormGroup;
constructor(private fb:FormBuilder){
  this.sendMessage=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    message:['',Validators.required]
  })
}
onSumbit(){
if( this.sendMessage.valid){
    alert('Send Message Successful!')
  }else{
    alert('Please fill out the form correctly.')
  }
}
}
