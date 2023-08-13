const dataProject = [];

document.getElementById("inputForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let projectName = document.getElementById("project-name").value;
  let startdate = document.getElementById("start-date").value;
  let enddate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  let nodejs = document.getElementById("node-js");
  let js = document.getElementById("js");
  let reactjs = document.getElementById("react-js");
  let html = document.getElementById("html");
  let image = document.getElementById("images-label").files;

  if (projectName == "") {
    return alert("Masukkan Project Name!");
  } else if (startdate == "" || enddate == "") {
    return alert("Masukkan Start Date & End Date!");
  } else if (description == "") {
    return alert("Masukkan Description!");
  } else if (
    nodejs.checked == false &&
    js.checked == false &&
    reactjs.checked == false &&
    html.checked == false
  ) {
    return alert("Diperlukan setidaknya satu! Check ");
  } else if (image.length == 0) {
    return alert("Masukkan Image!");
  }

  image = URL.createObjectURL(image[0]);

  let project = {
    projectName,
    startdate,
    enddate,
    description,
    technologies: {
      nodejs: nodejs.checked ? nodejs.value : null,
      js: js.checked ? js.value : null,
      reactjs: reactjs.checked ? reactjs.value : null,
      html: html.checked ? html.value : null,
    },
    image,
  };

  dataProject.push(project);

  renderProject();
});

function renderProject() {
  document.querySelector(".project-container").innerHTML = "";

  for (let i = 0; i < dataProject.length; i++) {
    document.querySelector(".project-container").innerHTML += `
      <div class="card-content">
        <div class="img">
          <img class="project-img" src="${dataProject[i].image}" alt="Project ${i + 1} images">
        </div>
        <div class="title-duration">
          <div class="title">${dataProject[i].projectName}</div>
          <div class="duration">${dataProject[i].startdate} - ${dataProject[i].enddate}</div>
        </div>
        <div class="desc">
          ${dataProject[i].description}.
        </div>
        <div class="icon-description">
          ${dataProject[i].technologies.nodejs? `<i class="fa-brands fa-node-js"></i>` : "" }
          ${dataProject[i].technologies.reactjs? `<i class="fa-brands fa-react"></i>` : "" }
          ${dataProject[i].technologies.js? `<i class="fa-brands fa-square-js"></i>` : "" }
          ${dataProject[i].technologies.html? `<i class="fa-solid fa-code"></i>` : "" }
        </div>
        <div class="edit-delete-button">
          <div class="edit-btn">Edit</div>
          <div class="delete-btn">Delet</div>
        </div>
      </div>`;
  }
}


//    <div class="project-card">
//        <img class="project-image" src="${dataProject[i].image}" //alt="Project ${
//     i + 1
//    } Image" width="100%">
//        <h3 class="project-title"><a href="./projectdetail.html">${
//          dataProject[i].projectName
//        }</a></h3>
//        <small class="project-duration">Durasi: ${dataProject[i].//startDate} - ${
//      dataProject[i].endDate
//    }</small>
//        <p class="project-description">
//          ${dataProject[i].description}
//        </p>
//        <div class="project-technologies">
//          ${dataProject[i].technologies.javascript? `<i class="fa-brands //fa-square-js"></i>`: ""}
//          ${dataProject[i].technologies.golang? `<i class="fa-brands //fa-golang"></i>`: ""}
//          ${dataProject[i].technologies.php? `<i class="fa-brands //fa-php"></i>`: ""}
//          ${dataProject[i].technologies.java? `<i class="fa-brands //fa-java"></i>`: ""}
//        </div>
//        <div class="project-actions">
//          <button>Edit</button>
//          <button>Delete</button>
//        </div>
//      </div>`;
