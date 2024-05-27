document.addEventListener('DOMContentLoaded', () => {
    const sales = [
        {student: 'Jason Gomes', date: '10/06/2018', amount: 34.99, refundRequested: null},
        {student: 'Carlos Blue', date: '10/06/2018', amount: 29.99, refundRequested: null},
        {student: 'Martin Heyes', date: '11/06/2018', amount: 39.99, refundRequested: '13/06/2018'},
        {student: 'Isabella Hopkins', date: '11/06/2018', amount: 29.99, refundRequested: null},
        {student: 'Andrew Walt', date: '12/06/2018', amount: 34.99, refundRequested: null},
];
const table = document.getElementById('sales-table');
let totalAmount = 0;
for (const sale of sales) {
    if (!sale.refundRequested) {
        const row = table.insertRow();
        row.insertCell(0).textContent = sale.student;
        row.insertCell(1).textContent = sale.date;
        row.insertCell(2).textContent = sale.amount.toFixed(2);
        totalAmount += sale.amount;
}
}
const totalRow = table.insertRow();
totalRow.insertCell(0).textContent = 'Total sold';
totalRow.insertCell(1).textContent = '';
totalRow.insertCell(2).textContent = totalAmount.toFixed(2);
});