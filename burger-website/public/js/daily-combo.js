var isAbout = true;

function onMouseClick() {
    if (isAbout) {
        onButtonMouseOver();
    } else {
        onButtonMouseOut();
    }
    isAbout = !isAbout;
}

function onButtonMouseOver() {
    var about = document.getElementById('about');
    about.children.item(0).innerHTML = "Daily Combo";
    clearChildren(about.children.item(1));

    var div = document.createElement('div');
    div.classList = "daily-combo";

    for (let i = 0; i < 3; ++i) {
        var item = document.createElement('div');

        if (i === 0) {
            var burger = document.createElement('h2');
            burger.innerHTML = dailyCombo.burger;

            var burgerImg = document.createElement('img');
            burgerImg.src = dailyCombo.burgerImg;

            item.appendChild(burger);
            separator(item);
            item.appendChild(burgerImg);
        }
        else if (i === 1) {
            var side = document.createElement('h2');
            side.innerHTML = dailyCombo.side;

            var sideImg = document.createElement('img');
            sideImg.src = dailyCombo.sideImg;

            item.appendChild(side);
            separator(item);
            item.appendChild(sideImg);
        }
        else if (i === 2) {
            var drink = document.createElement('h2');
            drink.innerHTML = dailyCombo.drink;
            
            var drinkImg = document.createElement('img');
            drinkImg.src = dailyCombo.drinkImg;

            item.appendChild(drink);
            separator(item)
            item.appendChild(drinkImg);
        }

        div.appendChild(item);
    }

    about.children.item(1).appendChild(div);
    about.children.item(2).innerHTML = "About";
}
function onButtonMouseOut() {
    var about = document.getElementById('about');
    about.children.item(0).innerHTML = "About Us";

    var txt = "We are a family owned burger joint that is dedicated to giving every customer the most delectable burger they've ever had. " +
        "Our hand made, char broiled burgers will leave you wanting more. " +
        "We have a variety of sides and drinks to go with your perfectly crafted burger. " +
        "From fresh cut fries to mashed potatoes, coke and pepsi products, we have all the friends your burger will ever need. " +
        "If you want something put on the menu, ask for it! With enough people asking for the same thing, we'll do our best to put it on the menu. " +
        "Customers come first.";

    var p = document.createElement('p');
    p.innerHTML = txt;
    clearChildren(about.children.item(1));
    about.children.item(1).appendChild(p);
    about.children.item(2).innerHTML = "Daily Combo";
}

function clearChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function separator(node) {
    var hr = document.createElement('hr');
    hr.classList = 'separator';
    node.appendChild(hr);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}