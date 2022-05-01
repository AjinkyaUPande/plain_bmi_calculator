//Add Event listeners -> for btn

//calculate event listner
document.querySelector(".calculate").addEventListener("click", function () {
  //hide output
  //document.getElementById("Output").style.display = "none";
  //show loader
  document.querySelector(".loader").style.display = "block";
  setTimeout(BMI, 500);
});

//clear Event Listener
document.querySelector(".clear").addEventListener("click", Clear);

//functions -> [BMI calculation + Clear]
function BMI() {
  const height = document.getElementById("Height").value;
  const weight = document.getElementById("Weight").value;
  //console.log("bmi is " + index)

  //formula -> BMI

  let index = (weight / (((height / 100) * height) / 100)).toFixed(0);

  //condition to cheak height and weight != 0

  if (height && weight != 0) {
    const output = document.getElementById("Output");
    const state = document.getElementById("State");

    output.innerHTML = "Your BMI is " + index;

    if (index < 15) {
      state.innerHTML = "<span style= 'color:red';> severealy underweight";
    } else if (index > 20) {
      state.innerHTML = "<span style= 'color: green';> Normal bro";
    } else if (index > 25) {
      state.innerHTML = "<span style= 'color:red';> Overweight";
    }

    //hide loader & show op

    document.getElementById("Output").style.diaplay = "block";
    document.querySelector(".loader").style.display = "none";
  } else {
    //err msg
    //alert("Error! Please enter valid field");
    Error();
    function Error() {
      document.getElementById("Output").style.display = "block";
      document.querySelector(".loader").style.display = "none";
      document.getElementById("Output").innerHTML =
        "Enter height and weight first";
      //set time out
      setTimeout(() => {
        document.getElementById("Output").innerHTML = "";
        document.querySelector(".state").innerHTML = "";
      }, 5000);
    }
  }
}

//clear function

function Clear() {
  document.getElementById("Height").value = "";
  document.getElementById("Weight").value = "";
  document.getElementById("Output").innerHTML = "";
  document.getElementById("State").innerHTML = "";
}
