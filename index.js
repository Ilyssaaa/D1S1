const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// setup call hbs with sub folder
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set serving static file
app.use(express.static("src/assets"));

// parsing data from client
app.use(express.urlencoded({ extended: false }));

// dummy project
const dataProject = [
  {
    id: 1,
    projectName: "Ini Lorem",
    author: "Rebbeca Eltra",
    startDate: "2015",
    endDate: "2016",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    nodeJs: true,
    javascript: true,
    react: true,
    php: true,
  },
  {
    id: 2,
    projectName: "Ini Juga Lorem",
    author: "Jhon doe",
    startDate: "2015",
    endDate: "2016",
    content: "Lorem Ipsum",
    nodeJs: true,
    javascript: true,
    react: true,
    php: false,
  },
];

// routing
app.get("/index", home);

app.get("/delete-project/:id", deleteProject);

app.get("/edit-project/:id", editedProject);
app.post("/edit-project/:id", editProject);

app.get("/contact", contactMe);

app.get("/project-detail/:id", projectDetail);

app.get("/form-project", formProject);
app.post("/form-project", addProject);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

// Home
function home(req, res) {
  res.render("index", { dataProject });
}
function contactMe(req, res) {
  res.render("contact");
}

// My Project
function myProject(req, res) {
  res.render("project");
}

function formProject(req, res) {
  res.render("form-project");
}

// Project Detail
function projectDetail(req, res) {
  res.render("project-detail");
}

function projectDetail(req, res) {
  const { id } = req.params;

  res.render("project-detail", { data: dataProject[id] });
}

// Add new project
function addProject(req, res) {
  const { projectName, startDate, endDate, content, nodeJs, javascript,  react, php } = req.body;
  
  const data = {
    projectName,
    author: "Ulala",
    startDate,
    endDate,
    content,
    nodeJs,
    javascript,
    react,
    php,
    image: "img/Parental_Advisory_label.png",
  };

  dataProject.push(data);
  res.redirect("/index");
}


// Edit Project
function editedProject(req, res) {
  const { id } = req.params;
  let detailProject = dataProject.filter((item) => {
    return item.id === id;
  })
  res.render("edit-project", { project: detailProject[0] });
}

function editProject(req, res) {
  const { projectName, startDate, endDate, content, nodeJs, javascript,  react, php } = req.body;
  
  const data = {
    projectName,
    author: "Ulala",
    startDate,
    endDate,
    content,
    nodeJs,
    javascript,
    react,
    php,
    image: "img/Parental_Advisory_label.png",
  };

  dataProject.push(data);
  res.redirect("/index");
}

// Delete Project
function deleteProject(req, res) {
  const { id } = req.params;

  dataProject.splice(id, 1);
  res.redirect("/index");
}
