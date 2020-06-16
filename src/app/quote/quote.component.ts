import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[
  new Quotes("New light","When you have a dream,you've got to grab it and never let go", "Carol Burnett", new Date(2020, 3, 14)),
  new Quotes("UOA","What you get by achieving your goals is not as important as what you become by achieving your goals.", "Zig Ziglar", new Date(2019,4,18)),
  new Quotes("Positt","One positive thought in the morning , can brighten your whole day", "Joan Nanjala.", new Date(2020,6,16))
]
    preNum:number
    lastNum:number
    counter:number
  
    addNewQuote(emittedQuote){
      this.quotes.push(emittedQuote)
    }
    // addNewQuotes(emittedQuote){
    //   let quoteLength = this.quotes.length;
    //   Quotes.myDate = new Date(Quotes.myDate)
    //   this.quotes.push(emittedQuote)
    // }
  
    upvote(i){
        this.quotes[i].upvotes+=1
    }
    downvote(i){
      this.quotes[i].downvotes+=1
    }
    delQuote(i){
      this.quotes.splice(i, 1)
    }
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
