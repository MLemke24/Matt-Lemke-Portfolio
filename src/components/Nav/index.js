import React from 'react';
// import logo from '../../assets/logo/portfolio-logo.jpg'


function Nav(props) {
    const {
        projects,
        setCurrentProject,
        currentProject
    } = props

    return (
        <header className= 'flex-row'>
            <h2 className="name" href='/'>
            {/* <img src={logo} className="logo" style={{ width: "30px" }} alt="cover" /> */}
            Matt Lemke 
            </h2>
            <nav>
                <ul className='flex-row navItems'>
                    <li className='mx-2'>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                    {projects.map((project) => (
                        <li className={`mx-1 ${
                            currentProject.name === project.name && 'navActive'
                        }`} key={project.name}>
                            <span
                            onClick={() => {
                                setCurrentProject(project)
                            }}
                            >
                                {project.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;