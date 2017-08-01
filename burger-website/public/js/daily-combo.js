
var combolist = document.getElementById("dailyCombo");
function SetComboList()
{
    var li1 = document.createElement("li");
    li1.appendChild(document.createTextNode("Burger: " + Math.floor(Math.random() * 3)));
    combolist.appendChild(li1);

    var li2 = document.createElement("li");
    li2.appendChild(document.createTextNode("Side: " + Math.floor(Math.random() * 3)));
    combolist.appendChild(li2);

    var li3 = document.createElement("li");
    li3.appendChild(document.createTextNode("Drink: " + Math.floor(Math.random() * 3)));
    combolist.appendChild(li3);
}

SetComboList();