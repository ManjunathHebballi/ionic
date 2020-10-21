const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const clearBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expenseList = document.querySelector('#expense-list');


addBtn.addEventListener('click',() =>{
const enterdReason = reasonInput.value;
const enterdAmount = amountInput.value;
if(enterdReason.trim().length <=0 ||
enterdAmount <=0 ||
enterdAmount.trim().length <=0){
    return;
}
const newItem = document.createElement('ion-item');
newItem.textContent = enterdReason + ' : ₹ ' + enterdAmount;
expenseList.appendChild(newItem);

});