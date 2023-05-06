var btn_posts= document.getElementById("posts");
var btn_reels= document.getElementById("reels");
var btn_saved= document.getElementById("saved");
var btn_tagged= document.getElementById("tagged");

var posts = document.getElementById("diva");
var reels = document.getElementById("divb");
var saved = document.getElementById("divc");
var tagged = document.getElementById("divd");

btn_posts.addEventListener('click',()=>{
    posts.style.display='block';
    reels.style.display='none';
    saved.style.display='none';
    tagged.style.display='none';
});

btn_reels.addEventListener('click',()=>{
    posts.style.display='none';
    reels.style.display='block';
    saved.style.display='none';
    tagged.style.display='none';
});

btn_saved.addEventListener('click',()=>{
    posts.style.display='none';
    reels.style.display='none';
    saved.style.display='block';
    tagged.style.display='none';
});

btn_tagged.addEventListener('click',()=>{
    posts.style.display='none';
    reels.style.display='none';
    saved.style.display='none';
    tagged.style.display='block';
});