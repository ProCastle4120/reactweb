document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(input.value);
      input.value = '';
  });

  function addTask(task) {
      const li = document.createElement('li');
      li.textContent = task;

      const button = document.createElement('button');
      button.textContent = 'Delete';
      button.addEventListener('click', () => {
          list.removeChild(li);
      });

      li.appendChild(button);
      list.appendChild(li);
  }
});
