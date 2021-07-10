import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  exportAs: 'panelRef',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  @ViewChild('panelmarker') contentMarker: ElementRef;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
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
      this.panelShowEvent.next(true);
    }
  }

  onClickPanel() {
    console.log(this.contentMarker.nativeElement.offsetTop)
    this.onClick.next({offsetTop: this.contentMarker.nativeElement.offsetTop});
  }

}
