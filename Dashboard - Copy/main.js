// Drop-down menu JS code
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// Toogle light/dark mode JS code
function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
  } else {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  }
}

// Doughnut chart 1st JS code
// Change data values to get the chart height to change
var ctx = document.getElementById("personalityChart").getContext("2d");
var personalityChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Inactive", "Active"], // Labels for each color
    datasets: [
      {
        label: "",
        data: [20,80],
        backgroundColor: [
          "rgba(253, 78, 109, 1)",
          "rgba(255, 179, 192, 1)",
        ],
        borderColor: [
          "rgba(253, 78, 109, 1)",
          "rgba(255, 179, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index]; // Get the label for the hovered color
          var value = data.datasets[0].data[tooltipItem.index]; // Get the value for the hovered color
          return label + ": " + value;
        },
      },
    },
  },
});



// Bar graph 1st JS code
var ctx2 = document.getElementById("hobbiesBarGraph").getContext("2d");

var gradientBg = ctx2.createLinearGradient(0, 0, 0, 350);
gradientBg.addColorStop(0, "rgba(255, 92, 73, 1)");
gradientBg.addColorStop(1, "rgba(177, 8, 91, 1)");

var hobbiesBarGraph = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "Books",
      "Electronics",
      "Travel",
      "Pharmacies",
      "Fitness",
      "Other",
    ],
    datasets: [
      {
        label: "demo label",
        data: [55, 48, 77, 52, 28, 21],
        backgroundColor: gradientBg,
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

//newwww
var ctx11 = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx11, {
    type: 'line',
    data: {
        labels: ["a",	"b",	"c",	"d",	"e",	"f",	"g" , "h",	"i", "j"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: true,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: "pink", // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'Series 2', // Name the series
            data: [1288,	88942,	44545,	7588,	99,	242,	1417,	5504,	75, 457], // Specify the data values array
            fill: true,
            borderColor: '#4CAF50', // Add custom color border (Line)
            backgroundColor: "red", // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

var ctx12 = document.getElementById("myCharttwo").getContext('2d');

var myCharttwo = new Chart(ctx12, {
    type: 'line',
    data: {
        labels: ["a",	"b",	"c",	"d",	"e",	"f",	"g", "h",	"i", "j"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: true,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'Series 2', // Name the series
            data: [1288,	88942,	44545,	7588,	99,	242,	1417,	5504,	75, 457], // Specify the data values array
            fill: true,
            borderColor: '#4CAF50', // Add custom color border (Line)
            backgroundColor: "purple", // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

var ctx13 = document.getElementById("myChartthr").getContext('2d');

var myChartthr = new Chart(ctx13, {
    type: 'line',
    data: {
        labels: ["a",	"b",	"c",	"d",	"e",	"f",	"g", "h",	"i", "j"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: true,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: "yellow", // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
                  {
            label: 'Series 2', // Name the series
            data: [1288,	88942,	44545,	7588,	99,	242,	1417,	5504,	75, 457], // Specify the data values array
            fill: true,
            borderColor: '#4CAF50', // Add custom color border (Line)
            backgroundColor: "dark pink", // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});



//thirddd
var ctx3 = document.getElementById("exChart").getContext("2d");
var personalityChart = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["Inactive", "Active"], // Labels for each color
    datasets: [
      {
        label: "",
        data: [20,80],
        backgroundColor: [
          "rgba(253, 78, 109, 1)",
          "rgba(255, 179, 192, 1)",
        ],
        borderColor: [
          "rgba(253, 78, 109, 1)",
          "rgba(255, 179, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index]; // Get the label for the hovered color
          var value = data.datasets[0].data[tooltipItem.index]; // Get the value for the hovered color
          return label + ": " + value;
        },
      },
    },
  },
});

//pagestype bar graph
var ctx4 = document.getElementById("pagesBarGraph").getContext("2d");
var gradientBg = ctx4.createLinearGradient(0, 0, 0, 350);
gradientBg.addColorStop(0, "rgba(57, 45, 105, 1)");
gradientBg.addColorStop(1, "rgba(181, 123, 238, 1)");
var pagesBarGraph = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [
      "Blogs",
      "Portfolio",
      "Forum",
      "Landing Page",
      "Fitness",
      "Corporate",
    ],
    datasets: [
      {
        label: "demo label",
        data: [56, 43, 77, 54, 27, 21],
        backgroundColor: gradientBg,
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});


// Bar graph ref sources JS code
var ctx5 = document.getElementById("refstyleBarGraph").getContext("2d");

var gradientBg = ctx5.createLinearGradient(0, 0, 0, 350);
gradientBg.addColorStop(0, "rgba(177, 8, 77, 1)");
gradientBg.addColorStop(1, "rgba(255, 92, 73, 1)");

var refstyleBarGraph = new Chart(ctx5, {
  type: "bar",
  data: {
    labels: [
      "Facebook",
      "Email",
      "Youtube",
      "Whatsapp",
      "Twitter",
    ],
    datasets: [
      {
        label: "demo label",
        data: [28, 44, 67, 83, 61],
        backgroundColor: gradientBg,
        borderColor: [
          "rgba(138, 0, 124, 1)",
          "rgba(148, 35, 144, 1)",
          "rgba(223, 0, 233, 1)",
          "rgba(255, 127, 253, 1)",
          "rgba(255, 179, 193, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});