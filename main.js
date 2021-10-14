const movieSelector = document.querySelector("#movie_selector");
// console.log(movieSelector);
let moviesObject = [];
fetch("https://ghibliapi.herokuapp.com/Films").then((response) =>
  response.json().then((object) => {
    // console.log(object);
    moviesObject = object;
    let count = 0;
    object.forEach((movie) => {
      //   console.log(movie.title);
      let newOption = document.createElement("option");
      newOption.value = count;
      count++;
      newOption.textContent = movie.title;
      //   console.log(newOption);
      movieSelector.appendChild(newOption);
    });
  })
);

const movieTitle = document.querySelector(".movie_title");
const movieYear = document.querySelector(".movie_year");
const movieDescription = document.querySelector(".movie_description");
movieSelector.addEventListener("change", (event) => {
  let movie = moviesObject[event.target.value];
  movieTitle.textContent = movie.title;
  movieYear.textContent = movie.release_date;
  movieDescription.textContent = movie.description;
});

const reviewList = document.querySelector(".review_list");
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
