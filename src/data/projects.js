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



export const projects = [
    {
        id: 1,
        title: "Study Planner",
        image: studyPlannerImage,
        description: "A team project created for the JavaScript & React course at Technigo. We created this app using React, React Router, Redux Toolkit and Styled components.",
        technologies: ["React", "Tailwind", "localStorage"],
        url: "https://study-planner-web-application-v2.vercel.app/login",
        github: "https://github.com/bdnaima/Study-planner-web-application-v2"
    },
    {
        id: 2,
        title: "Book Tracker",
        image: bookImage,
        description: "This project was created for the JavaScript & React course at Technigo. I created this app from scratch using HTML, CSS and vanilla JavaScript.",
        technologies: ["React", "CSS", "LocalStorage"],
        url: "https://book-tracker-amber-one.vercel.app/",
        github: "https://github.com/bdnaima/book_tracker"
    },
    {
        id: 3,
        title: "Cakery Website",
        image: bakeryImage,
        description: "This was a group project that we created together for the JavaScript & React course at Technigo. We built this application with React and CSS.",
        technologies: ["HTML", "CSS", "JavaScript"],
        url: "https://noma.neocities.org/",
        github: "https://github.com/bdnaima/bakery_website"
    },
    {
        id: 4,
        title: "Movie App",
        image: movieImage,
        description: "This was a project completed at Technigo where I created a movies site, using themoviedb.org API. Here I used React, React Router and CSS.",
        technologies: ["React", "CSS"],
        url: "https://movie-app-by-priya-naima-sarah.netlify.app/",
        github: "https://github.com/bdnaima/project-movies-vite"
    },
    {
        id: 5,
        title: "Music App",
        image: musicImage,
        description: "This was a group project that we created together for the JavaScript & React course at Technigo. We built this application with React and CSS.",
        technologies: ["React", "CSS"],
        url: "https://music-app-by-naima-and-priya.netlify.app/",
        github: "https://github.com/bdnaima/project-music-releases-vite"
    },
    {
        id: 6,
        title: "To Do List",
        image: todoImage,
        description: "A team project created for the JavaScript & React course at Technigo. We created this app using React, React Router, Redux Toolkit and Styled components.",
        technologies: ["React", "Tailwind", "localStorage"],
        url: "https://todo-app-by-naima-sarah-priya.netlify.app/",
        github: "https://github.com/bdnaima/project-todos-redux"
    },

    {
        id: 7,
        title: "Food Quiz",
        image: foodImage,
        description: "This was a project completed in a team where we created a food quiz that includes a timer and the score. Here we used React, React Router, Redux and CSS.",
        technologies: ["React", "CSS"],
        url: "https://quiz-app-by-naima-sarah-priya.netlify.app/",
        github: "https://github.com/bdnaima/project-movies-vite"
    }, {
        id: 8,
        title: "Drinks survey",
        image: drinksImage,
        description: "This was a team project completed at Technigo where I created a survey about drinks. I created the page using React and CSS.",
        technologies: ["React", "CSS"],
        url: "https://survey-app-by-priya-and-naima.netlify.app/",
        github: "https://github.com/bdnaima/project-survey-vite"
    }, {
        id: 9,
        title: "Weather App",
        image: weatherImage,
        description: "Another group project created for the JavaScript & React course at Technigo. It was built with HTML, CSS, CSS animations and vanilla JavaScript.",
        technologies: ["React", "CSS"],
        url: "https://weather-app-by-priya-and-naima.netlify.app/",
        github: "https://github.com/bdnaima/project-weather-app"
    },
    {
        id: 10,
        title: "Coffee shop landingpage",
        image: coffeeImage,
        description: "This was a small project where I created a landing page for a coffee shop. I created the page using only HTML, CSS and CSS Animations.",
        technologies: ["React", "CSS"],
        url: "https://bdnaima.github.io/CoffeeShop/",
        github: "https://github.com/bdnaima/CoffeeShop"
    },
];