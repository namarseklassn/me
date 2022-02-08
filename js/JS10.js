const request = new XMLHttpRequest();
request.open('GET', 'http://192.168.0.200:3000/1');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // const a = object.users.map (users => {
    //     return {
    //         name:users.name,
    //     }
    // }).sort((a1,a2)=> {
    //     if(a1.name>a2.name) {
    //         return 1
    //     } else if (a1.name<a2.name) {
    //         return -1
    //     }
    //     else{
    //         return 0
    //     }
    // });
    object.users.forEach(user => {
        user.posts = object.posts.filter(post=> post.userId == user.id)
    });
    object.posts.forEach(post=>{
       post.user = object.users.find(user=> user.id == post.userId)
    })
 console.log(object);
}
request.send();
console.log('Done');