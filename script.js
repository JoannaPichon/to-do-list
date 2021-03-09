let inputAdd = document.querySelector('#input-add');
let add = document.querySelector('#add');
let list = document.querySelector('#list');
let listItems = [];
function addItem() {
	iValue = inputAdd.value;
	if (iValue != '') {
		newItemBlock = document.createElement('li');
		listItems.push(newItemBlock);
		while (iValue.includes('[i]') ) {
			iValue = iValue.replace('[i]' , listItems.length);
			console.log(iValue);
		}
		newItemSpan = document.createElement('span');
		newItemSpan.innerHTML = iValue;
		newItemButtonDel = document.createElement('button');
		newItemButtonCheck = document.createElement('button');
		newItemButtonDel.innerHTML = '<i class="fas fa-times"></i>'; 
		newItemButtonCheck.innerHTML = '<i class="fas fa-check"></i> ';
		newItemButtonDel.addEventListener('click', removeItem);
		newItemButtonCheck.addEventListener('click', checkItem);
		
		newItemBlock.id = 'item-' + listItems.length;
		newItemButtonDel.id = 'btnDel-' + listItems.length;
		newItemButtonCheck.id = 'btnCheck-' + listItems.length;
		newItemSpan.innerHTML = iValue;
		list.appendChild(newItemBlock);
		newItemBlock.appendChild(newItemSpan);
		newItemBlock.appendChild(newItemButtonCheck);
		newItemBlock.appendChild(newItemButtonDel);
		inputAdd.value = '';
		
	}
}
add.addEventListener('click', addItem);


function removeItem() {
	let li = this.parentNode;
	let parent = li.parentNode;
	parent.removeChild(li);
}

function checkItem() {
	let parent = this.parentNode;
	parent.querySelector('span').classList.toggle( 'over');
}