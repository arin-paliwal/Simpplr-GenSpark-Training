"use strict";
var users = JSON.parse(localStorage.getItem("accounts") || "[]");
const addUsername = (users) => {
    return users.map((user) => {
        const name = user.name.split(" ");
        const username = (name[0][0] + name[1][0]).toLowerCase();
        return Object.assign(Object.assign({}, user), { username });
    });
};
let transactions = [
    {
        type: "deposit",
        number: 1,
        amount: 5000,
        date: "01-11-2024",
        time: "12:00:00",
    },
    {
        type: "withdrawal",
        number: 2,
        amount: 2000,
        date: "01-11-2024",
        time: "12:00:00",
    },
    {
        type: "transfer",
        number: 3,
        amount: 1000,
        recipient: "SG",
        date: "01-11-2024",
        time: "12:00:00",
    },
    {
        type: "loan",
        number: 4,
        amount: 500,
        date: "01-11-2024",
        time: "12:00:00",
    },
];
var currentUser = null;
let balance = 10000;
let sorted = false;
let logoutTimer = undefined;
const TIMEOUT_DURATION = 1 * 60 * 1000;
const startLogoutTimer = () => {
    let remainingTime = TIMEOUT_DURATION / 1000;
    if (logoutTimer)
        clearInterval(logoutTimer);
    logoutTimer = window.setInterval(() => {
        remainingTime--;
        document.getElementById("timer").textContent = `Session ends in: ${remainingTime}s`;
        if (remainingTime <= 0) {
            clearInterval(logoutTimer);
            currentUser = null;
            document.getElementById("timer").textContent = "";
            document.getElementById("timer").style.display = "none";
            console.log("Session ended. User has been logged out.");
            window.location.href =
                "/November%20'24/05-11-2024/bankist/src/index.html";
        }
    }, 1000);
};
const updateDisplayDate = () => {
    const today = new Date().toLocaleDateString();
    document.getElementById("current-date").textContent = `As of ${today}`;
};
const updateTransactionsDisplay = () => {
    const container = document.getElementById("transactions-container");
    container.innerHTML = `
    <div class="transaction-list bg-white shadow-md rounded-lg overflow-hidden">
      <div class="transaction-header bg-gray-200 font-bold flex">
        <div class="flex-1 py-2 px-4">Type</div>
        <div class="flex-1 py-2 px-4">To</div>
        <div class="flex-1 py-2 px-4">Amount</div>
        <div class="flex-1 py-2 px-4">Date & Time</div>
      </div>
      ${transactions
        .map((t) => `
          <div class="transaction-item flex border-b border-gray-200">
            <div class="flex-1 py-2 px-4">
              <span class="${t.type === "deposit"
        ? "text-green-600"
        : t.type === "withdrawal"
            ? "text-red-600"
            : t.type === "transfer"
                ? "text-blue-600"
                : "text-orange-600"}">
                ${t.type}
              </span>
            </div>
            <div class="flex-1 py-2 px-4">${t.recipient || "N/A"}</div>
            <div class="flex-1 py-2 px-4">${t.amount}₹</div>
            <div class="flex-1 py-2 px-4 text-gray-500">${t.time} ${t.date}</div>
          </div>`)
        .join("")}
    </div>
  `;
    document.getElementById("current-balance").textContent = `${balance}₹`;
};
updateTransactionsDisplay();
updateDisplayDate();
const calculateTotals = () => {
    const totalIn = transactions
        .filter((t) => t.type === "deposit")
        .reduce((sum, t) => sum + t.amount, 0);
    const totalOut = transactions
        .filter((t) => t.type === "withdrawal" || t.type === "loan" || t.type === "transfer")
        .reduce((sum, t) => sum + t.amount, 0);
    const interest = (balance * 0.015).toFixed(2);
    document.getElementById("total-in").textContent = `${totalIn}₹`;
    document.getElementById("total-out").textContent = `${totalOut}₹`;
    document.getElementById("total-interest").textContent = `${interest}₹`;
};
calculateTotals();
const addTransaction = (type, amount, recipient) => {
    if (currentUser == null) {
        alert("Please login first");
        return;
    }
    startLogoutTimer();
    const newTransaction = {
        type,
        number: transactions.length + 1,
        amount,
        recipient,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    };
    transactions.push(newTransaction);
    console.log("typee", type);
    if (type == "deposit") {
        console.log("Inside if");
        balance += amount;
    }
    else {
        console.log("Inside else");
        balance -= amount;
    }
    console.log("type", type);
    updateTransactionsDisplay();
    calculateTotals();
};
const showMainContent = () => {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    updateTransactionsDisplay();
    updateDisplayDate();
    calculateTotals();
};
document.getElementById("sort-button").addEventListener("click", () => {
    console.log(transactions);
    sorted = !sorted;
    for (let i = 0; i < transactions.length - 1; i++) {
        for (let j = 0; j < transactions.length - 1 - i; j++) {
            const condition = sorted
                ? transactions[j].amount < transactions[j + 1].amount
                : transactions[j].amount > transactions[j + 1].amount;
            if (condition) {
                [transactions[j], transactions[j + 1]] = [
                    transactions[j + 1],
                    transactions[j],
                ];
            }
        }
    }
    updateTransactionsDisplay();
});
document.getElementById("transfer-button").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("transfer-amount").value);
    const recipient = document.getElementById("transfer-recipient").value;
    if (amount && recipient) {
        addTransaction("withdrawal", amount, recipient);
        calculateTotals();
    }
});
document.getElementById("loan-button").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("loan-amount").value);
    if (amount) {
        addTransaction("loan", amount, currentUser === null || currentUser === void 0 ? void 0 : currentUser.name);
    }
});
document.getElementById("credit-button").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("credit-amount").value);
    if (amount) {
        addTransaction("deposit", amount, currentUser === null || currentUser === void 0 ? void 0 : currentUser.name);
        // alert(`Credited ${amount}₹ to your account`);
    }
});
document.getElementById("login-button").addEventListener("click", () => {
    users = addUsername(users);
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        startLogoutTimer();
        alert("Login successful");
        currentUser = user;
        document.getElementById("user-name").textContent = user.name;
        showMainContent();
    }
    else {
        alert("Invalid username or password.");
    }
});
document
    .getElementById("close-account-button")
    .addEventListener("click", () => {
    const username = document.getElementById("close-user")
        .value;
    const pin = document.getElementById("close-pin")
        .value;
    const user_obj = users.find((u) => u.username === username && u.password === pin);
    if (user_obj) {
        users = users.filter((u) => u.username !== username);
        alert(`${user_obj.name} Account closed successfully.`);
    }
    currentUser = null;
    console.log(users);
});
if (currentUser) {
    showMainContent();
}
else {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}
// timer data
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("timer_data")[0].innerHTML =
        "Time: " + new Date().toLocaleTimeString();
});
document.getElementById("logout_btn").addEventListener("click", () => {
    console.log("Logout");
});
