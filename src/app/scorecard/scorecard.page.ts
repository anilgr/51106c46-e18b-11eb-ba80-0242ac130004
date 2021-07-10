import { Component, OnInit } from '@angular/core';
import { ScorecardService } from '../services/scorecard/scorecard.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {

  constructor(private scorecardService: ScorecardService) { }

  ngOnInit() {
    this.scorecardService.getScorecardData().subscribe((res)=>{
      console.log(res)
    })
  }

}
