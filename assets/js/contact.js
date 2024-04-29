const url = "http://localhost:9999/contacts/add-new/";
const firstName = document.querySelector("#conName");
const lastName = document.querySelector("#conLName");
const email = document.querySelector("#conEmail");
const phoneNumber = document.querySelector("#conPhone");
const message = document.querySelector("#conMessage");
const messageResendInterval = 30000;
let messageSent = false;
let resendMessageInterval;

const resendMessage = () => {
  sendMessage();
  if (messageSent) {
    clearInterval(resendMessageInterval);
  }
};

// Create new contact
const sendMessage = async () => {
  try {
    clearInterval(resendMessageInterval);
    // Show loading alert
    Swal.fire({
      title: "Sending message!",
      text: "Please wait.",
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        message: message.textContent,
      }),
    });

    if (!result.ok) {
      messageSent = false;
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Message send failed!",
        html: `Please check connection and retry. <br>Resending in: <small><b></b><b>s</b></small>`,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: messageResendInterval,
        showCancelButton: true,
        didOpen: () => {
          const timer = Swal.getPopup().querySelector("b");
          timer.textContent = `${parseInt(Swal.getTimerLeft() / 1000)}`;
          timerInterval = setInterval(() => {
            timer.textContent = `${parseInt(Swal.getTimerLeft() / 1000)}`;
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      resendMessageInterval = setInterval(resendMessage, messageResendInterval);
      throw new Error("Failed to submit form");
    }

    messageSent = true;
    Swal.fire({
      icon: "success",
      title: "Message send success!",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    messageSent = false;

    Swal.close();
    Swal.fire({
      icon: "error",
      title: "Message send failed!",
      html: `Please check connection and retry. <br>Resending in: <small><b></b><b>s</b></small>`,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: messageResendInterval,
      showCancelButton: true,
      didOpen: () => {
        const timer = Swal.getPopup().querySelector("b");
        timer.textContent = `${parseInt(Swal.getTimerLeft() / 1000)}`;
        timerInterval = setInterval(() => {
          timer.textContent = `${parseInt(Swal.getTimerLeft() / 1000)}`;
        }, 1000);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    resendMessageInterval = setInterval(resendMessage, messageResendInterval);
    console.log(error);
  }
};

document.querySelector("#contact-form").addEventListener("submit", sendMessage);

// Store form input value in localStorage
firstName.addEventListener("input", (e) =>
  storeInputValue("firstName", e.target.value)
);
lastName.addEventListener("input", (e) =>
  storeInputValue("lastName", e.target.value)
);
email.addEventListener("input", (e) =>
  storeInputValue("email", e.target.value)
);
phoneNumber.addEventListener("input", (e) =>
  storeInputValue("phoneNumber", e.target.value)
);
message.addEventListener("input", (e) =>
  storeInputValue("message", e.target.value)
);

const storeInputValue = (InputName, InputValue) => {
  localStorage.setItem(InputName, InputValue);
};

// Restore input value from localStorage
(() => {
  firstName.value = localStorage.getItem("firstName");
  lastName.value = localStorage.getItem("lastName");
  email.value = localStorage.getItem("email");
  phoneNumber.value = localStorage.getItem("phoneNumber");
  message.value = localStorage.getItem("message");
})();
