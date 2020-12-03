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
