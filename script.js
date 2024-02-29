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

if (navigator.userAgent.match(/samsung/i)) {
  alert("You are using a defective browser (Samsung Internet) that " +
  "might not be configured to display this website properly. " +
  "You should consider using a proper standards-compliant (turn into a white theme in your browser)" +
  "Or change to other browser, some recomended is google chrome or opera")
};
