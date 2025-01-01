console.log("Working");

// initialise the veriable
source = "bbc-News";
let apiKey = "fdc4f966101b448ca72523b1993b05af";

// Grab the News container
let NewsAccordion = document.getElementById("NewsAccordion");

// Creat a Ajax GET request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
  true
);
xhr.getResponseHeader("content-type", "applicatin/json");

// what to do when Response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newshtml = "";
    articles.forEach((element) => {
      let News = `<div class="accordion my-4" id="NewsAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
          ${element["title"]}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body"> ${element["description"]}.<a target = "blank" style = "text-decoration:none " href ="${element["url"]}">Read More Here</a></div>
        </div>
      </div>
     </div>`;
      newshtml += News;
    });
    NewsAccordion.innerHTML = newshtml;
  } else {
    console.log("Some Error Ocured");
  }
};
xhr.send();
