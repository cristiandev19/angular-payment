import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPayment } from '../../interfaces/payment.interface';
import { ISelect } from '../../interfaces/select.interface';
import { paymentTypes } from '../../mock/payment.mock';

@Component({
  selector: 'payment-form',
  templateUrl: 'payment-form.component.html',
  styleUrls: ['payment-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentForm implements OnInit {
  @Input() amount: number;
  @Input() type: number;
  @Output() emitter = new EventEmitter();
  types: ISelect[] = paymentTypes;
  
  private paymentForm: FormGroup;

  ngOnInit() {
    console.log('iniciar');
    this.paymentForm = new FormGroup({
      amount: new FormControl(this.amount, [Validators.required]),
      type: new FormControl(this.type, [Validators.required]),
    });
    this.paymentForm.valueChanges.subscribe((form: IPayment) => {
      if (!Number.isInteger(form.amount)) return;
      if (!Number.isInteger(form.type)) return;
      this.emitter.emit({ ...form })
    })
  }

}
