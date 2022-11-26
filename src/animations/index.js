const tl = gsap.timeline();
const mySplitText = new SplitText('.hero__title', { type: 'words,chars' });
const chars = mySplitText.chars;

gsap.set('.hero__title', { perspective: 400 });

tl.from(
  chars,
  {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: '0% 50% -50',
    ease: 'back',
    stagger: 0.01,
  },
  '+=0'
);
