import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DefaultDialogComponent} from "../../components/default-dialog/default-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      currentSteps: [null, Validators.required],
      currentLength: [null, Validators.required],
      reqExtrusion: [null, Validators.required]
    })
  }

  calculate(form: FormGroup) {
    if (form) {
      const cSteps = form.get("currentSteps")?.value;
      const cLength = form.get("currentLength")?.value;
      const reqExtrusion = form.get("reqExtrusion")?.value;
      const newStepsMm = (cSteps * reqExtrusion) / cLength;
      this.dialog.open(DefaultDialogComponent, {data: newStepsMm})
    }
  }

}
