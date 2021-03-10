class Module extends HTMLElement {
	constructor() {
		super();
		this.listItems = [];
		this.inputAdd = "";
		this.list = "";
	}

	connectedCallback() {
		window.addEventListener("keydown", event => {
			if (event.isComposing || event.keyCode === 13) {
				this.addItem();
				console.log('keydown !');
			}
		  });
		const container = document.createElement('div');
		const label = document.createElement('label');
		label.innerHTML = 'My to-do-list';
		label.setAttribute('for', 'input-add');
		this.inputAdd = document.createElement('input');
		const buttonAdd = document.createElement('button');
		buttonAdd.innerHTML = '<i class="fas fa-plus"></i>';
		buttonAdd.addEventListener('click', this.addItem.bind(this));
		const buttonAddIndex = document.createElement('button');
		buttonAddIndex.innerHTML = '<b>[i]</b>'
		buttonAddIndex.addEventListener('click', this.addIndex.bind(this));
		this.list = document.createElement('ul');
		this.appendChild(label);
		this.appendChild(container);
		container.appendChild(this.inputAdd);
		container.appendChild(buttonAdd);
		container.appendChild(buttonAddIndex);
		this.appendChild(this.list);
	}

	addItem() {
		if (this.inputAdd.value != '') {
			const newItemBlock = document.createElement('li');
			this.listItems.push(newItemBlock);
			while (this.inputAdd.value.includes('[i]')) {
				this.inputAdd.value = this.inputAdd.value.replace('[i]', this.listItems.length)
				console.log(this.inputAdd.value);
			}
			const newItemSpan = document.createElement('span');
			newItemSpan.innerHTML = this.inputAdd.value;
			const newItemButtonDel = document.createElement('button');
			const newItemButtonCheck = document.createElement('button');
			newItemButtonDel.innerHTML = '<i class="fas fa-times"></i>'; 
			newItemButtonCheck.innerHTML = '<i class="fas fa-check"></i> ';
			newItemButtonDel.addEventListener('click', this.removeItem);
			newItemButtonCheck.addEventListener('click', this.checkItem);
			this.list.appendChild(newItemBlock);
			newItemBlock.appendChild(newItemSpan);
			newItemBlock.appendChild(newItemButtonCheck);
			newItemBlock.appendChild(newItemButtonDel);
			this.inputAdd.value = '';
		}
	}

	addIndex() {
		this.inputAdd.value += '[i]'
	}

	
	removeItem() {
		console.log(this);
		let li = this.parentNode;
		console.log(li);
		let parent = li.parentNode;
		console.log(parent);
		parent.removeChild(li);
	}

	checkItem() {
		let parent = this.parentNode;
		parent.querySelector('span').classList.toggle( 'over');
	}

}

customElements.define('to-do-list', Module);
