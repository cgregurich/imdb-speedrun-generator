const actors = [
  'Harrison Ford',
  'Channing Tatum',
  'Vince Vaughn'
];

const movies = [
  'Footloose',
  'The Lego Movie',
  'Inception'
];

const tvShows = [
  'Friends',
  'The Office',
  'How I Met Your Mother'
];

const actresses = [
  'Anne Hathaway',
  'Jennifer Lawrence',
  'Brie Larson'
];

function getRandomActor() {
  const index = Math.floor(Math.random() * actors.length);
  return actors[index];
}

function getRandomActress() {
  const index = Math.floor(Math.random() * actresses.length);
  return actresses[index];
}

function getRandomMovie() {
  const index = Math.floor(Math.random() * movies.length);
  return movies[index];
}

function getRandomTvShow() {
  const index = Math.floor(Math.random() * tvShows.length);
  return tvShows[index];
}

function getRandomThing() {
  /*
  "thing" could be an actor, actress, movie, or tv show
  */
  const choices = [getRandomActor, getRandomActress, getRandomMovie, getRandomTvShow];
  const index = Math.floor(Math.random() * choices.length);
  const func = choices[index];
  return func();
}

console.log(getRandomActor());
console.log(getRandomActress());
console.log(getRandomMovie());
console.log(getRandomTvShow());


const generateBtn = document.querySelector('#generate-btn');
generateBtn.addEventListener('click', () => console.log(getRandomThing()));

