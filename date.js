
var today = new Date();
var monthIndex = today.getMonth();
var day = today.getDate();
var year = today.getFullYear();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"];
var dateString = months[monthIndex] + " " + day + ", " + year;

document.write('<h2>' + dateString + '</h2>');
