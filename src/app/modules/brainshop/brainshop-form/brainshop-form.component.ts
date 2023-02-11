import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-brainshop-form',
  templateUrl: './brainshop-form.component.html',
  styleUrls: ['./brainshop-form.component.css'],
})
export class BrainshopFormComponent implements OnInit, OnDestroy {
  @ViewChild('brainShopNgForm') brainShopNgForm!: NgForm;
  @Output() question = new EventEmitter<any>();
  brainShopForm!: FormGroup;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.brainShopForm = this._formBuilder.group({
      msg: ['']
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getReply(form: FormGroupDirective): void {
    if (form.valid) {
      this.question.emit(form.value);
      form.resetForm();
    }
  }
}
