// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Rajat",
  middleName: "",
  lastName: "Gupta",
  message: " Learning the new things. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rajatguptaa",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/rajat.gupta165",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/rajat.gupta7/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rajat-gupta07/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/rajat71194/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/rajatguptaa.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/rajatg.png"),
  imageSize: 375,
  message:
    "My name is Rajat Gupta. I’m a graduate of 2015 from Acropolis Group of institute with a degree in Computer Science & Engineering.I am nature of learning new Things, and my goal is to pursue this passion within the field of software engineering. In my leisure time I like to watch netflix and play indoor games.",
  resume: "https://drive.google.com/file/d/12RIIVp7S9I4nHSYXrEPdNQgmAyRAWntz/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rajatguptaa", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/rajatg.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/rajatg.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Node Js", value: 90 },
    { name: "Typescript", value: 80 },
    { name: "PHP", value: 60 },
    { name: "Redis", value: 60 },
    { name: "AWS", value: 50 },
    { name: "GoLang", value: 40 },
    { name: "SQL", value: 75 },
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Quick Learner", value: 80 },
    { name: "Team Player", value: 75 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 70 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 70 }
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Senior software Engineer ! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "rajatgupta.gupta1@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/myntra.png'),
      date: 'June 2019 – Present',
    },
    {
      role: 'Software Developer',
      companylogo: require('../assets/img/webdunia.png'),
      date: 'May 2017 – May 2019',
    },
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/iis.png'),
      date: 'May 2015 – May 2017',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
