let otset = 220;
let wood_set = 0;
let rock_set = 0;
let doski_set = 0;
let top2 = 0;
let pokupka = 0;


let timerId = setInterval(function(){
    if (otset > 0) {
        otset -= 1;
        document.querySelector('.otchet').innerHTML = otset;
    } else {
        clearInterval(timerId);
        document.querySelector('.otchet').innerHTML = 0;
        alert("На вас напали!")
    }
}, 1000);

document.querySelector('.podzkazka').onclick = function(){
    alert("Найди дерево или камень, и нажимай на него. Если дерево не добываеться, то нажимай на него с право стороны.")
}

document.querySelector('.wood_s').onclick = function(){
    wood_set += 1;
    document.querySelector('.wood-sc').innerHTML = wood_set;
    if(top2 > 0){
        wood_set += 1;
        document.querySelector('.wood-sc').innerHTML = wood_set;
    }
}

document.querySelector('.buy').onclick = function(){
    if(wood_set < 20){
        alert("Недостаточно дерева")
        return;
    }
    alert("Куплена кирка");
    wood_set -= 20;
    pokupka += 1;
    document.querySelector('.wood-sc').innerHTML = wood_set;
    document.querySelector('.kas').style.display = "flex";
    
}

document.querySelector('.buy-1').onclick = function(){
    if(wood_set < 20 || rock_set < 20){
        alert("Недостаточно материалов")
        return;
    }
    alert("Куплен Каменый Тапор")
    wood_set -= 20;
    rock_set -= 20;
    document.querySelector('.wood-sc').innerHTML = wood_set;
    document.querySelector('.rock-sc').innerHTML = rock_set;
    top2 += 1;
}

document.querySelector('.kas').onclick = function(){
    rock_set += 1;
    document.querySelector('.rock-sc').innerHTML = rock_set;
}

document.querySelector('.buy-2').onclick = function(){
    if(doski_set < 80 || rock_set < 70){
        alert("Недостаточно материалов")
        return;
    }
    alert("Вы купили башню")
    doski_set -= 80;
    rock_set -= 70;
    document.querySelector('.doski-sc   ').innerHTML = wood_set;
    document.querySelector('.rock-sc').innerHTML = rock_set;
    document.querySelector('.img-3').style.display = "flex";
}

document.querySelector('.buy-3').onclick = function(){
    if(wood_set < 2){
        alert("Недостаточно материалов")
        return;
    }
    wood_set -= 2;
    doski_set += 1;
    document.querySelector('.doski-sc').innerHTML = doski_set;
    document.querySelector('.wood-sc').innerHTML = wood_set;
}

document.querySelector('.img-5').onclcik = function(){
    document.querySelector('.img-6').style.display = "flex"
    document.querySelector('.img-5').style.display = "none"
}

document.querySelector('.img-6').onclcik = function(){
    document.querySelector('.img-5').style.display = "flex"
    document.querySelector('.img-6').style.display = "none"
}