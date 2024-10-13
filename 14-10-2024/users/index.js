const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Fetch user data using callbacks
// function fetchUsers(callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", apiUrl);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const users = JSON.parse(xhr.responseText);
//       callback(users);
//     } else {
//       console.error("Error fetching data:", xhr.statusText);
//     }
//   };
//   xhr.send();
// }

// Function to display users
function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    const userCard = `
            <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <h2 class="font-bold text-xl">${user.name}</h2>
                <p class="text-gray-700">Username: ${user.username}</p>
                <p class="text-gray-700">Email: ${user.email}</p>
            </div>
        `;
    userList.innerHTML += userCard;
  });
}

// Fetch and display users using callbacks
// fetchUsers(displayUsers);

// Fetch user data using promises
// function fetchUsersWithPromise() {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", apiUrl);
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         const users = JSON.parse(xhr.responseText);
//         resolve(users);
//       } else {
//         reject("Error fetching data:", xhr.statusText);
//       }
//     };
//     xhr.send();
//   });
// }

// Fetch and display users using promises
// fetchUsersWithPromise()
//   .then(displayUsers)
//   .catch((error) => console.error(error));

// Fetch user data using async/await
async function fetchUsersAsync() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fetch and display users using async/await
fetchUsersAsync();
