const EventEmmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmmitter {

  log(message) {
    console.log(message);

    // Making a noise, produce something
    // Raise an event
    this.emit("message Logged");

    // Making a noise, produce something
    // Raise an event
    this.emit("message Logged args", { id: 1, url: url });

    // Making a noise, produce something
    // Raise an event
    this.emit("message Logged args arrow fn", {
      id: 1,
      url: "http://test.com",
      arrow_fn: "true",
    });
  }
}


module.exports = Logger;
// module.exports.endpoint = url;
