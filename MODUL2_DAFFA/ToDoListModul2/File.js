const todoInput = document.getElementById('todo-input'); //element
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan tugas baru
addBtn.addEventListener('click', function() {
    if (todoInput.value.trim() !== '') {
        addTodoItem(todoInput.value);
        todoInput.value = ''; // Kosongkan input setelah menambahkan
    }
});

function addTodoItem(task) {
    const li = document.createElement('li');
    
    // Struktur HTML untuk item list
    li.innerHTML = `
        <span class="task-text">${task}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    
    todoList.appendChild(li);

    // Fungsi delete item
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Fungsi edit item
    li.querySelector('.edit-btn').addEventListener('click', function() {
        editTodoItem(li);
    });
}

// Fungsi untuk mengedit item
function editTodoItem(li) {
    const taskText = li.querySelector('.task-text');
    const newTask = prompt('Edit your task:', taskText.textContent); // Input baru menggunakan prompt
    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask; // Ubah teks task dengan input baru
    }
}
