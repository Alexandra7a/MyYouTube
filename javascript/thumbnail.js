console.log("bbsdh");

document.addEventListener("DOMContentLoaded", function() {
    LoadThumbnails();
});

function LoadThumbnails(){
    let array=new Array();
    for(var i=0;i<10;i++){
        array.push('2:00:00');
    }
    var elements = document.getElementsByClassName('thumbnail')
    //the elements from elements[] would be parents(where we want to insert);
    for (var i = 0; i < elements.length; i++) {
        let div = document.createElement("div"); 
        div.innerHTML=array[i];     

        div.classList.add("video-time"); 
        elements[i].appendChild(div);
    }
}