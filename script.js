document.addEventListener("DOMContentLoaded", function() {
  const links = document.getElementsByClassName('movimento');
  const linksArray = Array.from(links); 

  linksArray.forEach(link => {
    link.addEventListener('click', scrollOnClick);
  });

  function scrollOnClick(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
