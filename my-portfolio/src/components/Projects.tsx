import Image from 'next/image';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'Built a personal portfolio website in Next.js.',
        imageUrl: '/home.PNG',
    },
    {
        title: 'Blog Website',
        description: 'Built a dynamic blog website in Next.js with custom CSS.',
        imageUrl: '/proj.PNG',
    },
    {
        title: 'Real Estate Website',
        description: 'Built a Figma-based real estate website in Next.js using custom CSS.',
        imageUrl: '/estae.PNG',
    },
];

export default function ProjectSection() {
    return (
        <section className="project-section">
            <div className="container">
                <h2 className="section-title">Our Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <Image 
                                src={project.imageUrl} 
                                alt={project.title} 
                                width={500} 
                                height={300} 
                                className="project-image"
                            />
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
