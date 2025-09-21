const object = {
  message: "Hello,World!",
  logMessage() {
    console.log(this.message);
  },
};
// it treat like regular function.
// now logMessage called by window.
// so this.window.
// setTimeout(object.logMessage.bind(object), 1000);
setTimeout(object.logMessage, 1000);
