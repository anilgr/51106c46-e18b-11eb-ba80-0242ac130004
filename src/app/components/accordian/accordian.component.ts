import { AfterContentInit, Component, ContentChildren } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements AfterContentInit {

  @ContentChildren(PanelComponent) panels: PanelComponent[];
  constructor() { }

  ngAfterContentInit() {
    this.panels.forEach(p => {
      p.panelShowEvent.subscribe((shown) => {
        if (shown) {
          this.closeAllExcept(p);
          setTimeout(()=>{
            p.onClickPanel()
          })
        }
      })
    })
  }

  closeAllExcept(panel) {
    this.panels.forEach((p) => {
      if (p !== panel) {
        p.hide();
      }
    })
  }

}
