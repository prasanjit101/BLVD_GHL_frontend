// behaviour on different select input
function onSelect(obj) {
    if (obj.value == 2) {
        document.getElementById("Created").style.display = "none";
        document.getElementById("Cancelled").style.display = "block";
    }
    else if (obj.value == 1) {
        document.getElementById("Created").style.display = "block";
        document.getElementById("Cancelled").style.display = "none";
    }
}