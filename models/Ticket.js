const shortid = require('shortid');

class Ticket{
    constructor(username,price){
        this.ticketId = shortid.generate();
        this.username = username;
        this.price = price;
        this.createdAt = Date.now();
        this.updatedAt = date.now();
    }
}
module.exports = Ticket;