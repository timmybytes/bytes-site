const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', () => {
//   document.body.classList.toggle('dark');
//   // Adding to localStorage
//   // if (document.body.classList.contains('dark') {
//   //   localStorage.setItem('theme', 'dark'); // save theme selection
//   // } else if (!document.body.classList.contains('dark')) {
//   //   localStorage.removeItem('theme', 'dark'); // reset theme selection
//   // })
// });

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

if (localStorage.getItem('theme', 'dark')) {
  document.body.classList.add('dark');
  checkbox.checked = true;
}
