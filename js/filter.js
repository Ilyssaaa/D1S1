const dataRating = [
  {
    title: "GEEKOM Laptop 4GB/256GB (upgradable)",
    price: "Rp4.399.000",
    image: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/24371433/236492_MacBook_Pro_16__2023__AKrales_0141.jpg",
    rating: 5,
  },
  {
    title: "Laptop HP 14s-dq0510TU N4120 4GB 256GB 14",
    price: "Rp4.399.000",
    image: "https://ss628.liverpool.com.mx/xl/1126257941.jpg",
    rating: 4,
  },
  {
    title: "Laptop HP 14s-dq0510TU N4120 4GB 256GB 14",
    price: "Rp4.399.000",
    image: "https://awsimages.detik.net.id/visual/2023/05/05/advasus-3_169.jpeg?w=800&q=90",
    rating: 3,
  },
  {
    title: "Laptop HP 14s-dq0510TU N4120 4GB 256GB 14",
    price: "Rp4.399.000",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/01/businesslaptops-2048px-0098-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    rating: 2,
  },
  {
    title: "Laptop HP 14s-dq0510TU N4120 4GB 256GB 14",
    price: "Rp4.399.000",
    image: "https://johnlewis.scene7.com/is/image/JohnLewis/laptop-carousel1-010323",
    rating: 2,
  },
];

function renderRating(rating) {
  let ratingArr = [];
  for (let i = 0; i < rating; i++) {
    ratingArr.push(`<i class="fa-solid fa-star"></i>`);
  }

  const starsHTML = ratingArr.join("");
  return starsHTML;
}

function ratingTestimonial(title, price, image, rating) {
  return `
  <div class="card" id="card">
    <div class="img">
      <img src="${image}" alt="">
    </div>
    <h1>${title}</h1>
    <div class="pricing-rating">
      <h3>${price}</h3>
      <h4>${rating} - ${renderRating(rating)}</h4>
    </div>
  </div>`;
}

function allRating() {
  let filterHTML = "";

  dataRating.forEach(function (item) {
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
}

allRating();


function filterTestimonial(rating) {
  let filterHTML = "";

  if (rating == 0) {
    const testimonialHTML = dataRating
      .map((item) =>
        ratingTestimonial(item.image, item.title, item.rating, item.price)
      )
      .join(" ");
    document.getElementById("content-container").innerHTML =
      testimonialHTML;
    return;
  }

  const ratingFiltered = dataRating.filter(function (item) {
    return item.rating === rating;
  });

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
          <h4>${item.rating} - ${renderRating(rating)}</h4>
        </div>
      </div>`;
    });
  }

  document.getElementById("content-container").innerHTML = filterHTML;
}