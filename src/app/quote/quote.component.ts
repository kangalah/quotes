import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[
    new Quotes("New light","Carol Burnett","When you have a dream,you've got to grab it and never let go"),
    new Quotes("President","Zig Ziglar","What you get by achieving your goals is not as important as what you become by achieving your goals. ")
  ]
    
      addQuote(emittedQuote){
      this.quotes.push(emittedQuote)
    }
  
    upvote(i){
        this.quotes[i].upvotes+=1
    }
    downvote(i){
      this.quotes[i].downvotes+=1
    }
    delQuote(i){
      this.quotes.splice(i, 1)
    }
    preNum:number
    lastNum:number
    counter:number
    
    highestUpvote(){
      this.preNum = 0
      this.lastNum = 0
  
      for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
        this.lastNum = this.quotes[this.counter].upvotes;
        if(this.lastNum > this.preNum){this.preNum = this.lastNum}
      }
      return  this.preNum
    }
    constructor() { }
  
    ngOnInit() {
    }
  
  }
