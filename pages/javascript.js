function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block') e.style.display = 'none';
    else e.style.display = 'block';
    
    hideAllBut(id);
}

function hideAllBut(id) {
    var lists = document.querySelectorAll('.list');
    for (var i = lists.length; i--; ) {
        if (lists[i].id != id) {
            lists[i].style.display = 'none';
        }
    }
}