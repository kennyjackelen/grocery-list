const CHECKED = '\u2714';
const UNCHECKED = '\u00A0';

function onLoad(){
	$('.grocery-item').click(itemClick);
	$('.remove-button').click(removeClick);
	$('#new-item-form').submit(addNewItem);
}

function getLabelFromCheckbox(checkboxButton){
	var parentListItem,
		labelDiv;
	parentListItem = checkboxButton.parents('li').eq(0);
	labelDiv = $('.item-label', parentListItem);
	return labelDiv;
}

function itemClick(){
	var listItem = $(this),
		isChecked,
		checkbox,
		label;
	checkbox = getCheckbox(listItem);
	label = getLabel(listItem);
	isChecked = isCheckboxChecked(checkbox);
	toggleCheckbox(checkbox, isChecked);
	toggleLabelStyle(label, isChecked);
}

function getCheckbox(listItem){
	return $('.checkbox-button', listItem);
}

function getLabel(listItem){
	return $('.item-label', listItem);
}

function isCheckboxChecked(checkbox){
	return $('.ui-btn-text', checkbox).eq(0).text() == CHECKED;
}

function toggleCheckbox(checkbox, isChecked){
	if (!isChecked){
		checkCheckbox(checkbox);
	}
	else{
		uncheckCheckbox(checkbox);
	}
}

function checkCheckbox(checkbox){
	var labelDiv;
	setButtonText(checkbox, CHECKED);
	labelDiv = getLabelFromCheckbox(checkbox);
	labelDiv.addClass('checked-off');
}

function uncheckCheckbox(checkbox){
	var labelDiv;
	setButtonText(checkbox, UNCHECKED);
	labelDiv = getLabelFromCheckbox(checkbox);
	labelDiv.removeClass('checked-off');
}

function setButtonText(checkbox, text){
	$('.ui-btn-text', checkbox).text(text);	
}

function toggleLabelStyle(label, isChecked){
	if (!isChecked){
		label.addClass('checked-off');
	}
	else{
		label.removeClass('checked-off');
	}
}

function removeClick(event){
	var button = $(this),
		listItem;
	event.stopPropagation();
	listItem = getListItem(button);
	deleteItemOnServer(listItem);
	removeItemFromList(listItem);
}

function removeItemFromList(listItem){
	listItem.remove();
	if (howManyItems() == 0){
		$('#no-items-in-list').removeClass('nodisp');
	}
}

function howManyItems(){
	var list;
	list = $('#main-list');
	return $('li',list).size();
}

function getListItem(button){
	return button.parents('li').eq(0);
}

function deleteItemOnServer(listItem){
	var itemId;
	itemId = listItem.data('grocery-id');
	console.log('deleting item with ID "' + itemId + '"');
}

function addNewItem(event){
	var form = $(this),
		entryField,
		newItemName;
	entryField = $('input', form);
	newItemName = entryField.text();
	entryField.text('');
	id = addItemOnServer(newItemName);
	addItemToList(id, newItemName);
}

function addItemOnServer(newItemName){
	console.log('adding item with name "' + newItemName + '"');
	return 'ID';
}

function addItemToList(id, name){
	var list;
	list = $('#main-list');
	list.append()
}
$(document).on('pageinit', onLoad);
