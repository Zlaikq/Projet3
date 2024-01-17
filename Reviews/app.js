// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Sung Jin Woo',
    job: 'The Shadow Monarch',
    img: 'https://www.nautiljon.com/images/manga_persos/00/02/sung_jin_woo_7220.webp',
    text: "Jinwoo is a handsome and muscular young man with gray eyes, black hair, and sharp facial features. When using his powers or agitated, his eyes glow bright purple. ",
  },
  {
    id: 2,
    name: 'Igris',
    job: 'Marshal Grade',
    img: 'https://static.wikia.nocookie.net/solo-leveling/images/5/5f/Igris1.jpg/revision/latest?cb=20210526202439',
    text: 'Igris is a large knight with a light purple glow, jet-black armor covering him from head to toe, a tattered black cape, and a long red hair-like ornament extending out of the back of his helmet.',
  },
  {
    id: 3,
    name: 'Beru',
    job: 'Marshal Grade',
    img: 'https://static.wikia.nocookie.net/solo-leveling/images/9/93/Beru_%28Marshal%29.jpg/revision/latest?cb=20210727041130',
    text: 'Beru is a huge humanoid shadow ant with a light purple glow, neon eyes, sharp claws, and smoky wings.',
  },
  {
    id: 4,
    name: 'Bellion',
    job: 'Grand-Marshal Grade',
    img: 'https://static.wikia.nocookie.net/solo-leveling/images/1/17/%EB%B2%A8%EB%A6%AC%EC%98%A81.jpg/revision/latest?cb=20210908183510',
    text: 'Bellion is a huge humanoid, shadow warrior with two pairs of black wings on his back, jagged black armor, blank white eyes, and glowing purple skin with a single horned helmet atop his head.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem +=3;
  if (currentItem > 3){
    currentItem = 3;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem-=3;
  if (currentItem < 0) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});