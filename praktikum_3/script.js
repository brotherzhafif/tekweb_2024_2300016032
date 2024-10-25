  const taskList = document.getElementById("taskList");
  const newTaskInput = document.getElementById("newTask");
  const badan = document.getElementById("badan")

  var warna = document.getElementById("warna_badan")
  var fontsize = document.getElementById("fontsize")
  var huruf = document.getElementById("huruf")
  var theme = document.getElementById("theme")
  var container = document.getElementById("ctr")
  var font = document.getElementById("font")

  font.addEventListener("click", () => 
  {
      var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      var currentClass = huruf.className;
      var newClass = list[Math.floor(Math.random() * list.length)];
      
      // Replace the font class for all elements within the container
      document.querySelectorAll('#ctr *').forEach(el => {
          el.classList.replace(currentClass, newClass);
      });

      // Update the class for the current reference as well
      huruf.className = newClass;
      console.log(newClass);
  });


  theme.addEventListener("click", () => {
  if (theme.value === "Light") {
      theme.value = "Dark";
      container.style.color = "white";
      container.style.backgroundColor = "black";

      document.querySelectorAll('input[type="text"], .btninput, .akbartukam').forEach((el) => {
          el.style.backgroundColor = "#333";
          el.style.color = "white";
          el.style.borderColor = "#777";
      });

      document.querySelectorAll('.input_container, .task_container > li, .task_btn, input[type="checkbox"]').forEach((el) => {
          el.style.backgroundColor = "#444";
          el.style.color = "white";
          el.style.borderColor = "#777";
      });
  } else {
      theme.value = "Light";
      container.style.color = "black";
      container.style.backgroundColor = "white";

      document.querySelectorAll('input[type="text"], .btninput, .akbartukam').forEach((el) => {
          el.style.backgroundColor = "#eeeeee";
          el.style.color = "black";
          el.style.borderColor = "black";
      });

      document.querySelectorAll('.input_container, .task_container > li, .task_btn, input[type="checkbox"]').forEach((el) => {
          el.style.backgroundColor = "white";
          el.style.color = "black";
          el.style.borderColor = "black";
      });
  }
});

  fontsize.addEventListener("input", () => {
  const elements = document.querySelectorAll('#ctr *'); // Select all elements inside the container
  elements.forEach(el => {
      el.style.fontSize = fontsize.value + "px"; // Apply the font size to each element
      });
  });

  warna.addEventListener("input", () =>
  {
      badan.style.backgroundColor = warna.value
  })

  // Fungsi untuk mengambil data dari Local Storage
  function getTasks() 
  {
      const tasks = localStorage.getItem("tasks");
      return tasks ? JSON.parse(tasks) : [];
  }

  // Fungsi untuk menyimpan data ke Local Storage
  function saveTasks(tasks) 
  {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Fungsi untuk menambah tugas baru
  function addTask() 
  {
      const taskText = newTaskInput.value.trim();
      if (taskText === "") 
      {
          alert("Task tidak boleh kosong");
          return;
      }

      const tasks = getTasks();
      tasks.push(
          { 
              text: taskText, 
              completed: false 
          });
      saveTasks(tasks);
      newTaskInput.value = "";
      displayTasks();
  }

  // Fungsi untuk menampilkan tugas di halaman
  function displayTasks() {
    const tasks = getTasks();
    taskList.innerHTML = ""; // Clear the list before re-adding

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task_item";

        // Add HTML elements to the list item
        li.innerHTML = `
            <input id="huruf" type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTaskCompletion(${index})">
            <input id="huruf" type="text" value="${task.text}" disabled ondblclick="enableEditTask(this, ${index})">
            <div class="task_btn" onclick="enableEditTask(this, ${index})">✏️</div>
            <div class="task_btn" onclick="deleteTask(${index})">❌</div>
        `;

        // Strikethrough text if the task is completed
        if (task.completed) {
            li.querySelector('input[type="text"]').style.textDecoration = "line-through";
        }

        taskList.appendChild(li);
    });
}

  // Fungsi untuk menghapus tugas
  function deleteTask(index) 
  {
      const tasks = getTasks();
      tasks.splice(index, 1);
      saveTasks(tasks);
      displayTasks();
  }

  // Fungsi untuk mengubah status selesai/tidak selesai
  function toggleTaskCompletion(index) 
  {
      const tasks = getTasks();
      tasks[index].completed = !tasks[index].completed;
      saveTasks(tasks);
      displayTasks();
  }

  // Fungsi untuk mengaktifkan mode edit
  function enableEditTask(element, index) {
    const textInput = element.previousElementSibling;
    textInput.disabled = false;
    textInput.focus();

    // Add blur event listener to save the changes when editing is done
    textInput.addEventListener("blur", () => {
        editTask(textInput, index);
    });
}

  // Fungsi untuk menyimpan tugas yang diedit
  // Save the edited task when unfocused
function editTask(inputElement, index) {
  const tasks = getTasks();
  const newText = inputElement.value.trim();

  // Update the task text if it's not empty
  if (newText !== "") {
      tasks[index].text = newText;
      saveTasks(tasks);
      displayTasks();
  } else {
      // If empty, revert to the previous text and show an alert
      alert("Task tidak boleh kosong");
      inputElement.value = tasks[index].text;
  }
}
  // Panggil fungsi displayTasks saat halaman pertama kali dimuat
  displayTasks();