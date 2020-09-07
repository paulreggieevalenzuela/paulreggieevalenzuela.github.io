import React from 'react';

// Assets
import MA1 from 'assets/images/ma-1.png';
import RETROCED from 'assets/images/retroced.png';
import ICARE from 'assets/images/icare.png';

// Utils
import { convertImageToBase64 } from 'utils'; 

const FeaturedProjects = () => {
    const [project, setProject] = React.useState({
        image: MA1,
        title: 'My Assets',
    });
    const projectList = [
        {
            title: 'My Assets',
            description: 'A web app for Private assets collection management such as wines, arts, coins, vehicles, and finances. One of the features consists of visualization like charts for the data of the summary of the assets.',
            image: MA1,
        },
        {
            title: 'Icare Portal',
            description: 'A web app for creating and updating for the insurance in one of the companies for the Australian Government. One of the features is multi step forms for creating insurance.',
            image: ICARE,
        },
        {
            title: 'Retroced',
            description: 'A web app for an online shopping platform for luxury brands and vintage items. One of the features is infinite scroll and searching specific luxury brand with filters.',
            image: RETROCED,
        },
    ];

    return (
        <section className="projects">
            <h3 className="title">Featured Projects</h3>

            <div className="projects__wrapper">
                <ul className="projects__list">
                    {projectList.map((d, i) => 
                        <li key={i} className="project__item" onClick={() =>
                            convertImageToBase64(d.image, (image) =>
                                setProject({
                                    ...d,
                                    image,
                                })
                            )
                        }>
                            <span className="project__num">.0{i + 1}</span>
                            <h3 className="project__title">{d.title}</h3>
                            <p className="project__description">{d.description}</p>
                        </li>
                    )}
                </ul>
                <div className="project__content">
                    <div className="project__image-container">
                        <div className="project__image-card" />
                        <div className="project__image">
                            <img src={project.image} alt="Projects" />
                            <div className="image__overlay" />
                            <p className="image__title">{project.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects;