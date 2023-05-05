import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  secretKey: string = 'mrgvjyqy';

  ContactForm = this.fb.group({
    name: [''],
    email: [''],
    number: [''],
    message: [''],
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  sendEmail(name: String, 
            email: String, 
            number: String,
            message: String) {
    //Set the url with your secretKey from formspree.io
    let url = 'https://formspree.io/f/' + this.secretKey;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };



    let data = `name=${name}&email=${email}&number=${number}&message=${message}`;

    this.httpClient.post<any>(url, data, httpOptions).subscribe(
      () => {
        const Toast = Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos enviados correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      () => {
        Swal.fire(
          'Error',
          'Datos Incorrectos, Volver a intentar',
          'error'
        );
      }
    );
  }
}
