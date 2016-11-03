var txtChar = document.getElementById('txtChar');
var spnCode = document.getElementById('spnCode');
var charCode;

txtChar.addEventListener('keydown', function(e){
    charCode = e.keyCode;    
    txtChar.value = '';
    
    if (charCode == 8) txtChar.value = "backspace"; //  backspace
    if (charCode == 9) txtChar.value = "tab"; //  tab
    if (charCode == 13) txtChar.value = "enter"; //  enter
    if (charCode == 16) txtChar.value = "shift"; //  shift
    if (charCode == 17) txtChar.value = "ctrl"; //  ctrl
    if (charCode == 18) txtChar.value = "alt"; //  alt
    if (charCode == 19) txtChar.value = "pause/break"; //  pause/break
    if (charCode == 20) txtChar.value = "caps lock"; //  caps lock
    if (charCode == 27) txtChar.value = "escape"; //  escape
    if (charCode == 32) txtChar.value = "space"; // space
    if (charCode == 33) txtChar.value = "page up"; // page up, to avoid displaying alternate character and confusing people	         
    if (charCode == 34) txtChar.value = "page down"; // page down
    if (charCode == 35) txtChar.value = "end"; // end
    if (charCode == 36) txtChar.value = "home"; // home
    if (charCode == 37) txtChar.value = "left arrow"; // left arrow
    if (charCode == 38) txtChar.value = "up arrow"; // up arrow
    if (charCode == 39) txtChar.value = "right arrow"; // right arrow
    if (charCode == 40) txtChar.value = "down arrow"; // down arrow
    if (charCode == 45) txtChar.value = "insert"; // insert
    if (charCode == 46) txtChar.value = "delete"; // delete
    if (charCode == 91) txtChar.value = "left window"; // left window
    if (charCode == 92) txtChar.value = "right window"; // right window
    if (charCode == 93) txtChar.value = "select key"; // select key
    if (charCode == 96) txtChar.value = "numpad 0"; // numpad 0
    if (charCode == 97) txtChar.value = "numpad 1"; // numpad 1
    if (charCode == 98) txtChar.value = "numpad 2"; // numpad 2
    if (charCode == 99) txtChar.value = "numpad 3"; // numpad 3
    if (charCode == 100) txtChar.value = "numpad 4"; // numpad 4
    if (charCode == 101) txtChar.value = "numpad 5"; // numpad 5
    if (charCode == 102) txtChar.value = "numpad 6"; // numpad 6
    if (charCode == 103) txtChar.value = "numpad 7"; // numpad 7
    if (charCode == 104) txtChar.value = "numpad 8"; // numpad 8
    if (charCode == 105) txtChar.value = "numpad 9"; // numpad 9
    if (charCode == 106) txtChar.value = "multiply"; // multiply
    if (charCode == 107) txtChar.value = "add"; // add
    if (charCode == 109) txtChar.value = "subtract"; // subtract
    if (charCode == 110) txtChar.value = "decimal point"; // decimal point
    if (charCode == 111) txtChar.value = "divide"; // divide
    if (charCode == 112) txtChar.value = "F1"; // F1
    if (charCode == 113) txtChar.value = "F2"; // F2
    if (charCode == 114) txtChar.value = "F3"; // F3
    if (charCode == 115) txtChar.value = "F4"; // F4
    if (charCode == 116) txtChar.value = "F5"; // F5
    if (charCode == 117) txtChar.value = "F6"; // F6
    if (charCode == 118) txtChar.value = "F7"; // F7
    if (charCode == 119) txtChar.value = "F8"; // F8
    if (charCode == 120) txtChar.value = "F9"; // F9
    if (charCode == 121) txtChar.value = "F10"; // F10
    if (charCode == 122) txtChar.value = "F11"; // F11
    if (charCode == 123) txtChar.value = "F12"; // F12
    if (charCode == 144) txtChar.value = "num lock"; // num lock
    if (charCode == 145) txtChar.value = "scroll lock"; // scroll lock
    if (charCode == 186) txtChar.value = ";"; // semi-colon
    if (charCode == 187) txtChar.value = "="; // equal-sign
    if (charCode == 188) txtChar.value = ","; // comma
    if (charCode == 189) txtChar.value = "-"; // dash
    if (charCode == 190) txtChar.value = "."; // period
    if (charCode == 191) txtChar.value = "/"; // forward slash
    if (charCode == 192) txtChar.value = "`"; // grave accent
    if (charCode == 219) txtChar.value = "["; // open bracket
    if (charCode == 220) txtChar.value = "\\"; // back slash
    if (charCode == 221) txtChar.value = "]"; // close bracket
    if (charCode == 222) txtChar.value = "'"; // single quote
    
    spnCode.innerHTML = 'KeyCode:  ' + charCode;
    return false;    
});