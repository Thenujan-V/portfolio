const dot = document.createElement('div');
  dot.classList.add('cursor-dot');

  const border = document.createElement('div');
  border.classList.add('cursor-border');

  document.body.appendChild(dot);
  document.body.appendChild(border);

  document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    border.style.left = e.clientX + 'px';
    border.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    border.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    border.style.opacity = '1';
  });