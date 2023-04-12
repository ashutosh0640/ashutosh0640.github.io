let butn_on_off = false;

function menuBtn(){
    let div_1 = document.getElementById("divOne");
    let div_2 = document.getElementById("divTwo");
    let div_3 = document.getElementById("divThree");
    let div_4 = document.getElementById("divFour");
    let div_5 = document.getElementById("divFive");
    
    
    if(butn_on_off){
        butn_on_off = false;
        div_1.style.transform = "translate(0,0)";
        div_2.style.transform = "translate(0,0)";
        div_3.style.transform = "translate(0,0)";
        div_4.style.transform = "translate(0,0)";
        div_5.style.transform = "translate(0,0)";
        
        
        
    }else{
        butn_on_off = true;
        div_1.style.transform = "translate(-10vw,0)";
        div_2.style.transform = "translate(-10vw,0)";
        div_3.style.transform = "translate(-10vw,0)";
        div_4.style.transform = "translate(-10vw,0)";
        div_5.style.transform = "translate(-10vw,0)";
    }
    
}