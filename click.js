function toy(num) {
    let adr = "t" + num + ".png";
    let table = document.querySelector("#tbl");
    let nimg = document.createElement('img');
    let box = table.getBoundingClientRect();
    nimg.setAttribute('src', adr);
    nimg.setAttribute('class', 'dragtoy');
    nimg.style.left = Math.floor(Math.random() * 460) +  box.left + "px";
    nimg.style.top = Math.floor(Math.random() * 460) + box.top + "px";
    table.appendChild(nimg);
}

function nam() {
    let arr = [[1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,],
               [1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,],
               [1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,], 
               [0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,], 
               [1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,]];
    let list = document.querySelectorAll(".dragtoy");
    let k = 0;
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 5; j++) {
            if (arr[j][i] == 1) { 
                list.item(k).style.left = (i + 1) * 40 + "px";
                list.item(k).style.top = (j + 1) * 40 + "px";
                list.item(k).style.zIndex = "111";
                k++;
            }
            if (k == list.length) break;
        }
        if (k == list.length) break;
    }
}

function init() {
    let table = document.querySelector("#tbl");
    let box = table.getBoundingClientRect();
    let tree = document.querySelector(".dragtree");
    tree.style.left = 182 + box.left + "px";
    tree.style.top = 56 + box.top + "px";
}
