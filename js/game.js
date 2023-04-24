function e(element) {return document.getElementById(element);};

// Document aliases
const kd = "kromer-display";

// Intervals
const update_interval = setInterval(function() {
    e(kd).textContent = data.kromer;
}, 50)
const funny_test_interval = setInterval(function() {
    data.kromer += 1;
}, 200)
