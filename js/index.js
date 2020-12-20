// Dark Mode
const checkbox = document.getElementById('checkbox');
const lightSwitch = document.getElementById('light-switch');
const darkSwitch = document.getElementById('dark-switch');

if (localStorage.getItem('theme', 'dark')) {
  document.body.classList.add('dark');
  checkbox.checked = true;
}

if (checkbox) {
  checkbox.addEventListener('change', function (event) {
    resetTheme();
  });
  // For a11y
  checkbox.onkeydown = () => {
    resetTheme();
  };

  var resetTheme = () => {
    if (checkbox.checked) {
      darkSwitch.setAttribute('aria-pressed', true);
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      lightSwitch.setAttribute('aria-pressed', true);
      document.body.classList.remove('dark');
      localStorage.removeItem('theme', 'dark');
    }
  };
}

// Footer Copyright
const footer = document.getElementById('footer');
const date = new Date().getFullYear();
footer.innerHTML = `&copy ${date} Timothy Merritt`;
const showFooter = () => {
  setTimeout(() => {
    footer.style.visibility = 'visible';
  }, 1800);
};
showFooter();
