let ul = document.querySelector('ul');
let txtInpt = document.querySelector('#txtInpt');

let tasks = [];

let txt = '';

txtInpt.addEventListener('change', (e) => {
  txt = e.target.value;
  txtInpt.value = '';
});

btnAdd.addEventListener('click', () => {
  tasks.push(txt);
  handleClickAdd();
  render();
});

render = () => {
  console.log('Произошел ререндер, я ничего не смог придумать');
};

handleClickAdd = () => {
  let li = document.createElement('li');
  let button = document.createElement('button');
  button.innerHTML = 'x';
  li.key = tasks.length - 1;
  li.innerHTML = tasks[tasks.length - 1];
  button.addEventListener('click', () => {
    handleClickRemove(li.key);
    ul.removeChild(li);
    render();
  });
  li.appendChild(button);
  ul.appendChild(li);
};

handleClickRemove = (index) => {
  tasks.splice(index);
};
