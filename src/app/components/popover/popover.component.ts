import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {


  constructor(
    private pop:PopoverController
  ) { }

  ngOnInit() {
  }

  close() {
    this.pop.dismiss();
  }


}
