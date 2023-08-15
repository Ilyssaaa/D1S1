let postBlog = [];

function addBlog(event) {
  event.preventDefault();

  let description = document.getElementById("description").value;
  let image = document.getElementById("image-label").files;

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    description,
    image,
    postAt: new Date(),
  };

  postBlog.push(blog);
  console.log(postBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("content-post").innerHTML = "";

  for (let index = 0; index < postBlog.length; index++) {
    console.log(postBlog[index]);

    document.getElementById("content-post").innerHTML += `
      <div class="post-container">
        <div class="post-wrapper">
           <div class="user-info">
                <div class="user-image"></div>
                <div class="time-user-name">
                    <div class="user-name">Anonymous</div>
                    <div class="time-post">${getFullTime(postBlog[index].postAt)} | ${getDistanceTime(
                      postBlog[index].postAt
                    )}
                    </div>
                </div>
            </div>
            <div class="description-post">
                <p>${postBlog[index].description}
                </p>
            </div>
            <div class="images-post">
                <img class="img-post" src="${postBlog[index].image}" alt="">
            </div>
            <div class="edit-post-button">
                <button class="edit" type="submit">Edit</button>
                <button class="delete" type="submit">Delete</button>
            </div>
        </div>
      </div>`;
    }
}




function getFullTime(time) {

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost; 

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 Hours 3600 Second
  let hoursInDays = 24; // 1 Day 24 Hours

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSecond = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} days ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSecond} seconds ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 3000);