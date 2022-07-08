import { Link } from "react-router-dom";

function Skills() {
    return (
        <>
        <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="/assets/icons/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></Link>
        <Link to="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="/assets/icons/html5-colored.svg" width="36" height="36" alt="HTML5" /></Link>
        <Link to="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="/assets/icons/react-colored.svg" width="36" height="36" alt="React" /></Link>
        <Link to="https://jquery.com/" target="_blank" rel="noreferrer"><img src="/assets/icons/jquery-colored.svg" width="36" height="36" alt="JQuery" /></Link>
        <Link to="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="/assets/icons/css3-colored.svg" width="36" height="36" alt="CSS3" /></Link>
        {/* <Link to="https://webpack.js.org/" target="_blank" rel="noreferrer"><img src="" width="36" height="36" alt="Webpack" /></Link> */}
        <Link to="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="/assets/icons/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></Link>
        <Link to="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="/assets/icons/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></Link>
        <Link to="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="/assets/icons/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></Link>
        <Link to="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="/assets/icons/express-colored.svg" width="36" height="36" alt="Express" /></Link>
        <Link to="https://graphql.org/" target="_blank" rel="noreferrer"><img src="/assets/icons/graphql-colored.svg" width="36" height="36" alt="GraphQL" /></Link>
        <Link to="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="/assets/icons/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></Link>
        <Link to="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="/assets/icons/mysql-colored.svg" width="36" height="36" alt="MySQL" /></Link>
        <Link to="https://www.heroku.com/" target="_blank" rel="noreferrer"><img src="/assets/icons/heroku-colored.svg" width="36" height="36" alt="Heroku" /></Link>
        </>
    )
}


export default Skills