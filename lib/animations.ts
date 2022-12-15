import gsap from 'gsap';

function moveX(element: HTMLElement, x: number | string, options: object = {}) {
  const allOptions = {
    duration: 0.25,
    ...options
  };
  gsap.to(element, { x, ...allOptions });
}

export { moveX };