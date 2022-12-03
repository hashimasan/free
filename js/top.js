function getBmi() {
  var height = document.getElementById("heightBox").value;
  var weight = document.getElementById("weightBox").value;
  var yourBmi = document.getElementById("yourBmi");
  yourBmi.value = (weight / height / height) * 10000;
  var bmi22 = document.getElementById("bmi22");
  bmi22.value = getWeight(height, 22);
  var bmi21 = document.getElementById("bmi21");
  bmi21.value = getWeight(height, 21);
  var bmi20 = document.getElementById("bmi20");
  bmi20.value = getWeight(height, 20);
  var bmi19 = document.getElementById("bmi19");
  bmi19.value = getWeight(height, 19);
  var bmi18 = document.getElementById("bmi18");
  bmi18.value = getWeight(height, 18);
  var bmi17 = document.getElementById("bmi17");
  bmi17.value = getWeight(height, 17);
}

function getWeight(height, bmi) {
  var weight = ((height * height) / 10000) * bmi;
  return weight;
}
