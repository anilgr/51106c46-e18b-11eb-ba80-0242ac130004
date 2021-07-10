import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccordianComponent } from "./accordian/accordian.component";
import { PanelComponent } from "./accordian/panel/panel.component";

@NgModule({
    declarations: [AccordianComponent, PanelComponent],
    imports: [CommonModule],
    exports: [AccordianComponent, PanelComponent]
})
export class ComponentModule {

}