'use strict';

function ask(question, yes, no) {
if (confirm(question)) yes()
else no();
}

function showOk() {
alert( "Вы согласились." );
}

function showCancel() {
alert( "Вы отменили выполнение." );
}

// использование
ask("Вы согласны?", showOk, showCancel);