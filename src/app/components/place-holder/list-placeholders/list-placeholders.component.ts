import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PlaceholderService } from 'src/app/services/placeholders/placeholder.service';

@Component({
  selector: 'app-list-placeholders',
  templateUrl: './list-placeholders.component.html',
  styleUrls: [ './list-placeholders.component.css' ]
})
export class ListPlaceholdersComponent implements OnInit {
  User: any;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _PlaceholderService: PlaceholderService,
  ) {
    this.form = this.fb.group({
      id: [''],
      name:[''],
      username: [''],
      email: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this._PlaceholderService.getUSers().subscribe(respuesta => {
      console.log(respuesta);
      this.User = respuesta;
      this.toastr.success("Se cargaron los registros correctamente", "Carga de registros");
    });
  }
}
