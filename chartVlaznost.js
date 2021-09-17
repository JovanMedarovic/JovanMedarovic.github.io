let x;
var timeLine = [];
var vlaznost = [];
var svetlost = [];
var pritisak = [];
var zvuk = [];
var temperatura = [];

$(document).ready(() => {
  $.getJSON("data.json", (data) => {
    x = data;
  }).fail(() => {
    console.log("An error has occurred.");
  });
});

setTimeout(() => {
  main();
}, 100);

function main() {
  let j = 0;
  for (let i = 1; i < 290; i = i + 10) {
    timeLine[j] = x[i].Time;
    j++;
  }
  j = 0;
  for (let i = 1; i < 290; i = i + 10) {
    vlaznost[j] = x[i].Humidity;
    j++;
  }
  j = 0;
  for (let i = 1; i < 290; i = i + 10) {
    svetlost[j] = x[i].Light;
    j++;
  }
  j = 0;
  for (let i = 1; i < 290; i = i + 10) {
    pritisak[j] = x[i].Pressure;
    j++;
  }
  j = 0;
  for (let i = 1; i < 290; i = i + 10) {
    zvuk[j] = x[i].Sound;
    j++;
  }
  j = 0;
  for (let i = 1; i < 290; i = i + 10) {
    temperatura[j] = x[i].Temperature;
    j++;
  }

  new Chart("chartVlaznost", {
    type: "line",
    data: {
      labels: timeLine,
      datasets: [
        {
          data: [...vlaznost],
          borderColor: "red",
          label: "Vlaznost",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Procenat vlaznosti vazduha (%)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vreme (s)'
          }
        }]
      }
    },
  });

  new Chart("chartSvetlost", {
    type: "line",
    data: {
      labels: timeLine,
      datasets: [
        {
          data: [...svetlost],
          borderColor: "green",
          label: "Kolicina svetlosti",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Kolicina svetlosti - Lumen (lm)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vreme (s)'
          }
        }]
      }
    },
  });

  new Chart("chartPritisak", {
    type: "line",
    data: {
      labels: timeLine,
      datasets: [
        {
          data: [...pritisak],
          borderColor: "blue",
          label: "Pritisak u vazduhu",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Pritisak vazduha (KPa)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vreme (s)'
          }
        }]
      }
    },
  });

  new Chart("chartZvuk", {
    type: "line",
    data: {
      labels: timeLine,
      datasets: [
        {
          data: [...zvuk],
          borderColor: "purple",
          label: "Zvuk",
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Jacina zvka (dBA)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vreme (s)'
          }
        }]
      }
    },
  });

  new Chart("chartTemperatura", {
    type: "line",
    data: {
      labels: timeLine,
      datasets: [
        {
          data: [...temperatura],
          borderColor: "orange",
          label: "Temperatura",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Temperatura (°C)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vreme (s)'
          }
        }]
      }   
    },
  });


  new Chart("chartPritisak-Temp", {
    type: "line",
    data: {
      labels: timeLine,
      datasets: [
        {
          data: [...temperatura],
          borderColor: "orange",
          label: "Temperatura",
          fill: false,
        },
        {
          data: [...pritisak],
          borderColor: "blue",
          label: "Pritisak",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: `Temperatura (°C) / Pritisak vazduha (KPa)`
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vreme (s)'
          }
        }]
      }   
    },
  });


  new Chart("chartVlaznost-Temp", {
    type: "line",
    data: {
      labels: timeLine,
      datasets: [
        {
          data: [...temperatura],
          borderColor: "orange",
          label: "Temperatura",
          fill: false,
        },
        {
          data: [...vlaznost],
          borderColor: "red",
          label: "Vlaznost",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: `Temperatura (°C) / Procenat vlaznosti (%)`
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Vreme (s)'
          }
        }]
      }   
    },
  });
}
