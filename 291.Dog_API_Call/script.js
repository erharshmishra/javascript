let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getImage();
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
});

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
  try {
    let res1 = await axios.get(url);
    return res1.data.message;
  } catch (err) {
    return "No Image Found";
  }
}
