
// ================= TOAST SYSTEM =================
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}

// ================= PAGE LOAD =================
function showWelcome() {
    showToast("Welcome to Bakery Bliss 🎀");
}

// ================= LOGIN =================
function loginUser() {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        showToast("Please fill all fields");
        return;
    }

    showToast("Login successful ✨");
}

// ================= SIGNUP =================
function signupUser() {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        showToast("Please complete all fields");
        return;
    }

    showToast("Account created 🎀");
}

// ================= CONTACT =================
function submitForm() {

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    if (!name || !email || !message) {
        showToast("Please fill all fields");
        return;
    }

    showToast("Message sent 💌");
}

window.onload = function () {

  document.getElementById("insertBtn").onclick = function () {
    alert("Insert Stock Clicked");
  };

  document.getElementById("updateBtn").onclick = function () {
    alert("Update Stock Clicked");
  };

  document.getElementById("deleteBtn").onclick = function () {
    alert("Delete Stock Clicked");
  };

};