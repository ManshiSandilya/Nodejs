const API = "https://obscure-winner-v66rqvvgwjv7hw9q7-5000.app.github.dev/users";

async function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, age })
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";

    await getUser();
}

async function getUser() {
  const res = await fetch(API);
  const users = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = "";

  users.forEach((user) => {
    list.innerHTML += `
      <li class="bg-white shadow rounded-lg p-4 flex justify-between items-center border border-gray-200">
        <div>
          <p class="text-lg font-semibold text-gray-800">${user.name}</p>
          <p class="text-sm text-gray-500">📧 ${user.email}</p>
          <p class="text-sm text-gray-500">🎂 Age: ${user.age}</p>
        </div>
        <div class="flex space-x-2">
          <button onclick="updateUser(${user.id})"
            class="px-3 py-1 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition">
            ✏️ Update
          </button>
          <button onclick="deleteUser(${user.id})"
            class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            🗑️ Delete
          </button>
        </div>
      </li>
    `;
  });
}

async function updateUser(id) {
    const newAge = prompt("Enter new age");
    if (!newAge) return;

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ age: newAge })
    });

    await getUser();
}

async function deleteUser(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    await getUser();
}


getUser();
