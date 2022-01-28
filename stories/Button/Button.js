import './Buttons.css';

export const createButton = ({
  outline = false,
  large = false,
  small = false,
  block = false,
  label = 'Botão padrão',
}) => {
  const classes = [];
  if (outline) classes.push('btn--outline');
  if (large) classes.push('btn--large');
  if (small) classes.push('btn--small');
  if (block) classes.push('btn--block');
  const btn = document.createElement('button');
  btn.className = [`btn`].concat(classes).join(' ');
  btn.innerText = label;

  return btn;
}