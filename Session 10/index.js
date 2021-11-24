const posts = [
  {
    tag: "Power: All for one",
    description: "Midoriya",
    date: "5/07",
    image: "./image1.png",
  },
  {
    tag: "Power: Explosion",
    description: "Bakugo Katsuki",
    date: "20/04",
    image: "./image2.png",
  },
  {
    tag: "Power: Half Hot Half Cold",
    description: "Todoroki Shoto",
    date: "11/1",
    image: "./image3.png",
  },
  {
    tag: "Power: Decay",
    description: "Shigaraki Tomura",
    date: "20/6",
    image: "./image5.png",
  },
  {
    tag: "Power: Cremation",
    description: "Dabi",
    date: "30/4",
    image: "./image6.png",
  },
  {
    tag: "Power: Overhaul",
    description: "Chisaki Kai",
    date: "12/7 ",
    image: "./image7.png",
  },
  {
    tag: "Power: All For One",
    description: "All For One",
    date: "15/1 ",
    image: "./image8.png",
  },
  {
    tag: "Power: Bloodcurdle",
    description: "Akaguro Chizome",
    date: "13/7 ",
    image: "./image9.png",
  },
  {
    tag: "Power: Fierce Wings",
    description: "Hawks",
    date: "14/7 ",
    image: "./image10.png",
  },
];

// Get student container
const postsContainer = document.querySelector(".left-content__posts");

// Render
const render = (array, container) => {
  for (let index = 0; index < array.length; index++) {
    const post = array[index];

    const divContainer = document.createElement("div");
    divContainer.classList.add("posts-item");
    container.appendChild(divContainer);
    divContainer.innerHTML = `
      <img src="${post.image}" alt="bg" />
      <div class="post-tag">${post.tag}</div>
      <div class="post-des">
        ${post.description}
      </div>
      <div class="post-date">${post.date} </div>
    `;
  }
};

// The first loading
render(posts, postsContainer);

// Searching
const inputSearch = document.querySelector(".input-search");

inputSearch.addEventListener("input", (event) => {
  // Clear older data
  let lastChild = postsContainer.lastElementChild;
  while (lastChild) {
    postsContainer.removeChild(lastChild);
    lastChild = postsContainer.lastElementChild;
  }

  // Get value to search
  const value = event.target.value;

  // Filter data by value
  const tempList = [...posts].filter((post) =>
    post.description.includes(value)
  ); // return array

  // Fill data to screen
  render(tempList, postsContainer);
});
