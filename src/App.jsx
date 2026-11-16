// --- IMPORTACIONES--
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  // -- IDIOMA PRINCIPAL ESPAÑOL --
  const [language, setLanguage] = useState('es');

  const translations = {
    es: {
      // navbar
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      //hero
      greeting: '¡Hola! Soy Karina',
      profession: 'Apasionada por la tecnología y el mundo digital.',
      areas: 'Desarrollo web · Frontend · Análisis de datos',
      viewProjects: 'Descubre mis proyectos',
      // about
      aboutText1: 'Soy desarrolladora web y analista de datos. Me apasiona la tecnología y disfruto aprendiendo y experimentando con diferentes herramientas y tecnologías. He realizado prácticas en Ilatina, dentro del área de desarrollo Frontend, y en NTT, donde trabajé en proyectos relacionados con Big Data e Inteligencia Artificial.',
      aboutText2: 'Para desconectar y mantener el equilibrio, me encanta ir al gimnasio, leer y escuchar buena música.',
      skills: 'Habilidades',
      skillsText: 'Aquí mostraremos mis habilidades.',
      development: 'Desarrollo web',
      data: 'Datos',
      ai: 'Inteligencia Artificial',
      tools: 'Herramientas y tecnologías',
      // Proyecto
      projectsText: 'Aquí puedes encontrar mis proyectos.',
      bookTitle: 'BookControl',
      bookDescription: 'BookControl es una aplicación web desarrollada con Java y Spring Boot que permite explorar libros, organizar lecturas en listas personales y compartir valoraciones y reseñas. Su objetivo es ofrecer un espacio donde los usuarios puedan gestionar y descubrir sus lecturas de forma sencilla e intuitiva.',
      githubLink: 'Ver proyecto en GitHub',
      contactText: 'Contacto'
    },

    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      greeting: "Hello, I'm Karina.",
      profession: 'Passionate about technology and the digital world.',
      areas: 'Web Development · Frontend · Data Analytics',
      viewProjects: 'Explore my projects',
      aboutText1: "I'm a Web Developer and Data Analyst. I'm passionate about technology and enjoy learning and experimenting with different tools and technologies. I did internships at Ilatina, where I worked in Frontend Development, and at NTT, where I worked on projects related to Big Data and Artificial Intelligence.",
      aboutText2: 'To disconnect and keep a good balance, I enjoy going to the gym, reading, and listening to music.',
      skills: 'Skills',
      skillsText: 'Here I will show my skills.',
      development: 'Web Development',
      data: 'Data',
      ai: 'Artificial Intelligence',
      tools: 'Tools & Technologies',
      // Projects
      projectsText: 'Here you can find my projects.',
      bookTitle: 'BookControl',
      bookDescription: 'BookControl is a web application developed with Java and Spring Boot that allows users to explore books, organize their reading lists, and share ratings and reviews. Its goal is to provide a simple and intuitive space to manage and discover books.',
      githubLink: 'View project on GitHub',
      contactText: "Contact"
    }
  };

  // Obtenemos las traducciones del idioma seleccionado
  const t = translations[language];

  const skills = [
    {
      title: t.development,
      technologies: [
        'HTML', 'CSS', 'JavaScript', 'Java',
        'PHP', 'Spring Boot', 'Laravel', 'WordPress'
      ]
    },
    {
      title: t.ai,
      technologies: ['Machine Learning', 'TensorFlow', 'CNN']
    },
    {
      title: t.data,
      technologies: [
        'Python', 'Pandas', 'NumPy', 'Power BI',
        'Apache Kafka', 'Hadoop', 'Hive', 'PySpark',
        'MySQL', 'Oracle', 'MongoDB', 'Cassandra'
      ]
    },
    {
      title: t.tools,
      technologies: [
        'GitHub', 'GitLab', 'Docker',
        'AWS', 'Microsoft Azure', 'Azure Synapse Analytics'
      ]
    }

  ];

  return (
    <div className="app">

      {/* --BARRA DE NAVEGACIÓN -- */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        translations={t}
      />

      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>{t.greeting}</h1>
          <h2>{t.profession}</h2>
          <p className="hero-areas">{t.areas}</p>
          <a href="#projects" className="hero-link">
            {t.viewProjects}
          </a>
        </div>
      </section>

      {/* ABOUT: SOBRE MÍ + SKILLS */}
      <section id="about" className="about">
        <div className="about-intro">
          <div className="about-heading">
            <h2>{t.about}</h2>
            <div className="about-decoration"></div>
          </div>

          <div className="about-description">
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
          </div>

        </div>

        <div className="about-skills">
          <h2>{t.skills}</h2>
          <p>{t.skillsText}</p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <h3>{skill.title}</h3>

                <div className="skill-tags">
                  {skill.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {/* PROJECTS */}
      <section id="projects" className="projects">

        <div className="projects-intro">

          <div className="projects-heading">
            <h2>{t.projects}</h2>
            <div className="projects-decoration"></div>
          </div>

          <div className="projects-description">
            <p>{t.projectsText}</p>
          </div>

        </div>

        <div className="projects-grid">

          <article className="project-card">

            <div className="project-logo">
              <img
                src="/images/logo.png"
                alt="BookControl logo"
              />
            </div>

            <div className="project-info">
              <h3>{t.bookTitle}</h3>
              <p>{t.bookDescription}</p>

              <a
                href="https://github.com/Karinabk28/BookControl"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                {t.githubLink} ↗
              </a>
            </div>

          </article>

        </div>

      </section>
      {/* CONTACT */}

<section id="contact" className="contact">

    <div className="contact-heading">
        <h2>{t.contact}</h2>
        <div className="contact-decoration"></div>
    </div>

    <div className="contact-links">

        <a href="mailto:Karinabaibakk@gmail.com" className="contact-card">
            <img src="/images/gmail.png" alt="Gmail" />
            <span>Gmail</span>
        </a>

        <a
            href="
https://www.linkedin.com/in/karinabaibak"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card">
            <img src="/images/linkedin.png" alt="LinkedIn" />
            <span>LinkedIn</span>
        </a>

    </div>

</section>


    </div>
  );
}

export default App;
