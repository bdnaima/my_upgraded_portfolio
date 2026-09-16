import studyPlannerImage from '../assets/images/planner.jpg'
import bookImage from '../assets/images/pride-and-prejudice.jpg';
import bakeryImage from '../assets/images/bakery.webp'
import movieImage from '../assets/images/movies.jpeg';
import musicImage from '../assets/images/music.png';
import todoImage from '../assets/images/todo.webp';
import foodImage from '../assets/images/food.png';
import drinksImage from '../assets/images/drinks.jpeg';
import weatherImage from '../assets/images/weather-app.png';
import coffeeImage from '../assets/images/coffee.jpg';
import danceAcademyImage from '../assets/images/dance-academy.png';



export const projects = [
    {
        id: 1,
        title: "Study Planner",
        image: studyPlannerImage,
        description:
            "A study planning application developed as part of my Fullstack .NET studies at Lexicon. I built the application with React and created functionality for organizing and managing study tasks. The project uses localStorage to persist user data.",
        technologies: ["React", "Tailwind", "localStorage"],
        url: "https://study-planner-web-application-v2.vercel.app/",
        github: "https://github.com/bdnaima/Study-planner-web-application-v2",
    },

    {
        id: 2,
        title: "Book Tracker",
        image: bookImage,
        description:
            "A book tracking application developed as part of my Fullstack .NET studies at Lexicon. The application was built with React and uses Supabase for data storage, allowing users to manage and keep track of their reading list.",
        technologies: ["React", "CSS", "Supabase"],
        url: "https://book-tracker-amber-one.vercel.app/",
        github: "https://github.com/bdnaima/book_tracker",
    },

    {
        id: 3,
        title: "Cakery Website",
        image: bakeryImage,
        description:
            "A responsive bakery website developed as part of my Fullstack .NET studies at Lexicon. I built the website using HTML, CSS and JavaScript, focusing on responsive design, layout and interactive elements.",
        technologies: ["HTML", "CSS", "JavaScript"],
        url: "https://noma.neocities.org/",
        github: "https://github.com/bdnaima/bakery_website",
    },

    {
        id: 4,
        title: "Dance Academy",
        image: danceAcademyImage,
        description:
            "A responsive dance academy website built with React and TypeScript, featuring dance classes, events, class details and contact information. I used React Router for navigation and Tailwind CSS for styling and responsive design.",
        technologies: ["React", "TypeScript", "React Router", "Tailwind CSS"],
        url: "https://booking-dance-clases-web-applicatio.vercel.app/",
        github: "https://github.com/bdnaima/booking-dance-clases-web-application-v2",
    },

    {
        id: 5,
        title: "Movie App",
        image: movieImage,
        description:
            "A movie website developed at Technigo using the The Movie Database API. I built the application with React and React Router, focusing on fetching and displaying movie data and creating a responsive user interface.",
        technologies: ["React", "React Router", "CSS", "API"],
        url: "https://movie-app-by-priya-naima-sarah.netlify.app/",
        github: "https://github.com/bdnaima/project-movies-vite",
    },

    {
        id: 6,
        title: "Music App",
        image: musicImage,
        description:
            "This was a group project that we created together for the JavaScript & React course at Technigo. We built this application with React and CSS.",
        technologies: ["React", "CSS"],
        url: "https://music-app-by-naima-and-priya.netlify.app/",
        github: "https://github.com/bdnaima/project-music-releases-vite",
    },

    {
        id: 7,
        title: "To Do List",
        image: todoImage,
        description:
            "A team project created for the JavaScript & React course at Technigo. We created this app using React, React Router, Redux Toolkit and Styled Components.",
        technologies: ["React", "React Router", "Redux Toolkit", "Styled Components"],
        url: "https://todo-app-by-naima-sarah-priya.netlify.app/",
        github: "https://github.com/bdnaima/project-todos-redux",
    },

    {
        id: 8,
        title: "Food Quiz",
        image: foodImage,
        description:
            "This was a project completed in a team where we created a food quiz that includes a timer and the score. Here we used React, React Router, Redux and CSS.",
        technologies: ["React", "CSS"],
        url: "https://quiz-app-by-naima-sarah-priya.netlify.app/",
        github: "https://github.com/bdnaima/project-redux-quiz",
    },

    {
        id: 9,
        title: "Drinks Survey",
        image: drinksImage,
        description:
            "This was a team project completed at Technigo where I created a survey about drinks. I created the page using React and CSS.",
        technologies: ["React", "CSS"],
        url: "https://survey-app-by-priya-and-naima.netlify.app/",
        github: "https://github.com/bdnaima/project-survey-vite",
    },

    {
        id: 10,
        title: "Weather App",
        image: weatherImage,
        description:
            "Another group project created for the JavaScript & React course at Technigo. It was built with HTML, CSS, CSS animations and vanilla JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        url: "https://weather-app-by-priya-and-naima.netlify.app/",
        github: "https://github.com/bdnaima/project-weather-app",
    },

    {
        id: 11,
        title: "Coffee Shop Landing Page",
        image: coffeeImage,
        description:
            "A small project where I created a landing page for a coffee shop using HTML, CSS and CSS animations.",
        technologies: ["HTML", "CSS", "CSS Animations"],
        url: "https://bdnaima.github.io/CoffeeShop/",
        github: "https://github.com/bdnaima/CoffeeShop",
    },
];