addButton = document.getElementById("add-button");
textField = document.getElementById("item-name-input");
let acitveButtonId = "tab1";


var count = 0;
addButton.onclick = function () {
    addItem();

}

textField.addEventListener("keydown",function(event){
    
    if(event.keyCode==13){
        event.preventDefault();
        
        addButton.click();
    }
})





function addItem() {
    if (textField.value == "") { alert("Please enter something"); }
    else {
        count++;
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "cb" + count;
        checkBox.className = "itemsCB";
        var cbid = checkBox.id;
        
        
        var p = document.createElement("p");
        p.textContent = textField.value;
        p.id = "p" + count;
        p.style = "display:inline";
        p.className = "pCB";
        var pid = p.id;

        var delBut = document.createElement("input");
        delBut.type= "button";
        // delBut.setAttribute("value", "Delete");

        delBut.id = "delBut" + count;
        delBut.className = "deleteButton";
        // delId.value = "Delete";
        var delId = delBut.id;        
        // alert("Works");
        let workArea = document.getElementById(acitveButtonId+"Items");



        workArea.appendChild(checkBox);
        workArea.appendChild(p);
        workArea.appendChild(delBut);
        workArea.appendChild(document.createElement("br"));

        document.getElementById(cbid).addEventListener("click", function () {
            validate(cbid, pid);
        });

        document.getElementById(delId).addEventListener("click",function(){
            document.getElementById(pid).remove();
            document.getElementById(cbid).remove();
            document.getElementById(delId).remove();
        } );

        textField.value = "";
    }
}




function validate(cbid, pid) {
    if (document.getElementById(cbid).checked) {
        document.getElementById(pid).className = "pCBChecked"
    }
    else {
        document.getElementById(pid).className = "pCB";
    }

}


function setActive(id){
    document.getElementsByClassName("tabsButtonActive")[0].className = "tabsButtonInactive";
    document.getElementsByClassName("itemsAreaActive")[0].className = "itemsAreaInactive";

    document.getElementById(id).className = "tabsButtonActive";
    document.getElementById(id+ "Items").className = "itemsAreaActive";
    acitveButtonId = id;
    textField.value="";
    
}

