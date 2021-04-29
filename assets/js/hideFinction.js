let toggle = document.getElementById('toggle');

function toggle_hide(id , id2) {
    let e = document.getElementById(id);
    let e2 = document.getElementById(id2);
    e.style.display = 'none';
    e2.style.display = 'none';
}

function toggle_visible(id, id2) {
    let e = document.getElementById(id);
    let e2 = document.getElementById(id2);
    e.style.display = 'block';
    e2.style.display = 'block';
}