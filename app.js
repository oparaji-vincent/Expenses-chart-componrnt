var can = document.getElementsByClassName("spend-chart")[0];
var day = new Date().toDateString().slice(0, 3);
var myChart = new Chart(can, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "$",
        data: [
          {
            x: "mon",
            y: 17.45,
          },
          {
            x: "tue",
            y: 34.91,
          },
          {
            x: "wed",
            y: 52.36,
          },
          {
            x: "thu",
            y: 31.07,
          },
          {
            x: "fri",
            y: 23.39,
          },
          {
            x: "sat",
            y: 43.28,
          },
          {
            x: "sun",
            y: 25.48,
          },
        ],

        backgroundColor: (bar) => {
          return bar.raw.x === day.toLowerCase()
            ? "rgb(118,181,188)"
            : "rgb(236, 117, 93)";
        },
        hoverBackgroundColor: (bar) => {
          return bar.raw.x === day.toLowerCase()
            ? "rgb(180,223,229)"
            : "rgb(255,155,135)";
        },
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  },

  options: {
    tooltips: {
      mode: "index",
      intersect: true,
      position: "custom",
    },
    plugins: {
      tooltip: {
        backgroundColor: "hsl(25, 47%, 15%)",
        caretSize: false,
        displayColors: false,
        yAlign: "bottom",

        callbacks: {
          title: () => "",
          label: (e) => "$" + e.raw.y,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          borderColor: "transparent",
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  },
});

const titleToolTip = (item) => {
  console.log(item);
};

Chart.Tooltip.positioners.custom = function (elements, position) {
  //debugger;
  return {
    x: position.x,
    y: elements[0]._view.base - (elements[0].height() + elements[1].height()),
  };
};