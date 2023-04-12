

    let butn_on_off = false;

    function menuFunction(){
        let div_1 = document.getElementById("menuHome");
        let div_2 = document.getElementById("menuAbout");
        let div_3 = document.getElementById("menuSkills");
        let div_4 = document.getElementById("menuProject");
        let div_5 = document.getElementById("menuStat");
        let div_6 = document.getElementById("menuContact");
        
        
        
        if(butn_on_off){
            butn_on_off = false;
            div_1.style.transform = "translate(0,0)";
            div_2.style.transform = "translate(0,0)";
            div_3.style.transform = "translate(0,0)";
            div_4.style.transform = "translate(0,0)";
            div_5.style.transform = "translate(0,0)";
            div_6.style.transform = "translate(0,0)";
            
        }else{
            butn_on_off = true;
            div_1.style.transform = "translate(-14vw,0)";
            div_2.style.transform = "translate(-14vw,0)";
            div_3.style.transform = "translate(-14vw,0)";
            div_4.style.transform = "translate(-14vw,0)";
            div_5.style.transform = "translate(-14vw,0)";
            div_6.style.transform = "translate(-14vw,0)";
        }
            
        
    }