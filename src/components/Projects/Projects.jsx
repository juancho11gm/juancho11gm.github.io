import PropTypes from 'prop-types'; // ES6
import { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/contentful/Contenful';

function useProjects() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');
    fetchProjects()
      .then((data) => {
        setData(data.projectCollection.items);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, []);

  return {
    status,
    data,
  };
}

function Projects() {
  const { status, data: projects } = useProjects();

  if (projects == null || status !== 'success') {
    return <p>Loading...</p>;
  }

  const projectsComponent = projects.map((project) => (
    <Project key={project.title} {...project} />
  ));

  return <section className="mt-32 mx-12">{projectsComponent}</section>;
}

function Project({ title, description, tags, image, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <figure className="grid grid-cols-1 md:grid-cols-project shadow-lg rounded mb-16">
        <div className="flex justify-center overflow-hidden bg-stone-100">
          <img
            src={image.url}
            alt={title}
            className="max-w-xs sm:max-w-sm shadow-md"
            loading="lazy"
          />
        </div>
        <div className="bg-white px-6 py-12">
          <h3 className="text-md py-2">{title}</h3>
          <p className="font-bold">{description}</p>
          <div className="py-4 flex flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary px-2 py-2 mr-2 mb-2 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </figure>
    </a>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  url: PropTypes.string.isRequired,
};

export default Projects;
