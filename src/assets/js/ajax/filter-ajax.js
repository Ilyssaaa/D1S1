const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/71bb4a02eec18b8d7305", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error");
    }
  };

  xhr.onerror = function () {
    reject("Not Found");
  };
  xhr.send();
})

function renderRating(rating) {
  let ratingArr = [];
  for (let i = 0; i < rating; i++) {
    ratingArr.push(`<i class="fa-solid fa-star"></i>`);
  }

  const starsHTML = ratingArr.join("");
  return starsHTML;
}

async function allRating() {
  try {
    const rating = await testimonial;

    let filterHTML = "";

    rating.forEach(function (item) {
      filterHTML += `
          <div class="card" id="card">
            <div class="img">
              <img src="${item.image}" alt="">
            </div>
            <h1>${item.title}</h1>
            <div class="pricing-rating">
              <h3>${item.price}</h3>
              <h4>${item.rating}</h4>
            </div>
          </div>`;
    });
    document.getElementById("content-container").innerHTML = filterHTML;
  } catch (err) {
    console.log("err");
  }
}

allRating();

async function filterTestimonial(rating) {
  try {
    const response = await testimonial
    let filterHTML = "";

    const ratingFiltered = response.filter(function (item) {
      return item.rating === rating;
    })

    if (ratingFiltered.length === 0) {
    filterHTML = `<h1 style="font-size: 24px; font-weight: 600">Data Not Found</h1>`;
    } else {
      ratingFiltered.forEach(function (item) {
        filterHTML += `
        <div class="card" id="card">
          <div class="img">
            <img src="${item.image}" alt="">
          </div>
          <h1>${item.title}</h1>
          <div class="pricing-rating">
            <h3>${item.price}</h3>
            <h4>${item.rating} ${renderRating(rating)}</h4>
          </div>
        </div>`;
      });
    }
    document.getElementById("content-container").innerHTML = filterHTML;
  } catch (err) {
    console.log("err");
  }
}

