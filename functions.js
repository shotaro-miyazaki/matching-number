let box1 = Math.floor(Math.random()*3 + 1);
    document.write("1つ目の数字「"+box1+"」");

let box2 = Math.floor(Math.random()*3 + 1);
    document.write("2つ目の数字「 "+box2+" 」");

let box3 = Math.floor(Math.random()*3 + 1);
    document.write("3つ目の数字「"+box3+"」");

    if(box1 == box2 && box1 == box3){
        document.write("全ての数字が揃った");
    }else if(box1 == box2 || box1 == box3 || box2 == box3 ){
        document.write("おしい");
    }else{
        document.write("全然ダメ");
    }

window.onload = function () {

};
