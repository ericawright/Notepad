let splitter = document.getElementById('splitter');
let sidebar = document.getElementById('sidebar');

splitter.addEventListener('mousedown', (event) => {
  let sidebar_width = sidebar.style.width ? parseInt(sidebar.style.width.slice(0, -2)) : 100;
  if (event.which !== 1) {
    return;
  }
  let initialX = event.screenX - sidebar_width;
  let mousemove = (event) => {
    let newWidth = event.screenX - initialX;
    if (newWidth < 158) {
      newWidth = 158;
    } else if (newWidth > 396) {
      newWidth = 396;
    }
    sidebar.style.width = `${newWidth}px`;
  };

  let mouseup = (event) => {
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  };

  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
});