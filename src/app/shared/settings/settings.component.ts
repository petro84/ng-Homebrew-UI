import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  active!: boolean;
  brewOptions!: any[];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.brewOptions = [
      { label: 'Stop', value: 'stop' },
      { label: 'Start', value: 'start' }
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      startBrew: ['stop'],
      name: [''],
      interval: [0]
    });

    this.form.disable();
  }
}
