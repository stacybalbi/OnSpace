import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  secretKey: string = 'mayzvlzj';

  ServiceForm = this.fb.group({
    name: [''],
    city: [''],
    country: [''],
    email: [''],
    number: [''],
    instagram: [''],
    service_offering: [''],
    improvements: [''],
    arrival: [''],
    budget: [''],
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  sendEmail(
    name: String,
    city: String,
    country: String,
    email: String,
    number: String,
    instagram: String,
    service_offering: String,
    improvements: String,
    arrival: String,
    budget: String
  ) {
    //Set the url with your secretKey from formspree.io
    let url = 'https://formspree.io/f/' + this.secretKey;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    let data = `name=${name}&city=${city}&country=${country}&email=${email}&number=${number}&instagram=${instagram}&service_offering=${service_offering}&improvements=${improvements}&arrival=${arrival}&budget=${budget}`;

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
        Swal.fire('Error', 'Datos Incorrectos, Volver a intentar', 'error');
      }
    );
  }
}
