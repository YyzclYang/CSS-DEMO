keyword.oninput = function(e) {
  if (keyword.value) {
    document.getElementById('suggestion').classList.add('active');
  } else {
    document.getElementById('suggestion').classList.remove('active');
  }
};
