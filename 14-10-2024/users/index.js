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
    const avatarUrl = `https://avatar.iran.liara.run/public/${user.id}.svg`; // Generate avatar URL
    const userCard = `
            <div class="cursor-pointer border-2 border-white hover:border-black bg-white p-6 rounded-lg shadow-md transform duration-300">
                <div class="flex items-center">
                    <img class="w-16 h-16 rounded-full mr-4" src="${avatarUrl}" alt="Avatar of ${user.name}">
                    <div>
                        <h2 class="font-bold text-xl">${user.name}</h2>
                        <p class="text-gray-600">${user.company.name}</p>
                    </div>
                </div>
                <div class="mt-4">
                    <p><span class="font-semibold">Username:</span> ${user.username}</p>
                    <p><span class="font-semibold">Email:</span> ${user.email}</p>
                    <p><span class="font-semibold">Phone:</span> ${user.phone}</p>
                    <p><span class="font-semibold">Website:</span> <a href="http://${user.website}" class="text-blue-500" target="_blank">${user.website}</a></p>
                    <p><span class="font-semibold">Location:</span> ${user.address.city}, ${user.address.street}</p>
                </div>
            </div>
        `;
    userList.innerHTML += userCard;
  });
}

// Fetch and display users using callbacks
// fetchUsers(displayUsers);

// Fetch user data using promises
function fetchUsersWithPromise() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        resolve(users);
      } else {
        reject("Error fetching data:", xhr.statusText);
      }
    };
    xhr.send();
  });
}

// Fetch and display users using promises
fetchUsersWithPromise()
  .then(displayUsers)
  .catch((error) => console.error(error));

// Fetch user data using async/await
// async function fetchUsersAsync() {
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const users = await response.json();
//     displayUsers(users);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// Fetch and display users using async/await
// fetchUsersAsync();
