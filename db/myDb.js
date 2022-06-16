const Ticket = require('../models/Ticket');
class myDb {
  constructor() {
    this.tickets = [];
  }
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }
  bulk(username, price, quantity) {
    let bulkTickets = [];
    for (let i = 1; i <= quantity; i++) {
      const ticket = new Ticket(username, price);
      this.tickets.push(ticket);
      bulkTickets.push(ticket);
    }
    return bulkTickets;
  }
}
