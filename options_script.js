function range(x, y) {
    var array = [];
    for (var i = x; i <= y; i++) {
       array.push(i);
    }
    return array;
}


//get settings from storage
let settings = load_dict("settings"); //localStorage.getItem("settings");
if (settings == null) {
    //no settings
    console.log("No settings found");
    alert("No settings found\nSetting user defaults");

    login = prompt("Login:");
    if (login == null) { }
    settings = [];
    localStorage.setItem("login", login);
    save_dict("settings", settings);
} else {
    console.log("Loaded user settings");
    //console.log(settings);
}


//save settings
function save() {
    console.log("SAVING");
    save_dict("settings", settings);
}

function save_dict(key, dict) {
    let array = [];
    for (let pair in dict) {
        array.push([pair, dict[pair]]);
    }
    localStorage.setItem(key, array);
}
function load_dict(key) {
    let loaded = localStorage.getItem(key);
    if (loaded == null) {
        return null;
    }
    loaded = loaded.split(",")
    //console.log(loaded);
    let dict = {};
    for (let i in range(1, loaded.length/2)) {
        dict[loaded[i]] = loaded[parseInt(i)+1];
    }
    return dict;
}


//actions
var element = document.getElementById("save-btn");
element.addEventListener('click', function() {
    save();
});

function keypress(e) {
    if (e.key == "s" && e.altKey) {
        save()
    }
}
document.addEventListener('keyup', (e) => keypress(e));

var element = document.getElementById("debug-btn");
element.addEventListener('click', function() {
    console.log("settings:");
    console.log(settings);
});


//update settings on event
setting_ids = ["s1"]; // [the ids of the settings]
for (var id in setting_ids) {
    var elID = setting_ids[id];
    var element = document.getElementById(elID);
    if (Object.keys(settings).includes(elID)) {
        element.checked = settings[elID] == "true "// ? true : false
    }
    element.addEventListener('change', function() {
        //console.log("{"+elID+"} updated to "+element.checked);
        settings[elID] = element.checked+" ";
    });
}


//unload
document.body.addEventListener("unload", {
});