
const malariaBtn = document.getElementById("malaria_btn")
const diabetesBtn = document.getElementById("diabetes_btn")
const chooseAction = document.getElementsByClassName("choose_action")
const malariaSection = document.getElementById("sending_malaria")
const diabetesSection = document.getElementById("sending_diabetes")

const malariaForm = document.getElementById("malaria_form")
const diabetesForm = document.getElementById("diabetes_form")

const diabetesInfo = {
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0,
    DiabetesPedigreeFunction: 0,
    Age: 0
}

malariaBtn.addEventListener("click", () => {
    if (malariaSection.style.display === "none") {
        malariaSection.style.display = "block";
        diabetesSection.style.display = "none";
    } else {
        diabetesSection.style.display = "block";
        malariaSection.style.display = "none";
    }
})

diabetesBtn.addEventListener("click", () => {
    if (diabetesSection.style.display === "none") {
        diabetesSection.style.display = "block";
        malariaSection.style.display = "none";
    } else {
        malariaSection.style.display = "block";
        diabetesSection.style.display = "none";
    }
})


malariaForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // sendingMalariaReport()

    const age = parseFloat(document.getElementById("age").value);
    const bodyTemperature = parseFloat(document.getElementById("body_temperature").value);
    const hemoglobin = parseFloat(document.getElementById("hemoglobin").value);
    const rbcCount = parseFloat(document.getElementById("rbc_count").value);
    const plateletCount = parseFloat(document.getElementById("platelet_count").value);

    // Retrieve checkbox values (true/false)
    const hasFever = document.getElementById("has_fever").checked;
    const hasChills = document.getElementById("has_chills").checked;
    const hasVomitting = document.getElementById("has_vomitting").checked;
    const rainySeason = document.getElementById("rainy_season").checked;

    const reportData = {
      age,
      bodyTemperature,
      hemoglobin,
      rbcCount,
      plateletCount,
      hasFever,
      hasChills,
      hasVomitting,
      rainySeason,
    };

    console.log(reportData);

    // Send the report data to the server
    fetch("https://health-result-project.onrender.com/malpredict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    //   body: reportData,
      body: JSON.stringify(reportData),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the server response
        console.log(data);
    })
    .catch( err => {
        console.log(err)
    })
})

diabetesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const pregnancies = document.getElementById("pregnancies").value;
    const glucose = document.getElementById("glucose").value;
    const bloodPressure = document.getElementById("bloodPressure").value;
    const skinThickness = document.getElementById("skinThickness").value;
    const insulin = document.getElementById("insulin").value;
    const bmi = document.getElementById("bmi").value;
    const diabetesPedigreeFunction = document.getElementById("diabetesPedigreeFunction").value;
    const age = document.getElementById("age").value;

    const reportData = {
        pregnancies,
        glucose,
        bloodPressure,
        skinThickness,
        insulin,
        bmi,
        diabetesPedigreeFunction,
        age,
    };

    // Send the report data to the server
    fetch("https://health-result-project.onrender.com/diapredict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    //   body: reportData,
      body: JSON.stringify(reportData),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the server response
        console.log(data);
    })
    .catch( err => {
        console.log(err)
    })
})
    