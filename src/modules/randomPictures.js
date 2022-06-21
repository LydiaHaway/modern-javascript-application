let randomPictures = () => {
  const app = document.querySelector(".weather--app");
  const containerPictures = document.createElement("div");
  app.appendChild(containerPictures);
  containerPictures.setAttribute("class", "containerPictures");
  const picturesRandom = document.createElement("img");
  containerPictures.appendChild(picturesRandom);
  picturesRandom.src = `https://source.unsplash.com/random/?${city.value}`;
  picturesRandom.alt = "city_illustration";
};

export { randomPictures };
