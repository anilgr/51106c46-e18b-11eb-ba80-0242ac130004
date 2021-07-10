import { Component, OnInit } from '@angular/core';
import { ScorecardService } from '../services/scorecard/scorecard.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {
  scorecards: any[] = []
  constructor(private scorecardService: ScorecardService) { }

  ngOnInit() {
    this.scorecardService.getScorecardData().subscribe((res)=>{
      console.log(res)
      if(res.success) {
        this.scorecards = res.data.scorecard;
      }
    })
  }

}
