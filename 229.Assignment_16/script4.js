let length = 4;
function callback() {
  // it will give undefined.
  // since this.length inside callback refers to the global this.
  console.log(this.length);
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2);
