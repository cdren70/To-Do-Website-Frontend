        document.addEventListener('DOMContentLoaded', () => {
            const listsContainer = document.getElementById('lists-container');
            const addListButton = document.getElementById('add-list-btn');
            const addTaskButton = document.getElementById('add-task-btn');
            const listSelector = document.getElementById('list-selector');

            const taskForm = {
                title: document.getElementById('task-title'),
                description: document.getElementById('task-description'),
                dueDate: document.getElementById('task-due-date'),
                priority: document.getElementById('task-priority')
            };

            const lists = {};

            // Add New List
            addListButton.addEventListener('click', () => {
                const listName = prompt('Enter the name of the new list:');

                if (!listName || lists[listName]) {
                    alert('List name is invalid or already exists!');
                    return;
                }

                // Create list in object
                lists[listName] = [];

                // Add list to UI
                const listItem = document.createElement('li');
                listItem.classList.add('list-item');
                listItem.innerHTML = `<strong>${listName}</strong><ul></ul>`;
                listsContainer.appendChild(listItem);

                const tasksUl = listItem.querySelector('ul');
                const listTitle = listItem.querySelector('strong');

                // Toggle Dropdown
                listTitle.addEventListener('click', () => {
                    tasksUl.classList.toggle('active');
                });

                // Add list to selector
                const option = document.createElement('option');
                option.value = listName;
                option.textContent = listName;
                listSelector.appendChild(option);
            });

            // Add Task
            addTaskButton.addEventListener('click', () => {
                const selectedList = listSelector.value;
                if (!selectedList) {
                    alert('Please select a list to add the task to!');
                    return;
                }

                const title = taskForm.title.value.trim();
                const description = taskForm.description.value.trim();
                const dueDate = taskForm.dueDate.value;
                const priority = taskForm.priority.value;

                if (!title) {
                    alert('Task title is required!');
                    return;
                }

                const task = {
                    title,
                    description,
                    dueDate,
                    priority,
                    completed: false
                };

                lists[selectedList].push(task);

                // Update List UI
                updateListUI(selectedList);

                // Clear Form
                taskForm.title.value = '';
                taskForm.description.value = '';
                taskForm.dueDate.value = '';
                taskForm.priority.value = 'Medium';
            });

            function updateListUI(listName) {
                const listElement = Array.from(listsContainer.children).find(
                    (item) => item.firstChild.textContent === listName
                );

                const tasksUl = listElement.querySelector('ul');
                tasksUl.innerHTML = '';

                lists[listName].forEach((task, index) => {
                    const taskItem = document.createElement('li');
                    taskItem.className = task.completed ? 'completed' : '';
                    taskItem.innerHTML = `
                        <strong>${task.title}</strong><br>
                        ${task.description}<br>
                        Due: ${task.dueDate || 'No deadline'}<br>
                        Priority: ${task.priority}<br>
                        <button class="complete-task">Complete</button>
                        <button class="delete-task">Delete</button>
                    `;

                    // Complete Task
                    taskItem.querySelector('.complete-task').addEventListener('click', () => {
                        task.completed = !task.completed;
                        updateListUI(listName);
                    });

                    // Delete Task
                    taskItem.querySelector('.delete-task').addEventListener('click', () => {
                        lists[listName].splice(index, 1);
                        updateListUI(listName);
                    });

                    tasksUl.appendChild(taskItem);
                });
            }
        });