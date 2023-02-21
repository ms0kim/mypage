//mode
let light = document.querySelector('.light');
let dark = document.querySelector('.dark');
let body = document.querySelector('body');


light.addEventListener('click', function(){
  light.style.cssText = 'display:none;'
  dark.style.cssText = 'display:block;'
  body.style.cssText = 'color:#867066; background:#fff;'
  document.getElementById('color1').setAttribute('stop-color', '#ffeada');
  document.getElementById('color2').setAttribute('stop-color', '#fdeac300');
  document.getElementById('color3').setAttribute('stop-color', '#ffd5a4');
  document.getElementById('color4').setAttribute('stop-color', '#f4cbba00');
  document.getElementById('color5').setAttribute('stop-color', '#ffb5a4');
  document.getElementById('color6').setAttribute('stop-color', '#ffb5a400');
  document.querySelector('main').style.cssText = 'background:#ffffff48;'
  document.querySelector('.top').style.cssText = 'border-bottom: 1px solid #ffffff7c;'
  document.querySelector('.topLeft li:nth-child(1)').style.cssText = 'background: #ffb5a4;'
  document.querySelector('.topLeft li:nth-child(2)').style.cssText = 'background: #ffd5a4;'
  document.querySelector('.topLeft li:nth-child(3)').style.cssText = 'background: #ffeada;'
  document.querySelector('.search').style.cssText = 'background: #ffffff7c;'
  document.querySelector('.search').classList.remove('dark')
  document.querySelector('.searchView').classList.remove('dark')
  document.querySelector('.searchList').classList.remove('dark')
  document.querySelector('.top input').style.cssText = 'color: #867066;'
  document.querySelector('.rightPage').style.cssText = 'background: #ffffff7c;'
  document.querySelector('.id').classList.remove('dark')
  document.querySelector('.pw').classList.remove('dark')
  document.querySelector('#login button').classList.remove('dark')
  document.querySelector('.todoText').style.cssText = 'background: #ffb5a4;'
  document.querySelector('.todotxt').classList.remove('dark')
  document.querySelector('#submit').style.cssText = 'color: #867066;'
  document.querySelector('.memoText').style.cssText = 'background: #ffd5a4;'
  document.querySelector('.memoText textarea').style.cssText = 'color: #867066;'
  document.querySelector('.memoIn').classList.remove('dark')
  document.querySelector('.paintText').style.cssText = 'background: #ffeada;'
  document.querySelector('.paintTxt').classList.remove('dark')
  document.querySelector('.clear').classList.remove('dark')
});

dark.addEventListener('click', function(){
  dark.style.cssText = 'display:none;'
  light.style.cssText = 'display:block;'
  body.style.cssText = 'color:#fff; background:#04182d;'
  document.getElementById('color1').setAttribute('stop-color', '#004e9a');
  document.getElementById('color2').setAttribute('stop-color', '#041b2d00');
  document.getElementById('color3').setAttribute('stop-color', '#428cd4');
  document.getElementById('color4').setAttribute('stop-color', '#ff9cda00');
  document.getElementById('color5').setAttribute('stop-color', '#ea4492');
  document.getElementById('color6').setAttribute('stop-color', '#04182d00');
  document.querySelector('main').style.cssText = 'background:#00000048;'
  document.querySelector('.top').style.cssText = 'border-bottom: 1px solid #0000007c;'
  document.querySelector('.topLeft li:nth-child(1)').style.cssText = 'background: #ea4492;'
  document.querySelector('.topLeft li:nth-child(2)').style.cssText = 'background: #ff9cda;'
  document.querySelector('.topLeft li:nth-child(3)').style.cssText = 'background: #428cd4;'
  document.querySelector('.search').style.cssText = 'background: #0000007c;'
  document.querySelector('.search').classList.add('dark')
  document.querySelector('.searchView').classList.add('dark')
  document.querySelector('.searchList').classList.add('dark')
  document.querySelector('.top input').style.cssText = 'color: #fff;'
  document.querySelector('.rightPage').style.cssText = 'background: #0000007c;'
  document.querySelector('.id').classList.add('dark')
  document.querySelector('.pw').classList.add('dark')
  document.querySelector('#login button').classList.add('dark')
  document.querySelector('.todoText').style.cssText = 'background: #ea4492;'
  document.querySelector('.todotxt').classList.add('dark')
  document.querySelector('#submit').style.cssText = 'color: #fff;'
  document.querySelector('.memoText').style.cssText = 'background: #428cd4;'
  document.querySelector('.memoText textarea').style.cssText = 'color: #fff;'
  document.querySelector('.memoIn').classList.add('dark')
  document.querySelector('.paintText').style.cssText = 'background: #ff9cda;'
  document.querySelector('.paintTxt').classList.add('dark')
  document.querySelector('.clear').classList.add('dark')
});


//login
const id = document.querySelector('.id')
const pw = document.querySelector('.pw')
const idTxt = id.value
const pwTxt = pw.value



//search
function filter(){

  let search = document.getElementById('search').value.toLowerCase();
  let searchText = document.getElementsByClassName('searchText');

  for(let i = 0; i < searchText.length; i++){
    text = searchText[i].getElementsByClassName("st");
    if(text[0].innerHTML.toLowerCase().includes(search)
      //includes() : 문자열이 특정 문자열을 포함하는지 확인하는 메서드
    ){
      searchText[i].style.display = "flex"
      //listInner가 0,1,2,3...이렇게 돌면서 검색어랑 일치하면 flex
    }else{
      searchText[i].style.display = "none"
      //검색어랑 일치하지 않으면 -1로 none 보이지 않음
    }
  }
}


//todoList
const todoForm = document.querySelector('.todoTextInput');
const todoInput = document.querySelector('.todotxt');
const todoList = document.querySelector('.todoList');

let todoAll = [];
const todoListKEY = 'todoList';

todoForm.addEventListener('submit', todoSubmit);

function todoSubmit(e){  
  e.preventDefault();
  const todoNEW = todoInput.value;
  todoInput.value = '';

  const todoNEW_obj = {
    text: todoNEW,
    id: Date.now(),
  }
  todoAll.push(todoNEW_obj);
  saveTodo();
  todoView(todoNEW_obj);
}

function saveTodo(){
  localStorage.setItem(todoListKEY, JSON.stringify(todoAll));
}

function todoView(todoNEW_obj){
  const li = document.createElement('li');
  li.id = todoNEW_obj.id;

  const span = document.createElement('span');
  const check = document.createElement('span');
  const checkBox = document.createElement('i');
  const btn = document.createElement('button');

  span.innerText = todoNEW_obj.text;
  check.className = 'check'
  checkBox.setAttribute('class','ri-task-line');
  check.addEventListener('click',function(){
    if(checkBox.classList == 'ri-task-line'){
      checkBox.setAttribute('class','ri-task-fill');
      span.style.cssText = 'text-decoration: line-through;'
    }else{
      checkBox.setAttribute('class','ri-task-line');
      span.style.cssText = 'text-decoration: none;'
    }
  });

  btn.innerHTML = 'X';
  btn.style.cssText = 'background:none; border:none; color:#ffffff7c; font-size:12px; margin-left:5px'
  light.addEventListener('click', function(){
    btn.style.cssText = 'background:none; border:none; color:#ffffff7c; font-size:12px; margin-left:5px'
  });
  dark.addEventListener('click', function(){
    btn.style.cssText = 'background:none; border:none; color:#0000007c; font-size:12px; margin-left:5px'
  });
  btn.addEventListener('click', noTodo);

  todoList.appendChild(li);
  li.appendChild(check);
  check.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(btn);
}

function noTodo(e){
  const li = e.target.parentElement;
  li.remove();

  todoAll = todoAll.filter((todo) => todo.id != parseInt(li.id));
}

const save = localStorage.getItem(todoListKEY);
if(save){
  const parse = JSON.parse(save);
  todoAll = parse;
  parse.forEach(todoView);
}


//memo
let memoform = document.querySelector('.memotxt')
let memo = document.querySelector('#textarea');

let memoAll = [];
const memoKEY = 'memoText';

memo.addEventListener('blur', memoBlur);
function memoBlur(e){
  const memoText = memo.value;
  memoAll.push(memoText);
  saveMemo();
}

function saveMemo(){
  localStorage.setItem(memoKEY, memoText);
}

const memoSave = localStorage.getItem(memoKEY);
if(memoSave){
  const memoSaveText = document.write(`<textarea>${memoSave}</textarea>`);
  memo.write(memoSaveText);
}


//paint
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const clear = document.querySelector('.clear')

canvas.width = 285;
canvas.height = 380;

ctx.strokeStyle = '#867066';
ctx.lineWidth = 2.5;

canvas.addEventListener('click',function(){
  document.querySelector('.paintText input').style.cssText = 'opacity:0;'
});

light.addEventListener('click', function(){
  ctx.strokeStyle = '#867066';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.querySelector('.paintText input').style.cssText = 'opacity:1;'
});
dark.addEventListener('click', function(){
  ctx.strokeStyle = '#fff';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.querySelector('.paintText input').style.cssText = 'opacity:1;'
});
clear.addEventListener('click',function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

let painting = false;
function stopPainting(){
  painting = false;
}
function startPainting(){
  painting = true;
}

function onMouseMove(e){
  const x = e.offsetX;
  const y = e.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x, y);
  }else{
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(e){
  painting = true;
}

if(canvas){
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}