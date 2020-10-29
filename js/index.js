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
