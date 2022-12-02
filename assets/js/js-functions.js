function createDoughnut(id, {...params}) {
  const ctx = document.getElementById(id).getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: params.data,
        backgroundColor: params.colors
      }],
      // labels: params.labels
    }
  });
}

function draggableScrollbar(elClass) { //.className
  const slider = document.querySelector(elClass);
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}
