document.getElementById("sidebar_triggers").classList.toggle('active');
document.getElementById("sidebar_actions").classList.toggle('active');
var state = 0;
var count = 0;
var tc = 0, ac = 0; // tc = trigger count, ac = action count

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
    let myForm = document.getElementById("workflow-form")
    let action_list = document.getElementById("action-list");
    let trigger = document.getElementById("trigger");
    let add2 = document.getElementById('add2');
    let finishbtn = document.getElementById('finish');
    if (state === 1) {
        trigger.value = val;
        document.getElementById('triggers').style.display = 'block';
        add2.style.display = 'block';
    }
    else if (state === 2) {
        let v = val.split(" ");
        count++;
        ac++;
        action_list.insertAdjacentHTML("afterend", `<div id="action${ac}" class="w-50 p-3 shadow mt-3 mx-auto action-pane">
        <p class="">Actions</p>
        <input type="text" class="py-4 px-auto" value="${val}" name="action" id="${v[0] + "_" + v[1]}" readonly>
        <textarea name="${v[0] + "-" + v[1] + "-textarea"}"  form="workflow-form" class="form-control" id="${v[0] + "-" + v[1] + "-textarea"}" rows="2"></textarea>
    </div>`);
        myForm.append(action_list);
        myForm.append(finishbtn);
    }
    tinyInit();
    console.log(val);
    // show the divs
}

function End(elem) {
    let myForm = document.getElementById("workflow-form")
    console.log("End triggered");
    let finishblock = document.getElementById("finish");
    finishblock.style.display = finishblock.style.display === "block" ? "none" : "block";
    myForm.append(finishblock)
}

function remove_t() {
    let elem = document.getElementById("trigger-list");
    let add2 = document.getElementById('add2');
    add2.style.display = 'none';
    console.log(elem.children[tc]);
    elem.innerHTML = "";
    tc--;
}


function remove_a() {
    for (let i = 1; i <= ac; i++) {
        document.getElementById("action" + i).remove();
    }
    ac = 0;
}