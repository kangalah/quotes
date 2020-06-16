export class Quotes {
    public upvotes:number
    public downvotes:number
    
    constructor ( public name:string, public quote:string, public author:string,public myDate: Date){
        this.upvotes=0
        this.downvotes=0
        
    }
}
