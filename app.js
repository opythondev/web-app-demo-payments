let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let buttons = [btn1, btn2, btn3, btn4, btn5, btn6];

function setButtonText(item_index) {
    tg.MainButton.text = "Вы выбрали товар " + item_index;
};

function tgMainButtonToggle() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.show();
    }
    else {
        tg.MainButton.hide();
    }
};

function setItemId(item_index) {
    item = item_index;
};

function listen(item_index) {
    item_index += 1;
    if (tg.MainButton.isVisible) {
        tgMainButtonToggle();
    }
    else {
        tgMainButtonToggle();
        setButtonText(item_index);
        setItemId(item_index);
    }
};

buttons.forEach(function(item, index, array) {
    item.addEventListener("click", listen(index));
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement('p');
let userid = document.createElement('p');

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;

userid.innerText = `${tg.initDataUnsafe.user.id}`;

usercard.appendChild(userid);
usercard.appendChild(p);
