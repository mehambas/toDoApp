/* CREATING HTML ELEMENTS - ITEMS ADDING PART */

document.body.setAttribute('onsubmit', 'return false');

// div_container
const div_container = document.createElement('div');
div_container.className = 'container p-3';

// h1
const h1 = document.createElement('h1');
h1.className = 'app-title mb-3 mt-2';
h1.setAttribute('id', 'header');
const h1_text = document.createTextNode('To Do List');

// div_card
const div_card = document.createElement('div');
div_card.className = 'card'

// div_card-header
const div_card_header = document.createElement('div');
div_card_header.className = 'card-header text-uppercase';
const div_card_header_text = document.createTextNode('New Task');

// card_body
const div_card_body = document.createElement('div');
div_card_body.className = 'card-body';

// form
const form = document.createElement('form');
form.setAttribute('id', 'addTaskForm');

// div_input_group
const div_input_group = document.createElement('div');
div_input_group.className = 'input-group mb-3';

// input
const input = document.createElement('input');
input.className = 'form-control';
input.setAttribute('id', 'txtTaskName');
input.setAttribute('name', 'taskName');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Type a new Task');
input.setAttribute('aria-describedby', 'btnAddNewTask');


// input_group_append 
const div_input_group_append = document.createElement('div');
div_input_group_append.className = 'input-gruop-append';

// button 
const button = document.createElement('button');
button.className = 'btn';
button.setAttribute('type', 'button');
button.setAttribute('id', 'btnAddNewTask');

// i_fa-plus
button.innerHTML = '<i class="fas fa-plus"></i>';

// to append first(adding) part
document.body.appendChild(div_container);
div_container.appendChild(h1);
h1.appendChild(h1_text);
div_container.appendChild(div_card);
div_card.appendChild(div_card_header);
div_card_header.appendChild(div_card_header_text);
div_card.appendChild(div_card_body);
div_card_body.appendChild(form);
form.appendChild(div_input_group);
div_input_group.appendChild(input);
div_input_group.appendChild(div_input_group_append);
div_input_group_append.appendChild(button);

/* CREATING HTML ELEMENTS - ITEMS LIST PART */

const div_card2 = document.createElement('div');
div_card2.className = 'card mt-3';
const div_card_header2 = document.createElement('div');
div_card_header2.className = 'card-header text-uppercase';
const div_card_header2_text = document.createTextNode('Task List');
const a_delete_all = document.createElement('a');
a_delete_all.className = 'btn btn-sm delete-all float-right';
a_delete_all.setAttribute('id', 'btnDeleteAll');
a_delete_all.setAttribute('href', '#');
const a_delete_all_text = document.createTextNode('Delete All');
const ul_list_group = document.createElement('ul');
ul_list_group.className = 'list-group';
ul_list_group.setAttribute('id', 'task-list');


// to append second(item)  part
div_container.appendChild(div_card2);
div_card2.appendChild(div_card_header2);
div_card_header2.appendChild(div_card_header2_text);
div_card_header2.appendChild(a_delete_all);
a_delete_all.appendChild(a_delete_all_text);
div_card2.appendChild(ul_list_group);


/*  Add a list item */
div_input_group_append.addEventListener('click', listItemAdd);


function listItemAdd() {


    const li_list_group_item = document.createElement('li');
    li_list_group_item.className = 'list-group-item';
    li_list_group_item_text = document.createTextNode(input.value);
    const a_delete_item = document.createElement('a');
    a_delete_item.className = 'delete-item float-right';
    a_delete_item.setAttribute('href', '#');
    a_delete_item.innerHTML = '<i class="fas fa-times"></i>';


    ul_list_group.appendChild(li_list_group_item);
    li_list_group_item.appendChild(li_list_group_item_text);
    li_list_group_item.appendChild(a_delete_item);
    input.value = '';
}

/* remove a list item */

// const li_el = document.querySelector('.list-group-item');
// const a_el =  document.querySelector('.delete-item');


div_card2.addEventListener('click', deleteItem)

function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();

}

/* remove all list item */


a_delete_all.addEventListener('click', removeAllItems);
const ul_el = document.getElementById('task-list');

function removeAllItems() {
    
    ul_el.innerHTML = '';
    e.preventDefault();
}

/* dark mode */

const dark_button = document.createElement('button');
h1.appendChild(dark_button);
dark_button.className = 'btn';
dark_button.id = 'dark_button';
const dark_button_text = document.createTextNode('dark');
dark_button.appendChild(dark_button_text);

dark_button.addEventListener('click', darkMode);

function darkMode(){
    document.body.classList.toggle('bg-dark');
    

    if (dark_button.textContent == 'light') {
        dark_button.textContent = 'dark';
        div_container.removeAttribute('style', 'background-color: #52057b; !important');
        ul_el.removeAttribute('style', 'background-color: #222831; !important');
        div_card_body.removeAttribute('style', 'background-color: #393e46; !important');
        
        
    
    } else{
        dark_button.textContent = 'light';
        div_container.setAttribute('style', 'background-color: #222831; !important');
        ul_el.setAttribute('style', 'background-color: #393e46; !important');
        div_card_body.setAttribute('style', 'background-color: #393e46; !important');

    }
    
}



console.log(dark_button)