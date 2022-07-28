// //0.選取所有的theme元素
// const themes = document.querySelectorAll('.theme');

// let themeChoosen;
// let themeMsg = "classic";
// let themeTOGO;

// //0.5.監聽click事件，發生就執行chooseTheme()
// themes.forEach(t => t.addEventListener('click',gotoTheme));

// //1.取按鈕id + 轉向
// function gotoTheme(){
//     themeChoosen = this;
//     // themeMsg = themeChoosen.value;
//     // document.getElementById("test").innerHTML = `${themeMsg}`; 
    
//     document.getElementById("test").innerHTML = `${themeChoosen.id}`; 

//     if(themeChoosen.value == "classic"){
//         themeTOGO = "classic";
//     }else if (themeChoosen.id == "doggo"){
//         themeTOGO = "doggo";
//     }else if (themeChoosen.id == "cat"){
//         themeTOGO = "cat";
//     }else if (themeChoosen.id == "apple"){
//         themeTOGO = "apple";
//     }else if (themeChoosen.id == "meme"){
//         themeTOGO = "meme";
//     }

//     document.location.href="MemoryGame.html"+"?theme="+themeTOGO;
    
    
// }

let murmurMsg = "";
let time = 0;

(function murmur(){  
    msg = setInterval(() => {
        time ++;
        if (time%20==0){
            document.getElementById("murmur").innerHTML = `omega-3脂肪酸\n有益預防記憶衰退`;
        }else if (time%16==0){
            document.getElementById("murmur").innerHTML = `維持社交活動，\n有助保持大腦健康`;
        }else if (time%12==0){
            document.getElementById("murmur").innerHTML = `大腦和肌肉一樣，\n用進廢退`;
        }else if(time%8==0){
            document.getElementById("murmur").innerHTML = `每週運動4~5次可以\n降低阿茲海默症風險`;
        }else if (time%4==0){
            document.getElementById("murmur").innerHTML = `慢性或持續壓力\n會使大腦神經細胞死亡`;
        }
        
    }, 1000);  
})();  


