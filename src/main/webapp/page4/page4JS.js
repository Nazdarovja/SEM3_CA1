document.getElementById("getUser").onclick = (e) => {
    e.preventDefault();
    var num = document.getElementById("number").value;
    getPerson(num);
};
document.getElementById("getAll").onclick = (e) => {
    e.preventDefault();
    getPersons();
};

function getPerson(num) {
    var url = "https://jsonplaceholder.typicode.com/users/";
    url += num;

    fetch(url)
            .then(res => res.json())
            .then(function (data) {
                document.getElementById("list").innerHTML = dataToList(data);

            }).catch(err => console.log("ERROR NAME : " + err));
}

function dataToList(data) {
    var doneList = "<ul>";
    doneList += "<li>Name: " + data.name + "</li>";
    doneList += "<li>Phone: " + data.phone + "</li>";
    doneList += "<br>";
    doneList += "<li>" + "Address".bold() + "</li>";
    doneList += "<li>Street: " + data.address.street + "</li>";
    doneList += "<li>City: " + data.address.city + "</li>";
    doneList += "<li>Zip: " + data.address.zipcode + "</li>";
    doneList += "<li>Geo (lat,lng): " + data.address.geo.lat + ", " + data.address.geo.lng + "</li>";
    doneList += "</ul>";
    return doneList;
}

function dataToTable(data){
    var ids = ["<tr><th>Name".bold()+"</th>","<th>Phone".bold()+"</th></tr>"];
    var doneList = data.map( (p)=> "<tr><td>"+p.name+"</td><td>"+p.phone+"</td></tr>");
    doneList.unshift(ids);
    doneList.unshift("<table>");
    doneList.push("</table>");
    var strList = doneList.join("");
    console.log(strList);
    return strList;
}

function getPersons() {
    var url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
            .then(res => res.json())
            .then(function (data) {
                document.getElementById("table").innerHTML = dataToTable(data);

            }).catch(err => console.log("ERROR NAME : " + err));
}