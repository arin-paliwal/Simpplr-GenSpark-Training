interface Transaction {
  type: "deposit" | "withdrawal" | "transfer" | "loan";
  number: number;
  amount: number;
  recipient?: string;
  date?: string;
  time?: string;
}

interface User {
  name: string;
  password: string;
  username?: string;
}

var users: User[] = [
  {
    name: "Arin Paliwal",
    password: "12",
  },
  {
    name: "Swapnil Gupta",
    password: "12",
  },
];

const addUsername = (users: User[]): User[] => {
  return users.map((user) => {
    const name = user.name.split(" ");
    const username = (name[0][0] + name[1][0]).toLowerCase();
    return { ...user, username };
  });
};

let transactions: Transaction[] = [
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
let currentUser: User | null = null;
let balance = 10000;
let sorted = false;

const updateDisplayDate = () => {
  const today = new Date().toLocaleDateString();
  document.getElementById("current-date")!.textContent = `As of ${today}`;
};

const updateTransactionsDisplay = () => {
  const container = document.getElementById("transactions-container")!;
  container.innerHTML = `
    <div class="transaction-list bg-white shadow-md rounded-lg overflow-hidden">
      <div class="transaction-header bg-gray-200 font-bold flex">
        <div class="flex-1 py-2 px-4">Type</div>
        <div class="flex-1 py-2 px-4">To</div>
        <div class="flex-1 py-2 px-4">Amount</div>
        <div class="flex-1 py-2 px-4">Date & Time</div>
      </div>
      ${transactions
        .map(
          (t) => `
          <div class="transaction-item flex border-b border-gray-200">
            <div class="flex-1 py-2 px-4">
              <span class="${
                t.type === "deposit"
                  ? "text-green-600"
                  : t.type === "withdrawal"
                  ? "text-red-600"
                  : t.type === "transfer"
                  ? "text-blue-600"
                  : "text-orange-600"
              }">
                ${t.type}
              </span>
            </div>
            <div class="flex-1 py-2 px-4">${t.recipient || "N/A"}</div>
            <div class="flex-1 py-2 px-4">${t.amount}₹</div>
            <div class="flex-1 py-2 px-4 text-gray-500">${t.time} ${
            t.date
          }</div>
          </div>`
        )
        .join("")}
    </div>
  `;
  document.getElementById("current-balance")!.textContent = `${balance}₹`;
};
updateTransactionsDisplay();

const calculateTotals = () => {
  const totalIn = transactions
    .filter((t) => t.type === "deposit")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalOut = transactions
    .filter(
      (t) =>
        t.type === "withdrawal" || t.type === "loan" || t.type === "transfer"
    )
    .reduce((sum, t) => sum + t.amount, 0);
  const interest = (balance * 0.015).toFixed(2);
  document.getElementById("total-in")!.textContent = `${totalIn}₹`;
  document.getElementById("total-out")!.textContent = `${totalOut}₹`;
  document.getElementById("total-interest")!.textContent = `${interest}₹`;
};
calculateTotals();
const addTransaction = (
  type: "deposit" | "withdrawal" | "transfer" | "loan",
  amount: number,
  recipient?: string
) => {
  if(currentUser==null) {
    alert("Please login first");
    return;
  }
  const newTransaction: Transaction = {
    type,
    number: transactions.length + 1,
    amount,
    recipient,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };
  transactions.push(newTransaction);
  console.log("typee", type);	
  if(type=="deposit") {
    console.log("Inside if");
    balance += amount;
  }
  else{
    console.log("Inside else");
    balance -= amount;
  }
  console.log("type", type);
  updateTransactionsDisplay();
  calculateTotals();
};

const showMainContent = () => {
  document.getElementById("login-container")!.style.display = "none";
  document.getElementById("main-content")!.style.display = "block";
  updateTransactionsDisplay();
  updateDisplayDate();
  calculateTotals();
};

document.getElementById("sort-button")!.addEventListener("click", () => {
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


document.getElementById("transfer-button")!.addEventListener("click", () => {
  const amount = parseFloat(
    (document.getElementById("transfer-amount") as HTMLInputElement).value
  );
  const recipient = (
    document.getElementById("transfer-recipient") as HTMLInputElement
  ).value;
  if (amount && recipient) {
    addTransaction("withdrawal", amount, recipient);
    calculateTotals();
  }
});

document.getElementById("loan-button")!.addEventListener("click", () => {
  const amount = parseFloat(
    (document.getElementById("loan-amount") as HTMLInputElement).value
  );
  if (amount) {
    addTransaction("loan", amount, currentUser?.name);
  }
});

document.getElementById("credit-button")!.addEventListener("click", () => {
  const amount = parseFloat(
    (document.getElementById("credit-amount") as HTMLInputElement).value
  );
  if (amount) {
    addTransaction("deposit", amount, currentUser?.name);
    // alert(`Credited ${amount}₹ to your account`);
  }
});

document.getElementById("login-button")!.addEventListener("click", () => {
  users = addUsername(users);
  const username = (
    document.getElementById("login-username") as HTMLInputElement
  ).value;
  const password = (
    document.getElementById("login-password") as HTMLInputElement
  ).value;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    currentUser = user;
    document.getElementById("user-name")!.textContent = user.name;
    showMainContent();
  } else {
    alert("Invalid username or password.");
  }
});

document
  .getElementById("close-account-button")!
  .addEventListener("click", () => {
    const username = (document.getElementById("close-user") as HTMLInputElement)
      .value;
    const pin = (document.getElementById("close-pin") as HTMLInputElement)
      .value;
    const user_obj = users.find(
      (u) => u.username === username && u.password === pin
    );
    if (user_obj) {
      users = users.filter((u) => u.username !== username);
      alert(`${user_obj.name} Account closed successfully.`);
    }
    currentUser = null;
    console.log(users);
  });

if (currentUser) {
  showMainContent();
} else {
  document.getElementById("main-content")!.style.display = "none";
  document.getElementById("login-container")!.style.display = "block";
}
