import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface DialogData {
  newStepsMm: number;
}

@Component({
  selector: 'default-dialog',
  templateUrl: 'default-dialog.component.html',
})
export class DefaultDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log('data ', data);
  }
}
