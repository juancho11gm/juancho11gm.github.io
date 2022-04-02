import { config } from '../../config';

const { VITE_API_URL, VITE_SPACE_ID, VITE_API_KEY } = config;

async function fetchProjects() {
  const response = await fetch(`${VITE_API_URL}${VITE_SPACE_ID}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${VITE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      { 
        projectCollection {
          items {
            title,
            description,
            tags,
            image {
              url
            }, 
            url
          }
        }
      }`,
    }),
  });

  const { data } = await response.json();
  return data;
}

export { fetchProjects };
