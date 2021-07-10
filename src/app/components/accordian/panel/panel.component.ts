import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  showPanelBody: boolean = false;
  panelShowEvent: EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnInit() { }

  show() {
    this.showPanelBody = true;
  }

  hide() {
    this.showPanelBody = false;
  }

  toggle() {
    if (this.showPanelBody) {
      this.hide();
    } else {
      this.show();
      this.panelShowEvent.emit(true);
    }
  }

}
