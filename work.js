but = document.getElementById("add-button");
workArea = document.getElementsByClassName("items")[0];
var count=0;


but.onclick=function(){
  
    count++;
    var item = document.getElementById("item-name-input");
    addItem(item.value, count);
}

function addItem(txt, cnt){
    var p = document.createElement("p");
    p.textContent= cnt + ". "+ txt;
    p.id = "itemP-"+cnt;
    p.style= "display:inline;"
    var butSub = document.createElement("input");
    butSub.type = "button";
    butSub.value = "-";
    butSub.id = "SubBut-"+cnt;
    butSub.className = "subButton";
    butSub.onclick=function(){
        this.remove();
        document.getElementById("itemP-"+cnt).remove();
    };

    workArea.appendChild(p);
    workArea.appendChild(butSub);
    workArea.appendChild(document.createElement("br"));
}

function removeItem(id,cnt){
    //document.getElementById().remove();
    document.getElementById(id).remove();

}


