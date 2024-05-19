document.getElementById("submit").addEventListener('click',function(){
    let x = Math.floor(100000*(Math.random()*6));
    let id;
    id = "AC"+x;
    console.log(id);

    document.getElementById("id_gen").textContent = id;
})