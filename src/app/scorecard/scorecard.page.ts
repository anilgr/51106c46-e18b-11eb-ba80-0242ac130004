import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ScorecardService } from '../services/scorecard/scorecard.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {
  scorecards: any[] = [];
  customerId: any; 
  totalScore: any;
  @ViewChild('content') content: IonContent;
  constructor(private scorecardService: ScorecardService) { }

  ngOnInit() {
    this.scorecardService.getScorecardData().subscribe((res)=>{
      console.log(res)
      if(res.success) {
        this.scorecards = res.data.scorecard;
        this.customerId = res.data.customer_id;
        this.totalScore = res.data.you_scored;
      }
    })
  }

  ngAfterViewInit() {
    console.log(this.content)

  }

  onPanelClick({offsetTop}) {
    this.content.scrollToPoint(0, offsetTop - 160, 300);
  }

}
