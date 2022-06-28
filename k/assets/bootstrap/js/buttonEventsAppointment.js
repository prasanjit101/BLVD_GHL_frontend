var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
            //el_up.innerHTML = "Click on button to get ID";
          
function GFG_click(clicked) {
    el_down.innerHTML = "Trigger: "+ clicked;
    var x = document.getElementById('GFG_DOWN')
    x.value=clicked;
    x.style.width = x.value.length + "ch";
}      

document.getElementById("SendSMS").onclick = function() {
    var form = document.getElementById("center-dv");
    var x = document.getElementById('action_name')
    x.innerHTML="Action: SMS"
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    form.appendChild(br);
    form.appendChild(br);
    form.appendChild(input);
    form.appendChild(br);
}

document.getElementById("SendEMAIL").onclick = function() {
    var form = document.getElementById("center-dv");
    var x = document.getElementById('action_name')
    x.innerHTML="Action: Email"
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    form.appendChild(br);
    form.appendChild(br);
    form.appendChild(input);
    form.appendChild(br);
}

