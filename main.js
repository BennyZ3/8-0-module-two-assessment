const movieSelector = document.querySelector("#movie_selector");
// console.log(movieSelector);
fetch("https://ghibliapi.herokuapp.com/Films").then((response) =>
  response.json().then((object) => {
    // console.log(object);
    object.forEach((movie) => {
      //   console.log(movie.title);
      let newOption = document.createElement("option");
      newOption.value = movie;
      newOption.textContent = movie.title;
      //   console.log(newOption);
      movieSelector.appendChild(newOption);
    });
  })
);
