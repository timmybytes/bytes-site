// Dark Mode
const checkbox = document.getElementById('checkbox');
const lightSwitch = document.getElementById('light-switch');
const darkSwitch = document.getElementById('dark-switch');

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
      darkSwitch.setAttribute('aria-pressed', true);
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // save theme selection
    } else {
      lightSwitch.setAttribute('aria-pressed', true);
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
const iconResume = document.body.querySelector('.bio__tagline-icons').childNodes[1].style;
const iconGit = document.body.querySelector('.bio__tagline-icons').childNodes[3].style;
const iconDev = document.body.querySelector('.bio__tagline-icons').childNodes[5].style;
const iconLinked = document.body.querySelector('.bio__tagline-icons').childNodes[7].style;
const iconMusic = document.body.querySelector('.bio__tagline-icons').childNodes[9].style;
const iconTwit = document.body.querySelector('.bio__tagline-icons').childNodes[11].style;
const linkDev = document.body.querySelector('.bio__tagline').childNodes[1].style;
const linkWrite = document.body.querySelector('.bio__tagline').childNodes[3].style;
const linkMusic = document.body.querySelector('.bio__tagline').childNodes[5].style;

const fade = () => {
  title.visibility = 'hidden';
  setTimeout(() => {
    title.visibility = 'visible';
  }, 200);
  setTimeout(() => {
    linkDev.display = 'inline';
    linkWrite.display = 'inline';
    linkMusic.display = 'inline';
  }, 900);
  // setTimeout(() => {
  // }, 1400);
  setTimeout(() => {
    title.display = 'none';
    titleFade.display = 'block';
    iconResume.visibility = 'visible';
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
