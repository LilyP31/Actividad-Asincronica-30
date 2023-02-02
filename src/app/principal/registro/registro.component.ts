import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private formBuilder : FormBuilder) {   
  }
  
  //Validacion  //
  registroForm = this.formBuilder.group({
    Nombre: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z ]{3,25}')]}],
    Apellido: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z]+ [a-zA-Z]+')] }],
    Correo: ['', { validators: [Validators.required, Validators.email ] }],
   
  });

  // Metodo Get
 
  get Nombre() {return this.registroForm.get('Nombre');}
  get Apellido() {return this.registroForm.get('Apellido');}
  get Correo() {return this.registroForm.get('Correo');}
 
  onSubmit(){
    if (this.registroForm.valid) {
      alert('El registro se envio de manera exitosa')
      console.log(this.registroForm.value)
   }
  }


}
/*
nombres: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z ]+')]} ],
apellidos: ['', { validators: [Validators.required, Validators.pattern('[a-zA-Z ]+')]}],
dni:[ '', { validators: [Validators.required, Validators.pattern('[0-9]{8}')]}],
*/ 