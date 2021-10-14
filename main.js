//Selectors
const movieSelector = document.querySelector("#movie_selector");
const movieTitle = document.querySelector(".movie_title");
const movieYear = document.querySelector(".movie_year");
const movieDescription = document.querySelector(".movie_description");
const reviewList = document.querySelector(".review_list");

let moviesObject = [];
//api call
fetch("https://ghibliapi.herokuapp.com/Films").then((response) =>
  response.json().then((object) => {
    moviesObject = object;
    let count = 0;
    object.forEach((movie) => {
      let newOption = document.createElement("option");
      newOption.value = count;
      count++;
      newOption.textContent = movie.title;
      movieSelector.appendChild(newOption);
    });
  })
);

//adjusting text content based on selected movie
movieSelector.addEventListener("change", (event) => {
  //issue: won't display first item contents without going to another first
  let movie = moviesObject[event.target.value];
  movieTitle.textContent = movie.title;
  movieYear.textContent = movie.release_date;
  movieDescription.textContent = movie.description;
  document.querySelector(
    "body"
  ).style.backgroundImage = `url('${movie.image}')`;
});

//review submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.review.value) {
    let newli = document.createElement("li");
    newli.innerHTML = `<strong>${
      moviesObject[movieSelector.value].title
    }: </strong>${event.target.review.value}`;
    reviewList.append(newli);
  }
  document.review_form.reset();
});
