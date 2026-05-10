
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

  // ================= WELCOME TOAST (HOME PAGE ONLY) =================
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    showWelcome();
  }

  // ================= DASHBOARD BUTTONS =================
  var viewBtn = document.getElementById("viewBtn");
  var insertBtn = document.getElementById("insertBtn");
  var updateBtn = document.getElementById("updateBtn");
  var deleteBtn = document.getElementById("deleteBtn");

  if (viewBtn) viewBtn.onclick = function () {
    showToast("Loading stock list... 📋");
  };

  if (insertBtn) insertBtn.onclick = function () {
    showToast("Opening insert form... ✏️");
  };

  if (updateBtn) updateBtn.onclick = function () {
    showToast("Opening update form... 🔄");
  };

  if (deleteBtn) deleteBtn.onclick = function () {
    showToast("Select a product to delete... 🗑️");
  };

  // ================= FOOTER STOCK LINKS =================
  var footerViewBtn   = document.getElementById("footerViewBtn");
  var footerInsertBtn = document.getElementById("footerInsertBtn");
  var footerUpdateBtn = document.getElementById("footerUpdateBtn");
  var footerDeleteBtn = document.getElementById("footerDeleteBtn");

  if (footerViewBtn) footerViewBtn.onclick = function (e) {
    e.preventDefault();
    showToast("Loading stock list... 📋");
  };

  if (footerInsertBtn) footerInsertBtn.onclick = function (e) {
    e.preventDefault();
    showToast("Opening insert form... ✏️");
  };

  if (footerUpdateBtn) footerUpdateBtn.onclick = function (e) {
    e.preventDefault();
    showToast("Opening update form... 🔄");
  };

  if (footerDeleteBtn) footerDeleteBtn.onclick = function (e) {
    e.preventDefault();
    showToast("Select a product to delete... 🗑️");
  };

  // ================= TABLE ROW STATUS COLOURS =================
  var rows = document.querySelectorAll("tbody tr");
  rows.forEach(function (row) {
    var statusCell = row.cells[4];
    if (!statusCell) return;
    row.setAttribute("data-status", statusCell.textContent.trim());
  });

  // ================= STOCK BAR CHART =================
  var stockCanvas = document.getElementById("stockChart");
  if (stockCanvas) {
    new Chart(stockCanvas, {
      type: "bar",
      data: {
        labels: ["Cakes", "Cupcakes", "Pastries", "Breads", "Donuts", "Beverages"],
        datasets: [
          {
            label: "Current Stock Units",
            data: [43, 73, 44, 30, 40, 25],
            backgroundColor: ["#e8b4b8","#f7d9c4","#c97c7c","#f0c8a0","#e8b4b8","#d4a0a0"],
            borderColor: "#c97c7c",
            borderWidth: 1,
            borderRadius: 6
          },
          {
            label: "Restock Target",
            data: [60, 80, 60, 50, 55, 40],
            backgroundColor: "rgba(201,124,124,0.15)",
            borderColor: "#c97c7c",
            borderWidth: 1,
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: {
            display: true,
            text: "Stock Levels vs Restock Targets by Category",
            font: { size: 15, family: "Georgia, serif" },
            color: "#3a2d2d"
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Units", color: "#5a4a4a" },
            ticks: { color: "#5a4a4a" }
          },
          x: { ticks: { color: "#5a4a4a" } }
        }
      }
    });
  }

  // ================= WEEKLY SALES LINE CHART =================
  var salesCanvas = document.getElementById("salesChart");
  if (salesCanvas) {
    new Chart(salesCanvas, {
      type: "line",
      data: {
        labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [
          {
            label: "Daily Revenue (Rs.)",
            data: [32000, 28000, 35000, 41000, 45000, 62000, 58000],
            fill: true,
            backgroundColor: "rgba(232,180,184,0.25)",
            borderColor: "#c97c7c",
            pointBackgroundColor: "#c97c7c",
            pointRadius: 5,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: {
            display: true,
            text: "Weekly Sales Revenue — Bakery Bliss",
            font: { size: 15, family: "Georgia, serif" },
            color: "#3a2d2d"
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: { display: true, text: "Revenue (Rs.)", color: "#5a4a4a" },
            ticks: {
              color: "#5a4a4a",
              callback: function (value) { return "Rs. " + value.toLocaleString(); }
            }
          },
          x: { ticks: { color: "#5a4a4a" } }
        }
      }
    });
  }

};