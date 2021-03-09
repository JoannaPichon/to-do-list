
class Module extends HTMLElement {

	constructor() {
		super();
		this.label = document.createElement('label');
		this.label.innerHTML = 'My to-do-list';
		this.label.setAttribute('for', 'input-add');
		this.div = document.createElement('div');
		this.inputAdd = document.createElement('input');
		this.inputAdd.id = 'input-add';
		this.buttonAddIndex = document.createElement('button');
		this.buttonAddIndex.innerHTML = '<b>[i]</b>';
		this.buttonAddIndex.addEventListener('click', this.addIndex.bind(this));
		this.buttonAdd = document.createElement('button');
		this.buttonAdd.id = 'add';
		this.buttonAdd.innerHTML = '<i class="fas fa-plus"></i>';
		this.list = document.createElement('ul');
		this.list.id = "list";
		this.listItems = [];
	}

	connectedCallback() {
		this.appendChild(this.label);
		this.appendChild(this.div);
		this.div.appendChild(this.inputAdd);
		this.div.appendChild(this.buttonAddIndex);
		this.div.appendChild(this.buttonAdd);
		this.appendChild(this.list);
	}

	addIndex() {
		this.inputAdd.value += '[i]'
	}

}

customElements.define('to-do-list', Module);
