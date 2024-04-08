window.onload = () => {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    confirmation()
  });
};

function confirmation() {

  // getting values
  const id = document.getElementById("id").value;
  const fullName = document.getElementById("fullName").value;
  const address = document.getElementById("address").value;
  const status = document.getElementById("status").value;

  const formData = new FormData();
  formData.append("id", id);
  formData.append("fullName", fullName);
  formData.append("address", address);
  formData.append("status", status);

  const data = new URLSearchParams(formData).toString();

  // Send POST request
  fetch("http://localhost:3000/fee", {
    method: "POST",
    body: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error sending POST request:", error);
    });
}
