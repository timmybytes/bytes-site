// Dark Mode
const checkbox = document.getElementById('checkbox');

if (localStorage.getItem('theme', 'dark')) {
  document.body.classList.add('dark');
  checkbox.checked = true;
}

var themeSwitch = document.getElementById('checkbox');
if (themeSwitch) {
  themeSwitch.addEventListener('change', function (event) {
    resetTheme(); // update color theme
  });

  function resetTheme() {
    if (themeSwitch.checked) {
      // dark theme has been selected
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // save theme selection
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('theme', 'dark'); // reset theme selection
    }
  }
}

// Footer Copyright
const footer = document.getElementById('footer');
const date = new Date().getFullYear();

footer.innerHTML = `&copy ${date} Timothy Merritt`;

const tagline = document.body.querySelector('.bio__tagline');
const tilt = document.body.querySelector('.bio__tilt');
const title = document.body.querySelector('.bio__title').style;
const iconGit = document.body.querySelector('.bio__tagline-icons').childNodes[1].style;
const iconDev = document.body.querySelector('.bio__tagline-icons').childNodes[3].style;
const iconLinked = document.body.querySelector('.bio__tagline-icons').childNodes[5].style;
const iconMusic = document.body.querySelector('.bio__tagline-icons').childNodes[7].style;
const iconTwit = document.body.querySelector('.bio__tagline-icons').childNodes[9].style;
const links = document.body.querySelector('.bio__tagline').childNodes;
const linkDev = document.body.querySelector('.bio__tagline').childNodes[1].style;
const linkWrite = document.body.querySelector('.bio__tagline').childNodes[3].style;
const linkMusic = document.body.querySelector('.bio__tagline').childNodes[5].style;

console.log(iconGit, iconDev, iconLinked, iconMusic);

const fade = () => {
  title.visibility = 'hidden';
  iconGit.visibility = 'hidden';
  setTimeout(() => {
    title.visibility = 'visible';
  }, 500);
  setTimeout(() => {
    linkDev.display = 'inline';
    linkWrite.display = 'inline';
    linkMusic.display = 'inline';
  }, 900);
  setTimeout(() => {
    iconGit.visibility = 'visible';
  }, 1400);
  setTimeout(() => {
    iconDev.visibility = 'visible';
  }, 1800);
  setTimeout(() => {
    iconLinked.visibility = 'visible';
  }, 2200);
  setTimeout(() => {
    iconMusic.visibility = 'visible';
  }, 2600);
  setTimeout(() => {
    iconTwit.visibility = 'visible';
  }, 3000);
};

fade();
