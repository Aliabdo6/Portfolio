import React from 'react';

const projectsData = [
    {
        id: 1,
        title: 'Music player',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nunc erat. Vestibulum mollis leo et tellus aliquam, vel luctus sapien tincidunt. Nulla facilisi.',
        image: 'https://th.bing.com/th/id/R.2e1b54a298e54f4dd51dfc2afffd0b09?rik=pwEAmq7KLm9iuQ&riu=http%3a%2f%2fwww.hdwallpapers.in%2fwalls%2fmusic_2-wide.jpg&ehk=3ewBQz%2fsVaR4nJrb23uFnfTd3dWmCVkn50Ctm2G%2bsD8%3d&risl=&pid=ImgRaw&r=0',
        link: 'https://music-player-aliabdo6.vercel.app/',
    },
    {
        id: 2,
        title: 'Calculator',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nunc erat. Vestibulum mollis leo et tellus aliquam, vel luctus sapien tincidunt. Nulla facilisi.',
        image: 'https://th.bing.com/th/id/R.93025e6f5abe54566e99dcb439907479?rik=kRx24inTQKeStA&pid=ImgRaw&r=0',
        link: 'https://aliabdo6.github.io/Calculator/',
    },
    {
        id: 3,
        title: 'responsive-navbar',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nunc erat. Vestibulum mollis leo et tellus aliquam, vel luctus sapien tincidunt. Nulla facilisi.',
        image: 'https://th.bing.com/th/id/R.ca966fc141df37e78ba3a0c8b4b27f90?rik=CcEGb8yVSQUJsQ&pid=ImgRaw&r=0',
        link: 'https://aliabdo6.github.io/responsive-navbar/',
    },
];

const FlexBox = ({ project }) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
            height: '400px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
        }}
    >
        <img
            src={project.image}
            alt={project.title}
            style={{
                marginBottom: '20px',
                height: '150px',
            }}
        />
        <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
        <p style={{ textAlign: 'center' }}>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer"
            style={
                {
                    color: 'black',
                    backgroundColor: 'blue',
                }
            }
        >
            View on GitHub
        </a>
    </div>
);

const Projects = () => (
    <>
        <div style={{
            textAlign: 'center',
            paddingTop: '100px',
            paddingBottom: '100px',
        }}
            id='projects'
        >


            <h2 style={{ textAlign: 'center' }}>Projects</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    maxWidth: '1000px',
                    margin: '0 auto',
                }}
            >
                {projectsData.map((project) => (
                    <FlexBox key={project.id} project={project} />
                ))}
            </div>
        </div>
    </>

);

export default Projects;
