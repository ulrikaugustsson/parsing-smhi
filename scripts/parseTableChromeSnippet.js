// This snippet is used to parse the weather symbol table on
// http://opendata.smhi.se/apidocs/metfcst/parameters.html#parameter-wsymb
// The script is used in my blogpost on
// https://medium.com/@strid/parse-a-table-to-javascript-624d262ee19e#.d98r26cy1

let tables = document.querySelectorAll('.table.table-bordered'); // get all the tables
let table = tables[tables.length - 1]; // get the last table
let rows = table.querySelectorAll('tr'); // select all the rows in the table
let rowsArr = Array.prototype.slice.call(rows); // convert the NodeList<tr> to an Array

let weatherSymbolsMap = rowsArr
    // map the <td> their innerText values: [[key, value]]
    .map((row) => {
        return Array.prototype.slice.call(row.children)
            .map((data) => data.innerText);
    })
    // remove the first item as it should have been in the table header
    .slice(1, rowsArr.length - 1)
    // reduce the Array to a object map: {key: value}
    .reduce((symbolMap, row) => {
        symbolMap[row[0]] = row[1];
        return symbolMap;
    }, {});

console.log(weatherSymbolsMap);
