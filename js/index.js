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
const icons = document.body.querySelector('.bio__tagline-icons');
const links = document.body.querySelector('.bio__tagline').childNodes;
const link1 = document.body.querySelector('.bio__tagline').childNodes[1].style;
const link2 = document.body.querySelector('.bio__tagline').childNodes[2].style;
const link3 = document.body.querySelector('.bio__tagline').childNodes[3].style;
const link4 = document.body.querySelector('.bio__tagline').childNodes[4].style;
const link5 = document.body.querySelector('.bio__tagline').childNodes[5].style;

tagline.style.display = 'hidden';
// icons.style.visibility = 'hidden';
// link1.display = 'none';
// link3.display = 'none';
// link5.display = 'none';
const test = () => {
  setTimeout(() => {
    tagline.style.visibility = 'visible';
  }, 500);
  setTimeout(() => {
    link1.display = 'inline';
  }, 900);
  setTimeout(() => {
    link3.display = 'inline';
  }, 1400);
  setTimeout(() => {
    link5.display = 'inline';
  }, 1900);
  setTimeout(() => {
    icons.style.visibility = 'visible';
  }, 2800);
};

test();
