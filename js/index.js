// Ratio Calculator

function luminanace(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
  var lum1 = luminanace(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminanace(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  // return (brightest + 0.05) / (darkest + 0.05);
  console.log(((brightest + 0.05) / (darkest + 0.05)).toFixed(2));
}

contrast([255, 255, 255], [255, 255, 0]); // 1.074 for yellow
contrast([255, 255, 255], [0, 0, 255]); // 8.592 for blue

// HEX to RGB Calculator

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(1, 1, 200));
