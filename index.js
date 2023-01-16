const startdate = document.getElementById("start_date");
const endDate = document.getElementById("end_date");
const validation = document.querySelector(".cyan");
console.log(validation);
const total = document.getElementById("total");

const today = new Date().toISOString().split("T")[0];

start_date.value = today;
start_date.min = today;

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

let tomorrowDate = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowDate;
end_date.min = tomorrowDate;

startdate.addEventListener("change", (e) => {
  let day = new Date(startdate.value);
  if (endDate.value < startdate.value) {
    day.setDate(day.getDate() + 1);
    let tomorrowDate = day.toISOString().split("T")[0];
    endDate.value = tomorrowDate;
  }
});

endDate.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (endDate.value < startdate.value) {
    day.setDate(day.getDate() - 1);
    startdate.max = day.toISOString().split("T")[0];
  }
});
// calculer la diff de temps en milis entre deux date
const boockingPrice = () => {
  let diffTime = Math.abs(new Date(endDate.value) - new Date(startdate.value));
  //c   lculer nombres de jours
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  total.innerText = diffDays * nightPrice.textContent;
};

validation.addEventListener("click", boockingPrice);
