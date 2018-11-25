/*function addRow(){
    var table = document.getElementById("myTable");
    for( i=0; i<= 30; i++){
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "NEW CELL " + i;
        cell2.innerHTML = "NEW CELL " + i;
    }
}*/

/*
function nullAPI(start, checks){
    //const lib = require('lib');
    var StdLibParse = lib.FlandP.StdLibParse;
    console.log('hello')
    StdLibParse.GetNullAPIs({startingNum: start, numChecks: checks}, function (err, result) {
        console.log(err, result)
        var table = document.getElementById("myTable");
        for( i=0; i<= result.length; i++){
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = result[i];
            cell2.innerHTML = "RESULT CELL";
        }

        if (result.length != 0){
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "NEW CELL ";
            cell2.innerHTML = "NEW CELL ";
        } 
    });
    
}*/

async function GetUnfinishedAPIs(num, check){
    
var stdlibparse = lib.flandp.stdlibparse['@0.1.3'];

let result = await stdlibparse.GetPrivateAPIs({
  startingNum: num,
  numChecks: check
});
    
    
    /*var stdlibparse = lib.flandp.stdlibparse['@0.1.2'];

    let result = await stdlibparse.GetUnfinishedAPIs({
  startingNum: num,
  numChecks: check
    });*/
    
    var table = document.getElementById("myTable");
    for( i=0; i < result.length; i++){
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        user = result[i].split("/")
        cell1.innerHTML = user[0];
        cell2.innerHTML = "https://stdlib.com/@" + result[i];
    }
    
    if (result.length == 0){
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "None found!";
        cell2.innerHTML = "None found!";
    }
}
