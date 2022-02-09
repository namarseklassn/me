let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response;
    const object = JSON.parse(result);
    const a = object.albums.map (albums => {
        return {
            title:albums.title,
        }
        }).sort ((t1,t2)=>{
            if(t1.title>t2.title){
                return 1
            } else if(t1.title<t2.title){
                return -1
            } else{
                return 0
            }
    });
    object.images.forEach(image=>{
        image.images = object.images.filter(w=>{
            if (w.width > '800px') 
            if (w.height > '800px');
        })
    });
    object.albums.forEach(userId=>{
        userId.users = object.users.filter(id =>
            id.id === userId.authorId )
    });
    object.albums.forEach(imgId=>{
        imgId.images = object.images.filter(img =>
            img.imageId === imgId.images)
    })

    // console.log(a)
    console.log(object);
};
xhr.onerror = function() {
  console.error("Запрос не удался");
};