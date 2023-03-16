export default function decorate(block) {
  const sectionId = block.querySelector(':scope > div > div').innerText;
  block.innerHTML = `
    <a href="#${sectionId}">Scroll Down</a>
  `;
}
