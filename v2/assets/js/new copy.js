// behaviour on different select input

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