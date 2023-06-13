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
    labels: ["Extroverted", "Introverted", "Opinionated", "Emotional"], // Labels for each color
    datasets: [
      {
        label: "",
        data: [40, 25, 25, 10],
        backgroundColor: [
          "rgba(128, 14, 47, 1)",
          "rgba(201, 25, 74, 1)",
          "rgba(253, 78, 109, 1)",
          "rgba(255, 179, 192, 1)",
        ],
        borderColor: [
          "rgba(128, 14, 47, 1)",
          "rgba(201, 25, 74, 1)",
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

// Doughnut chart 2nd JS code
var ctx2 = document.getElementById("valuesChart").getContext("2d");
var valuesChart = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Accountability", "Diligence", "Other", "Discipline", "Integrity"],
    datasets: [
      {
        label: "",
        data: [35, 25, 10, 15, 15],
        backgroundColor: [
          "rgba(21, 29, 59, 1)",
          "rgba(11, 39, 79, 1)",
          "rgba(1, 58, 99, 1)",
          "rgba(42, 111, 151, 1)",
          "rgba(137, 194, 217, 1)",
        ],
        borderColor: [
          "rgba(21, 29, 59, 1)",
          "rgba(11, 39, 79, 1)",
          "rgba(1, 58, 99, 1)",
          "rgba(42, 111, 151, 1)",
          "rgba(137, 194, 217, 1)",
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

// Doughnut chart 3rd JS code
var ctx3 = document.getElementById("beliefsChart").getContext("2d");
var beliefsChart = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: [
      "Company",
      "Operating",
      "Commercial",
      "Other",
      "Product Validation",
    ],
    datasets: [
      {
        label: "",
        data: [35, 25, 10, 15, 15],
        backgroundColor: [
          "rgba(138, 0, 124, 1)",
          "rgba(148, 35, 144, 1)",
          "rgba(223, 0, 233, 1)",
          "rgba(255, 127, 253, 1)",
          "rgba(255, 179, 193, 1)",
        ],
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

// Bar graph 1st JS code
var ctx4 = document.getElementById("hobbiesBarGraph").getContext("2d");

var gradientBg = ctx4.createLinearGradient(0, 0, 0, 350);
gradientBg.addColorStop(0, "rgba(57, 45, 105, 1)");
gradientBg.addColorStop(1, "rgba(181, 123, 238, 1)");

var hobbiesBarGraph = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [
      "Reading",
      "Writing",
      "Sports",
      "Drawing",
      "Photography",
      "Cycling",
      "Painting",
      "Yoga",
      "Dancing",
      "Singing",
      "Coding",
      "Others",
    ],
    datasets: [
      {
        label: "demo label",
        data: [25, 55, 20, 60, 90, 42, 78, 62, 30, 50, 61, 72],
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

// Bar graph 2nd JS code
var ctx5 = document.getElementById("lifestyleBarGraph").getContext("2d");

var gradientBg = ctx5.createLinearGradient(0, 0, 0, 350);
gradientBg.addColorStop(0, "rgba(177, 8, 77, 1)");
gradientBg.addColorStop(1, "rgba(255, 92, 73, 1)");

var lifestyleBarGraph = new Chart(ctx5, {
  type: "bar",
  data: {
    labels: [
      "Sedentary",
      "Active",
      "Semi-Active",
      "Social",
      "Outdoory",
      "Solitary",
    ],
    datasets: [
      {
        label: "demo label",
        data: [5, 4, 3, 3, 4, 5],
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

// Doughnut chart 4th JS code
var ctx6 = document.getElementById("lifeGoalsChart").getContext("2d");
var lifeGoalsChart = new Chart(ctx6, {
  type: "doughnut",
  data: {
    labels: ["Health", "Career", "Family", "Financial", "Personal"],
    datasets: [
      {
        label: "",
        data: [35, 25, 10, 15, 15],
        backgroundColor: [
          "rgba(138, 0, 124, 1)",
          "rgba(148, 35, 144, 1)",
          "rgba(223, 0, 233, 1)",
          "rgba(255, 127, 253, 1)",
          "rgba(255, 179, 193, 1)",
        ],
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
