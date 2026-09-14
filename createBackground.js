createBack(); 

function createBack(){ 
    for(let i = 0; i < 21; i++) {  
        row = $("<div>").addClass("row") 
        $("#layer0").append(row); 
        for(let i = 0; i < 20; i++) { 
            row .append($("<div>").addClass("box"));
        }
    }
}