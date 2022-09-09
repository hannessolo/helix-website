export default function decorate(block) {
  block.classList.add('faq');
  const children = Array.from(block.children);

  children.forEach((child) => child.children[0]?.classList.add('question'));
  children.forEach((child) => child.children[1]?.classList.add('answer'));
}
