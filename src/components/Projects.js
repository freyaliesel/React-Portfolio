import { Link } from "react-router-dom";

// this needs to handle links

function Projects() {
    return (
        <section id="work">
            <h2>Work</h2>
            <div className="container">
                <Link id="dately" className="heroproject project" to="#">
                    <div id="herocontent" className="content">
                        Dately
                        <span className="language">Javascript/HTML/CSS</span>
                    </div>
                    <img
                        src="./assets/images/Dately.png"
                        alt="preview of the web app Dately"
                    />
                </Link>
                <Link id="manyfest" className="project" to="">
                    <div className="content">
                        Manyfest
                        <span className="language">Javascript/Handlebars</span>
                    </div>
                    <img
                        src="./assets/images/manyfest.png"
                        alt="preview of a game made in scratch"
                    />
                </Link>
                <Link id="weather" className="project" to="">
                    <div className="content">
                        {" "}
                        Weather
                        <span className="language">Javascript/HTML/CSS</span>
                    </div>
                    <img
                        src="./assets/images/weather-dashboard.png"
                        alt="preview of a weather dashboard web app"
                    />
                </Link>
                <Link id="scheduler" className="project" to="">
                    <div className="content">
                        Scheduler
                        <span className="language">Javascript/HTML</span>
                    </div>
                    <img
                        src="./assets/images/worday-scheduler.png"
                        alt="preview of a worday schedule web app"
                    />
                </Link>
                <Link id="quiz" className="project" to="">
                    <div className="content">
                        Code Quiz<span className="language">Javascript</span>
                    </div>

                    <img
                        src="./assets/images/code-quiz.png"
                        alt="preview of a code quiz web app"
                    />
                </Link>

                {/* <!-- <a id="scratch" className="project" href=""
            >
            <div className="content">Memory<span className="language">Scratch</span></div>
            <img
                src="./assets/images/memorygame.png"
                alt="preview of a game made in scratch"
          /></a> --> */}
            </div>
        </section>
    );
}

export default Projects;
