const canvasChart = document.querySelector('#martin-skills-chart');

let config = {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'Javascript', 'PHP'],
    datasets: [
      {
        label: 'Skills rate',
        data: [100, 80, 90, 70],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)', //1
          'rgba(54, 162, 235, 0.2)', //2
          'rgba(255, 159, 64, 0.2)', //3
          'rgba(54, 162, 235, 0.2)', //4
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)', //1
          'rgba(54, 162, 235, 1)', //2
          'rgba(255, 159, 64, 1)', //3
          'rgba(54, 162, 235, 1)', //4
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: 'y',
  },
};

let chart = new Chart(canvasChart, config);
