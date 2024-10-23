const getRandomTime = () => Math.floor(Math.random() * 5000) + 1000;

var orders = [
  { orderId: 1, items: ["Burger", "Fries"], timeToPrepare: getRandomTime() },
  { orderId: 2, items: ["Pizza"], timeToPrepare: getRandomTime() },
  {
    orderId: 3,
    items: ["Pasta", "Garlic Bread"],
    timeToPrepare: getRandomTime(),
  },
];

function* processOrders(orders) {
  for (let order of orders) {
    logMessage(
      `Starting preparation for Order ID: ${
        order.orderId
      }, Items: ${order.items.join(", ")}`
    );
    yield new Promise((resolve) => {
      setTimeout(() => {
        logMessage(
          `Order ID: ${order.orderId} completed after ${
            order.timeToPrepare / 1000
          } seconds`
        );
        resolve();
      }, order.timeToPrepare);
    });
  }
}

function displayOrders() {
  const ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = ""; 
  orders.forEach((order) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Order ID: ${
      order.orderId
    }, Items: ${order.items.join(", ")}`;
    ordersList.appendChild(listItem);
  });
}

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const orderId = document.getElementById("orderId").value;
    const items = document
      .getElementById("items")
      .value.split(",")
      .map((item) => item.trim());

    const newOrder = {
      orderId: parseInt(orderId),
      items: items,
      timeToPrepare: getRandomTime(),
    };

    orders.push(newOrder);
    logMessage(`Order ID: ${orderId} added to the queue.`);
    displayOrders();
    document.getElementById("orderForm").reset();
  });

async function runOrderProcessing() {
  if (orders.length === 0) {
    logMessage("No orders to process.");
    return;
  }

  const startButton = document.getElementById("startProcessing");
  startButton.disabled = true;
  startButton.classList.add("opacity-50", "cursor-not-allowed");


  const orderGenerator = processOrders(orders);
  for (let nextOrder of orderGenerator) {
    await nextOrder;
  }


  
  logMessage("All orders processed!");
  startButton.disabled = false;
  startButton.classList.remove("opacity-50", "cursor-not-allowed");
}

document
  .getElementById("startProcessing")
  .addEventListener("click", runOrderProcessing);

function logMessage(message) {
  const logDiv = document.getElementById("log");
  const logEntry = document.createElement("div");
  logEntry.textContent = message;
  logEntry.className = "bg-gray-100 p-2 rounded border border-gray-200";
  logDiv.appendChild(logEntry);
}

displayOrders();
