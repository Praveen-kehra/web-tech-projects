function show() {
    document.getElementById("submit-tooltip").style.visibility = "visible";
}
function hide() {
    document.getElementById("submit-tooltip").style.visibility = "hidden";
}

var date = document.getElementById('date')
var amount = document.getElementById('amount');
var description = document.getElementById('description');

var expenseList = document.getElementById('myTable');

var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {

    var newExpense =    `<tr>
                            <td>${description.value}</td>
                            <td>${date.value}</td>
                            <td>$${amount.value}</td>
                        </tr>`;
    expenseList.innerHTML += newExpense;

    description.value="";
    date.value="";
    amount.value="";
});
