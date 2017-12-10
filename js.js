
var 
    topmenu = document.getElementById("topmenu"),
    bottmenu = document.getElementById("botmenu"),
    
    rulesbut = document.getElementById("rulesbut"),
    createbut = document.getElementById("createbut"),
    fieldbut = document.getElementById("fieldbut"),
    fifabut = document.getElementById("fifabut"),
    ballbut = document.getElementById("ballbut"),
    tvbut = document.getElementById("tvbut"),
    
    rulestext = document.getElementById("rulestext"),
    fieldtext = document.getElementById("fieldtext"),
    createtext = document.getElementById("createtext"),
    playername = document.getElementById("playername"),
    
    fieldimg = document.getElementById("fieldimg"),
    fifaimg = document.getElementById("fifaimg"),
    createimg = document.getElementById("createimg"),
    
    popup = document.getElementById("popup"),
    closebut = document.getElementById("close"),
    textheader = document.getElementById("header"),
    
    vidbody = document.getElementById("vidbody"),

    firstcont = document.getElementById("firstcont"),
    seccont = document.getElementById("secondcont"),
    thirdcont = document.getElementById("thirdcont"),
    fourthcont = document.getElementById("fourthcont"),
    botbar = document.getElementById("bottombar")


function rotate(id, degree){
    if(navigator.userAgent.match("Chrome")){
            id.style.WebkitTransform = "rotate(" + degree + "deg)";
        }else if(navigator.userAgent.match("Safari")){
            id.style.MozTransform = "rotate(" + degree + "deg)";
        }else if(navigator.userAgent.match("Firefox")){
            id.style.MozTransform = "rotate(" + degree + "deg)";
        }else if(navigator.userAgent.match("MSIE")){
            id.style.msTransform = "rotate(" + degree + "deg)";
        }else if(navigator.userAgent.match("Opera")){
            id.style.OTransform = "rotate(" + degree + "deg)";
        }else {
            id.style.Transform = "rotate(" + degree + "deg)";
        };
    }




//-----------------------MENU FUNCTIONS----------------------//
function menuopen(){
    rulesbut.style.display = "inline-block"
    createbut.style.display = "inline-block"
    fieldbut.style.display = "inline-block"
    fifabut.style.display = "inline-block"
    ballbut.style.display = "inline-block"
    tvbut.style.display = "inline-block"
    
    while(topMheight < 100){
        topMheight += 1;
        topmenu.style.height = topMheight + '%';
    }
    while(botMheight < 100){
        botMheight += 1;
        botmenu.style.height = botMheight + '%';
    }
    setTimeout(butPop1, 500)
    function butPop1(){
        rulesbut.style.opacity = 0.8;
        createbut.style.opacity = 0.8;
    }
    setTimeout(butPop2, 800)
    function butPop2(){
        fieldbut.style.opacity = 0.8;
        fifabut.style.opacity = 0.8;
    }
    setTimeout(butPop3, 1100)
    function butPop3(){
        ballbut.style.opacity = 0.8;
        tvbut.style.opacity = 0.8;
    }
}

var topMheight = 0,
    botMheight = 0

function menuclose(){
    rulesbut.style.opacity = 0;
    rulesbut.style.display = "none"
    
    createbut.style.opacity = 0;
    createbut.style.display = "none"
    
    fieldbut.style.opacity = 0;
    fieldbut.style.display = "none"
    
    fifabut.style.opacity = 0;
    fifabut.style.display = "none"
    
    ballbut.style.opacity = 0;
    ballbut.style.display = "none"
    
    tvbut.style.opacity = 0;
    tvbut.style.display = "none"
    
    while(topMheight > 0){
        topMheight -= 1;
        topmenu.style.height = topMheight + '%';
    }
    
    while(botMheight > 0){
        botMheight -= 1;
        botmenu.style.height = botMheight + '%';
    }
}


//-------------------------button functions----------------------------//

var header = [' ', 'BASIC RULES', 'FIELD', 'HIGHLIGHTS', 'FIFA WORLD CUP RANKINGS', 'WHO ARE YOU?'],
    
    ruleshtml = '1. Ball to hand = Legal, Hand to ball = Illegal. <br><br>2. Matches are 90 minutes long plus additional time.<br><br>3. Each team can only have 11 people on the field at one time.<br><br>4. Balls must be spherical and a circumference of 69-71cm. (27-28inches)<br><br>5. Players must wear a jersey, shorts, shin guards, socks and cleats. Socks must cover the shin guards completely.<br><br>6. Yellow cards are awarded as a warning for minor offences.<br><br> 7. Red cards are for serious offences or when 2 yellow cards are achieved. The player is sent off from the game.<br><br> 8. The ball is out of play when it fully crosses either the goal line or the touch line. It is also out of play if the referee stops play for any reason.<br><br>9. A goal is scored when the entire ball has crossed the goal line within the frame of the goal. At the end of the match, the team with the most goals is the winner.<br><br>10. When an attacking player receives the ball while on his opponents half, he must be level or behind the second to last defender (the last typically being the goalkeeper). However, this rule only applies if he is involved with the play.<br><br>11. A goal kick is awarded when the offensive team plays the ball out of bounds over the defensive team’s goal line. After the ball is out of play, the defender or goalkeeper may place the ball anywhere within the six-yard goal box and kick the ball back into play.<br><br>12. A corner kick is awarded to the offensive team when the defensive team plays the ball out of bounds over its goal line. The ball is placed within the corner area and is kicked back into play by the offensive team. Players can score directly off a corner kick.<br><br>13. A throw-in is awarded when the possessing team plays the ball out of bounds over the touchline. While taking a throw-in, a player must release the ball with both hands with both feet on the ground. If not, then play is stopped and the throw-in is given to the opposing team. Players are not allowed to score directly off a throw-in.',
    
    fieldhtml = 'Striker:<br>Offensive position whose main role is to score goals; this player plays a forward position in the opposing team\'s zone.<br><br>Forward:<br>Offensive position usually placed behind the striker; this player uses speed to make crisp accurate passes.<br><br>Defensive Mid:<br>Center position; this player tries to take the ball from the opponent before that player reaches the defenders and quickly mount a counterattack.<br><br>Midfield:<br>Center position that uses playmaking skills to pass the ball to the forwards.<br><br>Back:<br>Defensive position. This player\'s main role is to slow or stop an opponent\'s progress toward the goal<br><br>Stopper:<br>Position that stays back, marks an opposing forward and prevents that player from being in a scoring position.<br><br>Sweeper:<br>Position that stays back, anticipates defensive mistakes by teammates and makes up for them; this player is not required to closely mark an opposing player.<br><br>Goalie:<br>Position whose role is to prevent the ball from entering the goal; this is the only player allowed to touch the ball with the hands.<br><br>',
    
    createhtml = 'Input your information to see your superstar counterpart!'
    

function hoverin(elem){
    elem.style.backgroundColor = "black";
}

function hoverout(elem){
    elem.style.backgroundColor = "rgb(" + 250 + "," + 250 + "," + 250+ ")";
}

function showrules(){
    rulestext.style.display = "block";
    rulestext.innerHTML = ruleshtml;
    setTimeout(function(){
        rulestext.style.opacity = 1;
    }, 20);
}

function showfield(){
    fieldimg.style.display = 'block';
    fieldtext.style.display = 'block';
    fieldtext.innerHTML = fieldhtml;
    setTimeout(function(){
        fieldtext.style.right = 5 + "%";
        fieldimg.style.left = 0 + "%";
    }, 20);
}

function showtv(){
    vidbody.style.display = 'block';
    vidbody.src = 'https://www.youtube.com/embed/zoGo2uujvtI';
}

function showfifa(){
    document.getElementById("cupcont").style.display = 'inline-block';
    fifaimg.style.display = 'block';
    setTimeout(function(){
        firstcont.style.width = 100 + "%"
    }, 100);
    setTimeout(function(){
        seccont.style.width = 100 + "%"
    }, 170);
    setTimeout(function(){
        thirdcont.style.width = 100 + "%"
    }, 240);
    setTimeout(function(){
        fourthcont.style.width = 100 + "%"
    }, 310);

    var barwidth = 0
    botbar.style.display = "block";
    setTimeout(function(){
            botbar.style.width = 100 + '%';
    }, 50);
    setTimeout(function(){
        document.getElementById("fifalink").style.display = "block";
        document.getElementById("fifalink").style.opacity = 1;
        document.getElementById("Lfifatag").style.opacity = 1;
        document.getElementById("Rfifatag").style.opacity = 1;
    }, 500);
}

function showcreate(){
    var Ipos = document.getElementById("positioninput"),
        Iage = document.getElementById("inputage"),
        Oage = [],
        Cage = [],
        Dage = [],
        Gage = []
    
    createimg.style.display = 'block';
    createtext.style.display = 'block';
    playername.style.display = 'block';
    document.getElementById("inputcont").style.display = 'block';
    document.getElementById("statscont").style.display = 'block';
    document.getElementById("statsbut").style.display = 'block';
    document.getElementById("stattext").style.display = 'block';
    createtext.innerHTML = createhtml;

    
    document.getElementById("getplayer").addEventListener("click",function(){
        if(Ipos.value == 'offence'){
            if(parseInt(Iage.value) >= 10 && parseInt(Iage.value) < 20){
                createimg.style.backgroundImage = "url(img/players/oy.jpg)";
                playername.innerHTML = "You are: Vinicius Junior of Brazil";
                Oage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 20  && parseInt(Iage.value) < 30){
                createimg.style.backgroundImage = "url(img/players/om.jpg)";
                playername.innerHTML = "You are: Neymar Junior of Brazil";
                Oage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 30  && parseInt(Iage.value) < 36){
                createimg.style.backgroundImage = "url(img/players/oo.jpg)";
                playername.innerHTML = "You are: Cristiano Ronaldo of Portugal";
                Oage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 37){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO OLD";
            }else if(parseInt(Iage.value) < 10){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO YOUNG";
            }else if(Iage.value == ""){
                alert("Enter an age");
            }
        }else if(Ipos.value == "center"){
            if(parseInt(Iage.value) >= 10 && parseInt(Iage.value) < 20){
                createimg.style.backgroundImage = "url(img/players/my.jpg)";
                playername.innerHTML = "You are: Christian Pulisic of USA";
                Cage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 20  && parseInt(Iage.value) < 30){
                createimg.style.backgroundImage = "url(img/players/cm.jpg)";
                playername.innerHTML = "You are: Lorenzo Insigne of Italy";
                Cage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 30  && parseInt(Iage.value) < 36){
                createimg.style.backgroundImage = "url(img/players/co.jpg)";
                playername.innerHTML = "You are: Andrea Pirlo of Italy";
                Cage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 37){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO OLD";
            }else if(parseInt(Iage.value) < 10){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO YOUNG";
            }else if(Iage.value == ""){
                alert("Enter an age");
            }
        }else if(Ipos.value == "defence"){
            if(parseInt(Iage.value) >= 10 && parseInt(Iage.value) < 20){
                createimg.style.backgroundImage = "url(img/players/dy.jpg)";
                playername.innerHTML = "You are: Theo Hernandez of France";
                Dage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 20  && parseInt(Iage.value) < 30){
                createimg.style.backgroundImage = "url(img/players/dm.jpg)";
                playername.innerHTML = "You are: Danny Rose of England";
                Dage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 30  && parseInt(Iage.value) < 36){
                createimg.style.backgroundImage = "url(img/players/do.jpg)";
                playername.innerHTML = "You are: David Luiz of Brazil";
                Dage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 37){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO OLD";
            }else if(parseInt(Iage.value) < 10){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO YOUNG";
            }else if(Iage.value == ""){
                alert("Enter an age");
            }
        }else if(Ipos.value == "goalie"){
            if(parseInt(Iage.value) >= 10 && parseInt(Iage.value) < 20){
                createimg.style.backgroundImage = "url(img/players/gy.jpg)";
                playername.innerHTML = "You are: Timo Horn of Germany";
                Gage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 20  && parseInt(Iage.value) < 30){
                createimg.style.backgroundImage = "url(img/players/gm.jpg)";
                playername.innerHTML = "You are: David de Gea of Spain";
                Gage.push(parseInt(Iage.value));;
            }else if(parseInt(Iage.value) >= 30  && parseInt(Iage.value) < 36){
                createimg.style.backgroundImage = "url(img/players/go.jpg)";
                playername.innerHTML = "You are: Tim Howard of USA";
                Gage.push(parseInt(Iage.value));
            }else if(parseInt(Iage.value) >= 37){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO OLD";
            }else if(parseInt(Iage.value) < 10){
                createimg.style.backgroundImage = "url(img/players/none.png)";
                playername.innerHTML = "You are: TOO YOUNG";
            }else if(Iage.value == ""){
                alert("Enter an age");
            }
        }
        var arrTextOage = JSON.stringify(Oage),
            arrTextCage = JSON.stringify(Cage),
            arrTextDage = JSON.stringify(Dage),
            arrTextGage = JSON.stringify(Gage)
        localStorage.setItem("Oage", arrTextOage);
        localStorage.setItem("Cage", arrTextCage);
        localStorage.setItem("Dage", arrTextDage);
        localStorage.setItem("Gage", arrTextGage);
    })
    document.getElementById("statsbut").addEventListener("click",function(){

        var arrTextOage = localStorage.getItem("Oage"),
            arrTextCage = localStorage.getItem("Cage"),
            arrTextDage = localStorage.getItem("Dage"),
            arrTextGage = localStorage.getItem("Gage")
        
        Oage = JSON.parse(arrTextOage)
        Cage = JSON.parse(arrTextCage)
        Dage = JSON.parse(arrTextDage)
        Gage = JSON.parse(arrTextGage)
        
        var Ototal = 0,
            Ctotal = 0,
            Dtotal = 0,
            Gtotal = 0
        
        for(var i = 0; i < Oage.length; i++) {
            Ototal += Oage[i];
        }
        for(var i = 0; i < Cage.length; i++) {
            Ctotal += Cage[i];
        }
        for(var i = 0; i < Dage.length; i++) {
            Dtotal += Dage[i];
        }
        for(var i = 0; i < Gage.length; i++) {
            Gtotal += Gage[i];
        }
        var Oavg = Math.round(Ototal / Oage.length),
            Cavg = Math.round(Ctotal / Cage.length),
            Davg = Math.round(Dtotal / Dage.length),
            Gavg = Math.round(Gtotal / Gage.length)
        
        if(Oage.length == 0){
            Oavg = "Non-existent"
        }if(Cage.length == 0){
            Cavg = "Non-existent"
        }if(Dage.length == 0){
            Davg = "Non-existent"
        }if(Gage.length == 0){
            Gavg = "Non-existent"
        }
        
        document.getElementById("stattext").innerHTML = "The average age of the offensive positions is: " + Oavg + "<br><br>The average age of the Center positions is: " + Cavg + "<br><br>The average age of the Defencive position is: " + Davg + "<br><br>The average age of the Goalie position is: " + Gavg + "<br><br>"
    })
}
function open(elem){
    var index = 0
    popup.style.width = 80 + 'vw';
    popup.style.height = 70 + 'vh';
    closebut.style.display = "block";
    
    if(elem == rulesbut){
        index = 1;
        showrules();
        
    }else if(elem == fieldbut){
        index = 2;
        showfield();
     
    }else if(elem == tvbut){
        index = 3;
        showtv();

    }else if(elem == fifabut){
        index = 4;
        showfifa();

    }else if(elem == createbut){
        index = 5;
        showcreate();
    }
    
    textheader.innerHTML = header[index];
    menuclose();
    close();
}

function close(){
    closebut.addEventListener('click', function(){
        popup.style.width = 0;
        popup.style.height = 0;
        closebut.style.display = "none";
        
        textheader.innerHTML = header[0];

        rulestext.style.display = "none";
        fieldimg.style.display = 'none';
        fieldtext.style.display = 'none';
        
        vidbody.style.display = 'none';
        vidbody.src = "";
        
        document.getElementById("inputcont").style.display = 'none';
        document.getElementById("cupcont").style.display = 'none';
        fifaimg.style.display = 'none';
        
        document.getElementById("cupcont").style.display = 'none';
        document.getElementById("bottombar").style.display = 'none';
        firstcont.style.width = 0;
        seccont.style.width = 0;
        thirdcont.style.width = 0;
        fourthcont.style.width = 0;
        document.getElementById("bottombar").style.width = 0;
        document.getElementById("fifalink").style.opacity = 0;
        document.getElementById("Lfifatag").style.opacity = 0;
        document.getElementById("Rfifatag").style.opacity = 0;
        
        createtext.style.display = "none"
        document.getElementById("inputcont").style.display = 'none';
        document.getElementById("statscont").style.display = 'none';
        document.getElementById("stattext").style.display = 'none';
        document.getElementById("statsbut").style.display = 'none';
        
        menuopen();
    });
};

//-------------------------BALL + BALL GAME----------------------------//

var ball = document.getElementById("ball"),
    topleft = document.getElementById("topleft"),
    topmid = document.getElementById("topmid"),
    topright = document.getElementById("topright"),
    botleft = document.getElementById("botleft"),
    botmid = document.getElementById("botmid"),
    botright = document.getElementById("botright"),
    score = document.getElementById("goalcount"),
    nottarget = document.getElementById("net"),
    miss = document.getElementById("notgoal"),
    
    goal = 'true',
    goalcount = 0,
    targetpos = {
        1: topleft,
        2: topmid,
        3: topright,
        4: botleft,
        5: botmid,
        6: botright,
    };

function ballkick(time, bot, left, degree){
    ball.style.transition = time + 's';
    ball.style.bottom = bot + '%';
    ball.style.left = left + '%';
    rotate(ball, degree);
}
function ballscale(width, height){
    ball.style.width = width + 'px';
    ball.style.height = height + 'px';
}

function Startballgame(){
    score.style.display = "block";
    setTimeout(gettarget(),2000);
}

function gettarget(){
    randompos = Math.floor(Math.random() * (6 - 1) + 1);
    targetlocation = targetpos[randompos];
    targetlocation.style.display = 'block';
    targetlocation.style.backgroundImage = "url(img/target.png)";
    setTimeout(function(){
        ballscale(300, 300)
        ball.style.display = "block";
        ballkick(0, -50, 0, 0);
    }, 350)

    
    targetlocation.addEventListener("click",function(){
        
        if(randompos == 1){
            ballkick(0.2, 53, -23.5, 360);
            ballscale(50, 50);
            setTimeout(function(){
                ball.style.display = "none";
            }, 300);
        }else if(randompos == 2){
            ballkick(0.2, 53, 0, 360);
            ballscale(50, 50);
            setTimeout(function(){
                ball.style.display = "none";
            }, 300);
        }else if(randompos == 3){
            ballkick(0.2, 53, 23, 360);
            ballscale(50, 50);
            setTimeout(function(){
                ball.style.display = "none";
            }, 300);
        }else if(randompos == 4){
            ballkick(0.2, 40, -23.5, 360);
            ballscale(50, 50);
            setTimeout(function(){
                ball.style.display = "none";
            }, 300);
        }else if(randompos == 5){
            ballkick(0.2, 40, 0, 360);
            ballscale(50, 50);
            setTimeout(function(){
                ball.style.display = "none";
            }, 300);
        }else if(randompos == 6){
            ballkick(0.2, 40, 23, 360);
            ballscale(50, 50);
            setTimeout(function(){
                ball.style.display = "none";
            }, 300);
        };
        
        targetlocation.style.display = 'none';
        goalcount += 1;
        score.innerHTML = goalcount;
        gettarget();  
        }, {once:true});
    
    miss.addEventListener("click",function(){
        targetlocation.style.backgroundImage = "url('img/X.png')";
        goalcount = 0;
        setTimeout(function(){
            score.innerHTML = 0;
            score.style.display = "none";
            targetlocation.style.backgroundImage = "none";
            targetlocation = score;
            menuopen();
            targetlocation = ""
            ballkick(1.5, 5, 0, 300);
            ballscale(100, 100);
        },500);
    }, {once:true});
    
    nottarget.addEventListener("click",function(){
        targetlocation.style.backgroundImage = "url('img/X.png')";
        goalcount = 0;
        setTimeout(function(){
            score.innerHTML = 0;
            score.style.display = "none";
            targetlocation.style.backgroundImage = "none";
            targetlocation = score;
            menuopen();
            targetlocation = ""
            ballkick(1.5, 5, 0, 300);
            ballscale(100, 100);
        },500);
    }, {once:true});
}

//-------------------------On Load----------------------------//


window.onload = function(){
    ballkick(1, 5, 0, 0)
    menuopen()
};
        

//-------------------------RULES----------------------------//

rulesbut.addEventListener("mouseover", function(){
    hoverin(rulesbut);
});

rulesbut.addEventListener("click", function(){
    open(rulesbut);
});

rulesbut.addEventListener("mouseout", function(){
    hoverout(rulesbut);
});



//-------------------------FIELD----------------------------//

fieldbut.addEventListener("mouseover", function(){
    hoverin(fieldbut);
});

fieldbut.addEventListener("click", function(){
    open(fieldbut);
});

fieldbut.addEventListener("mouseout", function(){
    hoverout(fieldbut);
});

//-------------------------BALL----------------------------//

ballbut.addEventListener("mouseover", function(){
    hoverin(ballbut);
});

ballbut.addEventListener("click", function(){
    menuclose();
    ballkick(0.4, 110, 0, 360);
    ballscale(0, 0)
    Startballgame();
});

ballbut.addEventListener("mouseout", function(){
    hoverout(ballbut);
});

//-------------------------TV----------------------------//

tvbut.addEventListener("mouseover", function(){
    hoverin(tvbut);
});

tvbut.addEventListener("click", function(){
    open(tvbut);
});

tvbut.addEventListener("mouseout", function(){
    hoverout(tvbut);
});

//-------------------------FIFA----------------------------//

fifabut.addEventListener("mouseover", function(){
    hoverin(fifabut);
});

fifabut.addEventListener("click", function(){
    open(fifabut);
});

fifabut.addEventListener("mouseout", function(){
    hoverout(fifabut);
});

//-------------------------CREATE----------------------------//

createbut.addEventListener("mouseover", function(){
    hoverin(createbut);
});

createbut.addEventListener("click", function(){
    open(createbut);
});

createbut.addEventListener("mouseout", function(){
    hoverout(createbut);
});


