/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Vaman",
  logo_name: "฿ђaͥveͣsͫђ..❤️",
  nickname: "Bhavesh",
  full_name: "Bhavesh Chavhan",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink: "https://drive.google.com/drive/u/0/recent",
  mail: "bhaveshchavan299@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Bhavesh299",
  linkedin: "https://www.linkedin.com/in/bhavesh299/",
  gmail: "bhaveshchavan299@gmail.com",
  twitter: "https://twitter.com/Bhavesh299",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express & Mongoose",
        "⚡ Integration of third party services such as AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: "simple-icons:material-ui",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
       
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#61dafb",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shree Sant Gadge Engineering College",
      subtitle: "Bachelor of Technology ",
      logo_path: "ssgb.png",
      alt_name: "SSGB",
      duration: "2022 - Present",
      descriptions: [
        // "⚡ I'm currently pursuing my Bachelor of Technology.",
        // "⚡ I have studied core subjects ",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://ssgbcoet.com/",
    },
    {
      title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
      subtitle: "Diploma in Information Technology",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgc.cteguj.in/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "WordPress developer (Intern)",
          company: "Mumbai Web Design",
          company_url: "#",
          logo_path: "MDW.png",
          duration: "Feb 2021 - May 2021",
          location: "Work From Home",
          description: `This my internship experience. I learn new things. I have good experience this company. I work with team to bulid user friendly website and mentioned the client web site`,
          color: "#0071C5",
        },
        {
          title: "WordPress developer or Video editor (Freelancer)",
          company: "Art of Mirage Studio's",
          company_url: "https://www.artofmirage.com/",
          logo_path: "Art.jpg",
          duration: "May 2021 - Oct 2021",
          location: "Office",
          description: `Work closely with the Client and Team on change request functions.`,
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "#",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Campus Hustler",
    //       company: "Skillenza",
    //       company_url: "#",
    //       logo_path: "skillenza.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work from Home",
    //       description:
    //         "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
    //       color: "#196acf",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "#",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //         "Contribute to Open Source Community and Open Source Project.",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "#",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "#",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "#",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "bhavesh.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://medium.com/@bhaveshchavan299",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      img: "https://user-images.githubusercontent.com/97518972/165999966-278b1185-0912-404f-8671-6131c9a3e546.png",
      name: "Freshly-Clone",
      url: "https://clonefreshly.netlify.app/home.html",
      gitreplink: "https://github.com/Bhavesh299/Freshly-clone-",
      description:
        "Here users can order Diet's meals of sugar free , Gulton free ect.. We have built this using HTML, CSS, and JavaScript.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      img: "https://user-images.githubusercontent.com/97518972/165968184-1b6559ed-9537-4cd7-972c-21d8ca083296.png",
      name: "Youtube-Clone",
      url: "https://statuesque-bublanina-259565.netlify.app/",
      gitreplink: "https://github.com/Bhavesh299/Youtube-colne",
      description:
        "User can serach the videos as well ad watch the video , I use Youtube Api for this project.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      img: "https://user-images.githubusercontent.com/96133324/165300298-73db5bb3-a88e-4e60-868e-0d7add5e1c9b.png",
      name: "SnapDeal-Clone",
      url: "https://friendly-sable-65643a.netlify.app/",
      gitreplink: "https://github.com/Bhavesh299/Snapdeal.com-Clone",
      description:
        "This is clone website of SnapDeal.com. SnapDeal is an e-commerse website where user can buy all kinds of Fashion products.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MondoDb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "3",
      name: "Movie-App",
      img: "https://user-images.githubusercontent.com/97518972/165994138-234c6233-0713-4017-af79-d3c4886561cf.png",
      url: "https://frolicking-monstera-041234.netlify.app/",
      gitreplink: "https://github.com/Bhavesh299/Movie-App",
      description:
        "This is an Movie App, Where user can see the movies and tv shows.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      
      ],
    },
    {
      id: "4",
      name: "Weather-App",
      img: "https://user-images.githubusercontent.com/97518972/165977607-3c01f127-d909-4b29-bf17-3a9bb69dd8c7.png",
      url: "https://eclectic-souffle-40d65d.netlify.app/",
      gitreplink: "https://github.com/Bhavesh299/Weather-App",
      description: "Movie-App , Where user can see weather of city for free",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      
      ],
    },
    {
      id: "5",
      name: "Food-App",
      img: "https://user-images.githubusercontent.com/97518972/165972823-703a0d95-4904-48d1-b604-0477726aa0e4.png",
      url: "https://dashing-druid-04db39.netlify.app/",
      gitreplink: "https://github.com/Bhavesh299/Food-App",
      description:
        "This is an Food App , Where user can see the food and enjoy it freely.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
