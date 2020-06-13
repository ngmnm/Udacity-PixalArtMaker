function makeGrid(event1) {
    let grids = document.getElementById("submit");
    grids.addEventListener("click", function() {

        //take the input value from the user
        let rows = document.getElementById("inputHeight").value;
        let cols = document.getElementById("inputWidth").value;

        
        //check if the table is already exist
        if (document.querySelectorAll('tr').length === 0){

            //create the table
            let table = document.getElementById("pixelCanvas");
            let tableBody = document.createElement("TBody");

            //add rows to the new tabel
            for(var i = 0 ; i < rows; i++){
                let tableRow = document.createElement('tr');
                
                table.appendChild(tableRow);

                //add cells to the new table
                for(var j =0 ; j < cols; j++){
                    let tableCell = document.createElement("td");
                    tableRow.appendChild(tableCell);
                }
            }
        }else{
            let row = document.getElementById('pixelCanvas').rows;
            //select all cells to reset the color
            for (var i = 0; i < row.length; i++) {
                for (var j = 0; j < row[i].cells.length; j++ ) {
                    //set the cell's color to white
                    document.getElementById('pixelCanvas').rows[i].cells[j].style.backgroundColor = "white";
                }
            }
        }
    });
     //take the color from colorPicker
    
    document.getElementById("pixelCanvas").addEventListener('click', function() {
        
        let row = document.getElementById('pixelCanvas').rows;
        
        //select the cell to change color
        for (var i = 0; i < row.length; i++) {
            for (var j = 0; j < row[i].cells.length; j++ ) {
                //set the cell's color      
                row[i].cells[j].addEventListener('click', function() {
                    var colorInput  = document.getElementById("colorPicker").value;
                    this.style.backgroundColor = colorInput;
                });
            }
        }
    });
}

//call makeGrid
makeGrid();

//P.S.  when changing the color first time you need to double cilck to apply the new color. 