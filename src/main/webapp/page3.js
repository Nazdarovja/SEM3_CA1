/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];
var ascending = true;

window.onload = function() {
    loadBoys();
    loadGirls();
    loadAll();
};

function loadBoys() {
    document.getElementById("boys").innerHTML = "<li>" + boys.join("</li><li>") + "</li>";
};

function loadGirls() {
    document.getElementById("girls").innerHTML = "<li>" + girls.join("</li><li>") + "</li>";
};

function loadAll() {
    var all = boys.concat(girls);
    document.getElementById("all").innerHTML = "<li>" + all.join("</li><li>") + "</li>";
};

//addboy
document.getElementById("addboy").addEventListener("click", function () {
    let name = document.getElementById("newboy").value;
    boys.push(name);
    
    let li = document.createElement("li");
    li.innerHTML = name;
    
    let boysList = document.getElementById("boys");
    let allList = document.getElementById("all");
    
    boysList.appendChild(li.cloneNode(true));
    allList.appendChild(li.cloneNode(true));
});

//addgirl
document.getElementById("addgirl").addEventListener("click", function () {
    let name = document.getElementById("newgirl").value;
    girls.push(name);
    
    
    let li = document.createElement("li");
    li.innerHTML = name;
    
    let girlsList = document.getElementById("girls");
    let allList = document.getElementById("all");
    
    girlsList.appendChild(li.cloneNode(true));
    allList.appendChild(li.cloneNode(true));
});

//remove
document.getElementById("inputs").addEventListener("click", function (event) {
    var node = event.target.id;
    if(node === "first" || node === "last") {
        event.stopPropagation();
    }
    else {
        if(node === "removeboy") {
            var list = document.getElementById("boys");
            if(document.getElementById("first").checked) {
                boys.shift();
                list.removeChild(list.childNodes[0]);
                loadAll();
            } 
            else {
                boys.pop();
                list.removeChild(list.lastChild);
                loadAll();
            }
        } 
        else {
            var list = document.getElementById("girls");
            if(document.getElementById("first").checked) {
                girls.shift();
                list.removeChild(list.childNodes[0]);
                loadAll();
            } 
            else {
                girls.pop();
                list.removeChild(list.lastChild);
                loadAll();
            }
        }
    }
});

//reverse
document.getElementById("reverse").addEventListener("click", function (event) {
    event.stopPropagation();
    let all = boys.concat(girls);
    let reverse = all.reverse();
    document.getElementById("all").innerHTML = "<li>" + reverse.join("</li><li>") + "</li>";
});

//sort
document.getElementById("sort").addEventListener("click", function (event) {
    event.stopPropagation();
    let all = boys.concat(girls);
    all.sort(function(name1, name2) {
        if(name1.toLocaleLowerCase() < name2.toLocaleLowerCase()) return -1; 
        if(name1.toLocaleLowerCase() > name2.toLocaleLowerCase()) return 1; 
        return 0;
    });
    if(ascending) {
        all = all.reverse();
        ascending = false;
    } else {
        ascending = true;
    }
    document.getElementById("all").innerHTML = "<li>" + all.join("</li><li>") + "</li>";
});

