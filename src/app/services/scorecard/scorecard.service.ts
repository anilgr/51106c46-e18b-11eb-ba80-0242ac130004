import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScorecardService {

  constructor() { }

  getScorecardData() {
    return of(
      {
        "success": true,
        "status": 200,
        "data": {
            "scorecard": [
                {
                    "date": "2019-11-02",
                    "match_id": 106,
                    "short_date": "02nd Nov",
                    "topic": "AVL vs LIV",
                    "total_score": 195,
                    "question_answers": [
                        {
                            "questions": "Will LIV tally the scoreboard by scoring a goal in first half?",
                            "points": 0
                        },
                        {
                            "questions": "Will AVL score one more goal in first half?",
                            "points": 0
                        },
                        {
                            "questions": "Will AVL  be called for an offside in first half?",
                            "points": 100
                        },
                        {
                            "questions": "Which team will have maximum shots on target at the end?",
                            "points": 100
                        },
                        {
                            "questions": "Who will win the match?",
                            "points": 100
                        },
                        {
                            "questions": "Powerplay 1",
                            "points": -150
                        },
                        {
                            "questions": "Powerplay 2",
                            "points": -40
                        },
                        {
                            "questions": "Powerplay 3",
                            "points": 80
                        },
                        {
                            "questions": "Powerplay 4",
                            "points": -75
                        },
                        {
                            "questions": "Powerplay 5",
                            "points": 80
                        }
                    ]
                },
                {
                    "date": "2019-11-02",
                    "match_id": 111,
                    "short_date": "02nd Nov",
                    "topic": "WAT vs CHE",
                    "total_score": 110,
                    "question_answers": {
                        "10": {
                            "questions": "Will CHE score the next goal?",
                            "points": 0
                        },
                        "11": {
                            "questions": "Will CHE be penalized with a Foul in first half?",
                            "points": 100
                        },
                        "12": {
                            "questions": "Will CHE be awarded a Penalty in first half?",
                            "points": 0
                        },
                        "13": {
                            "questions": "Will there be a substitution called for by CHE in first half?",
                            "points": 100
                        },
                        "14": {
                            "questions": "Who will win the match?",
                            "points": 100
                        },
                        "15": {
                            "questions": "Powerplay 1",
                            "points": -40
                        },
                        "16": {
                            "questions": "Powerplay 2",
                            "points": -75
                        },
                        "17": {
                            "questions": "Powerplay 3",
                            "points": -75
                        }
                    }
                },
                {
                    "date": "2019-11-03",
                    "match_id": 112,
                    "short_date": "03rd Nov",
                    "topic": "CRY vs LEI",
                    "total_score": 185,
                    "question_answers": {
                        "18": {
                            "questions": "Which team will score the first goal?",
                            "points": 100
                        },
                        "19": {
                            "questions": "Who will have more  ball possession in the end?",
                            "points": 100
                        },
                        "20": {
                            "questions": "Will this match result in a tie?",
                            "points": 100
                        },
                        "21": {
                            "questions": "Will there be an offside called for LEI in first half?",
                            "points": 0
                        },
                        "22": {
                            "questions": "Will LEI  be awarded a Penalty in first half?",
                            "points": 0
                        },
                        "23": {
                            "questions": "Powerplay 1",
                            "points": -40
                        },
                        "24": {
                            "questions": "Powerplay 2",
                            "points": -75
                        }
                    }
                },
                {
                    "date": "2019-11-03",
                    "match_id": 113,
                    "short_date": "03rd Nov",
                    "topic": "EVE vs TOT",
                    "total_score": 100,
                    "question_answers": {
                        "25": {
                            "questions": "Which team will score the first goal?",
                            "points": 0
                        },
                        "26": {
                            "questions": "Who will have more  ball possession in the end?",
                            "points": 0
                        },
                        "27": {
                            "questions": "Will this match result in a tie?",
                            "points": 100
                        },
                        "28": {
                            "questions": "Will there be an offside called for TOT in first half?",
                            "points": 0
                        },
                        "29": {
                            "questions": "Will TOT  be awarded a Penalty in first half?",
                            "points": 0
                        }
                    }
                },
                {
                    "date": "2019-11-09",
                    "match_id": 117,
                    "short_date": "09th Nov",
                    "topic": "NEU vs BOU",
                    "total_score": 400,
                    "question_answers": {
                        "30": {
                            "questions": "Which team will score the first goal?",
                            "points": 100
                        },
                        "31": {
                            "questions": "Who will have more  ball possession in the end?",
                            "points": 100
                        },
                        "32": {
                            "questions": "Will there be an offside called for NEU in first half?",
                            "points": 100
                        },
                        "33": {
                            "questions": "Will NEU  be awarded a Penalty in first half?",
                            "points": 0
                        },
                        "34": {
                            "questions": "Will this match result in a tie?",
                            "points": 100
                        }
                    }
                },
                {
                    "date": "2019-11-09",
                    "match_id": 118,
                    "short_date": "09th Nov",
                    "topic": "SOU vs EVE",
                    "total_score": 400,
                    "question_answers": {
                        "35": {
                            "questions": "Will EVE score the next goal?",
                            "points": 0
                        },
                        "36": {
                            "questions": "Will EVE be penalized with a Foul in first half?",
                            "points": 100
                        },
                        "37": {
                            "questions": "Will EVE be awarded a Penalty in first half?",
                            "points": 100
                        },
                        "38": {
                            "questions": "Will there be a substitution called for by EVE in first half?",
                            "points": 100
                        },
                        "39": {
                            "questions": "Who will win the match?",
                            "points": 100
                        }
                    }
                },
                {
                    "date": "2019-11-09",
                    "match_id": 119,
                    "short_date": "09th Nov",
                    "topic": "TOT vs SHU",
                    "total_score": 200,
                    "question_answers": {
                        "40": {
                            "questions": "Which team will score the first goal?",
                            "points": 0
                        },
                        "41": {
                            "questions": "Who will have more  ball possession in the end?",
                            "points": 100
                        },
                        "42": {
                            "questions": "Will this match result in a tie?",
                            "points": 0
                        },
                        "43": {
                            "questions": "Will there be an offside called for SHU in first half?",
                            "points": 100
                        },
                        "44": {
                            "questions": "Will SHU  be awarded a Penalty in first half?",
                            "points": 0
                        }
                    }
                },
                
            ],
            "customer_id": 197,
            "you_scored": "1590"
        }
    }
    )
  }
}
