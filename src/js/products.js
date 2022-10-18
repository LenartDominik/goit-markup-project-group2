function myFunction(d, p, b) {
  var x = document.getElementById(d);
  var y = document.getElementById(p);
  var m = document.getElementById(b);

  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'none';
    m.style.backgroundImage = 'none';
  } else {
    x.style.display = 'none';
    y.style.display = 'block';
    m.style.backgroundImage =
      'url("https://ewamazurek.github.io/Ice-Cream-2-Products/images/test1.png")';
  }
}
