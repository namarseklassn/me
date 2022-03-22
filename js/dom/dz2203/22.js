function loadUser(page) {
    fetch(`http://randomuser.me/api/?page=${page}`)
.then(response=>response.json())
.then(json=>{
    console.log(json);
    let userImgEl =document.body.querySelector('.userImg');
    userImgEl.src = json.results[0].picture.medium;
    let userNameEl=document.body.querySelector('.userName');
    userNameEl.textContent=`${json.results[0].name.first} ${json.results[0].name.last }`
    let userEmailEl = document.body.querySelector('.userEmail');
    userEmailEl.textContent=json.results[0].email;
    window.json =json.results[0]; 
})
}
loadUser(1);
document.body.querySelector('.next').addEventListener('click', function(){
    let curr = Number.parseInt(this.dataset.page);
    this.dataset.page = curr +1;
    loadUser(curr+1);
})
document.body.querySelector('.add')
.addEventListener('click', function(){
    let tr = document.createElement('tr');
    let content = `<td><img src="${json.picture.medium}" alt="">
    </td>
    <td>${json.gender}</td>
    <td>ales me</td>`;
    tr.innerHTML = content;
    document.body.querySelector('tbody').append(tr);
})