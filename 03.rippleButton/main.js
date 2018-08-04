aButton.onclick = e => {
  aButton.querySelector('.circle').style.top = e.offsetY + 'px';
  aButton.querySelector('.circle').style.left = e.offsetX + 'px';
  aButton.querySelector('.circle').classList.add('start');
};
aButton.querySelector('.circle').addEventListener('animationend', () => {
  aButton.querySelector('.circle').classList.remove('start');
});
