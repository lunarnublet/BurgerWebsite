
var combolist = document.getElementById("dailyCombo");
function SetComboList()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(Math.floor(Math.random() * 3)));
    combolist.appendChild(li);
}

SetComboList();