// This declaration and function opens and closes the preview page
let popup = document.getElementById("popup");
let pop = document.getElementById("pop");

function openPopup() {
  popup.classList.add("open-popup");
  pop.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
  pop.classList.remove("open-popup");
}

// this function displays the information entered on the form
let submission = document.getElementById("submit");
submission.addEventListener("click", (e) => {
  e.preventDefault();
  openPopup();
  displayStudent();
});

// this prints the user information on the preview page
const displayStudent = () => {
  // declaring the input
  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let lastName = document.getElementById("lastName").value;
  let dob = document.getElementById("dob").value;
  let sid = document.getElementById("sid").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let province = document.getElementById("province").value;
  let country = document.getElementById("country").value;
  let zip = document.getElementById("zip").value;
  let email = document.getElementById("email").value;
  let comments = document.getElementById("comments").value;
  popup.innerHTML = `
    <div>
    <h1>Student Registration Form</h1>
    
              <div class="info">
                <h2>Student Information</h2>
                <p>First Name: ${firstName}</p>
                <p>Middle Name: ${middleName}</p>
                <p>Last Name: ${lastName}</p>
                <p>Date Of Birth: ${dob}</p>
                <p>Student ID: ${sid}</p>
    
                <h2>Address</h2>
                <p>Street Address: ${ address}</p>
                <p>City: ${city}</p>
                <p>State: ${province}</p>
                <p>Country: ${country}</p>
                <p>ZIP Code: ${zip}</p>
    
                <h2>Contact Information</h2>
                <p>E-mail: ${email}</p>
    
                <h2>Courses</h2>
                <select value="courses">
                    <option name="courses" id="empty"></option>
                    <option name="courses" id="fe">FrontEnd Development</option>
                    <option name="courses" id="ui">UI/UX</option>
                </select>
                <p>Comment: ${comments}</p>
                <button type="button" onclick="closePopup()">OK</button>
    </div>
    `;
};
