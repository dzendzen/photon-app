const auth = "563492ad6f9170000100000199486421ca644544b49bfc07e48ad0d8 ";
const gallery = document.querySelector(".gallery");
const seachInput = document.querySelector(".search-input");
const submitBtn = document.querySelector(".submit-btn");
let searchValue;

async function curatedPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    },
  );
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    console.log(photo);
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}></img> <p>${photo.photographer}</p><p>see more at: ${photo.photographer_url}</p>`;
    console.log(galleryImg);
    gallery.appendChild(galleryImg);
  });
}
curatedPhotos();
