import PropTypes from 'prop-types'; // ES6
import { projects } from '../../data/projects';

function Projects() {
  const projectsComponent = projects.map((project) => (
    <Project key={project.title} {...project} />
  ));

  return <section className="mt-32 mx-12">{projectsComponent}</section>;
}

function Project({ title, description, tags, image, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <figure className="grid grid-cols-1 md:grid-cols-project shadow-lg rounded mb-16">
        <div className="flex justify-center overflow-hidden bg-zinc-200	">
          <img
            src={image.url}
            alt={title}
            className="max-w-xs sm:max-w-md shadow-md"
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
