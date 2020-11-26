// Dark Mode
const checkbox = document.getElementById('checkbox');

// Save preference locally
/** global: localStorage */
if (localStorage.getItem('theme', 'dark')) {
  document.body.classList.add('dark');
  checkbox.checked = true;
}

var themeSwitch = document.getElementById('checkbox');
if (themeSwitch) {
  themeSwitch.addEventListener('change', function (event) {
    resetTheme(); // update color theme
  });

  var resetTheme = () => {
    if (themeSwitch.checked) {
      // dark theme has been selected
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // save theme selection
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('theme', 'dark'); // reset theme selection
    }
  };
}

// Footer Copyright
const footer = document.getElementById('footer');
const date = new Date().getFullYear();
footer.innerHTML = `&copy ${date} Timothy Merritt`;

// Homepage & header animations
// TODO: REFACTOR
const title = document.body.querySelector('.bio__title').style;
const titleFade = document.body.querySelector('.bio__title-fade').style;
const iconGit = document.body.querySelector('.bio__tagline-icons').childNodes[1].style;
const iconDev = document.body.querySelector('.bio__tagline-icons').childNodes[3].style;
const iconLinked = document.body.querySelector('.bio__tagline-icons').childNodes[5].style;
const iconMusic = document.body.querySelector('.bio__tagline-icons').childNodes[7].style;
const iconTwit = document.body.querySelector('.bio__tagline-icons').childNodes[9].style;
const linkDev = document.body.querySelector('.bio__tagline').childNodes[1].style;
const linkWrite = document.body.querySelector('.bio__tagline').childNodes[3].style;
const linkMusic = document.body.querySelector('.bio__tagline').childNodes[5].style;

const fade = () => {
  title.visibility = 'hidden';
  setTimeout(() => {
    title.visibility = 'visible';
  }, 500);
  setTimeout(() => {
    linkDev.display = 'inline';
    linkWrite.display = 'inline';
    linkMusic.display = 'inline';
  }, 900);
  setTimeout(() => {
    title.display = 'none';
    titleFade.display = 'block';
    iconGit.visibility = 'visible';
    iconDev.visibility = 'visible';
    iconLinked.visibility = 'visible';
    iconMusic.visibility = 'visible';
    iconTwit.visibility = 'visible';
  }, 1800);
  setTimeout(() => {
    footer.style.visibility = 'visible';
  }, 2200);
};

fade();
