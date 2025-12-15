let jsonRes =
  '{"fact":"It may take as long as 2 weeks for a kitten to be able to hear well.  Their eyes usually open between 7 and 10 days, but sometimes it happens in as little as 2 days.","length":165}';
console.log(typeof jsonRes);

let validRes = JSON.parse(jsonRes); // JSON to JS objects.
console.log(validRes);
console.log(typeof validRes);

let student = {
  name: "Harsh",
  marks: 89,
  place: "Gorakhpur",
};

let intoJson = JSON.stringify(student); // JS objects to JSON.
console.log(intoJson);
console.log(typeof intoJson);
