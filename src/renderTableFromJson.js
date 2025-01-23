function renderTable(jsonData) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = Object.keys(jsonData[0])

    const headersRow = document.createElement('tr');

    headers.forEach(key => {
        const element = document.createElement('th');
        element.textContent = key;
        headersRow.appendChild(element);
    })

    thead.appendChild(headersRow)
    table.appendChild(thead)

    jsonData.forEach((item) => {
        const rowElement = document.createElement('tr');

        headers.forEach(key => {
            const cellElement = document.createElement('td');
            cellElement.textContent = item[key];
            rowElement.appendChild(cellElement);
        })

        tbody.appendChild(rowElement)
    })

    table.appendChild(tbody)
    table.style.border = '3px solid pink'

    window.onload = () => {
        document.body.appendChild(table)
    }
}

const jsonData = [
    {name: "John", age: 30, role: "Developer"},
    {name: "Jane", age: 25, role: "Designer"}
];
renderTable(jsonData);

/*
<table>
    <thead>
        <tr><th>Name</th><th>Age</th><th>Role</th></tr>
    </thead>
    <tbody>
        <tr><td>John</td><td>30</td><td>Developer</td></tr>
        <tr><td>Jane</td><td>25</td><td>Designer</td></tr>
    </tbody>
</table>

 */