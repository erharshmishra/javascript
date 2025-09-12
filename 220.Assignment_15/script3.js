let country = ["Australia", "Germany", "United States of America"];

function lengthCount() {
  let currCountry = 0;
  let largLenth;
  for (let i = 0; i < country.length; i++) {
    if (country[i].length > currCountry) {
      largLenth = country[i];
      currCountry = country[i].length;
    }
  }
  return largLenth;
}
console.log(lengthCount());
