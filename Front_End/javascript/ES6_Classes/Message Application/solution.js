function main() {
  class Message {
    static status = false;
    static totalMessages = 0;

    constructor(sender, receiver, messageContent) {
      this.sender = sender;
      this.receiver = receiver;
      this.messageContent = messageContent;
    }

    static changeStatus() {
      Message.status = !Message.status;
      console.log(
        `The status has been changed to ${
          Message.status ? "online" : "offline"
        }`
      );
    }

    static recordMessage() {
      Message.totalMessages += 1;
    }

    sendMessage() {
      console.log(
        `The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`
      );
      Message.recordMessage();
    }

    displayDetails() {
      console.log(`Sender: ${this.sender}`);
      console.log(`Receiver: ${this.receiver}`);
      console.log(`Message: ${this.messageContent}`);
      console.log(`Status: ${Message.status ? "online" : "offline"}`);
      console.log(`Total Messages: ${Message.totalMessages}`);
    }
  }

  return Message;
}
const Message = main();
const message1 = new Message("Alice", "Bob", "Hello", "How are you?");
message1.sendMessage();
message1.displayDetails();
const message2 = new Message("Bob", "Alice", "Hi", "I'm good, thanks!");
message2.sendMessage();
message2.displayDetails();

