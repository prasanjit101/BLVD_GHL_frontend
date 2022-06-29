document.getElementById("sidebar_triggers").classList.toggle('active');
document.getElementById("sidebar_actions").classList.toggle('active');
var state = 0;

function toggleSidebar(ref) {
    state = 1;
    document.getElementById("sidebar_triggers").classList.toggle('active');
}

function toggleSidebarActions(ref) {
    state = 2;
    document.getElementById("sidebar_actions").classList.toggle('active');
}


function onSelect(obj) {
    if (obj.value === "on_cancel") {
        document.getElementById("Created").style.display = "none";
        document.getElementById("Cancelled").style.display = "block";
    }
    else if (obj.value === "on_create" || obj.value === "on_reschedule") {
        document.getElementById("Created").style.display = "block";
        document.getElementById("Cancelled").style.display = "none";
    }
}

function trigger(val) {
    let trigger = document.getElementById("trigger");
    let action = document.getElementById("action");
    if (state === 1) {
        trigger.value = val;
    }
    else if (state === 2) {
        action.value = val;
    }

    console.log(val);
    // show the divs
}

function End(elem) {
    console.log("End triggered");
    let finishblock = document.getElementById("finish");
    finishblock.style.display = finishblock.style.display === "block" ? "none" : "block";
}
