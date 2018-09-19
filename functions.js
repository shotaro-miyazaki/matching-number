let box1 = Math.floor(Math.random()*3 + 1);
    document.write("first number「"+box1+"」");

let box2 = Math.floor(Math.random()*3 + 1);
    document.write("second number「 "+box2+" 」");

let box3 = Math.floor(Math.random()*3 + 1);
    document.write("third number"+box3+"」");

    if(box1 == box2 && box1 == box3){
        document.write("All numbers matched!");
    }else if(box1 == box2 || box1 == box3 || box2 == box3 ){
        document.write("Only 2 matched");
    }else{
        document.write("Nothing matched");
    }

window.onload = function () {

};
