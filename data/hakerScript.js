//haker code
global_object: {
 var G = {} //
        "use strict";
        G.Q = A_; // question object
        G.css = {};
        G.css.font_0 = "consolas"// "Miriam Fixed"//"Lucida Sans Typewriter"; "Miriam Fixed"   // Lucida Con sole
        G.css.typeSolution = "";
        G.css.textcolor = "#21DF25"; // shoul be in hex
        G.css.mouseOnTimer = 2000;
        G.css.isMouseOutTimer = false;
        G.css.lastHoverEvent = 0;
        G.css.backGroundtextcolor = 'black'
        G.css.textFontSize = 2;
        G.css.resizeFontScale = 0.6;
        G.css.canvasBackground = "#00284d";
        G.css.breakAfterQuestion = '<br><br><br>'
        G.mgmt = {};
        G.mgmt.solutionCol = 8;
        G.mgmt.isAnswering = false;
        G.mgmt.mouseIsOver = 0;
        G.mgmt.qNumber = 0; // question number
        /* STAGE */
        G.mgmt.stageNumber = 4; //the stage number to begin /* safd */
        G.mgmt.stageNames = ["",'getIp','firewall','user','virus', 'server'];
        G.mgmt.stagesInfo = {
            'getIp' : 'למציאת כתובת הרשת ',
            'firewall': ' לזיהוי חולשות בחומת האש',
            'user' : ' לחדירה למערכת באמצעות שם משתמש',
            'server': '',
            'virus': '',

        }
        G.mgmt.stage = G.mgmt.stageNames [G.mgmt.stageNumber];
        G.mgmt.clickedAnswer = 0;
        G.mgmt.isQuestion = false;
        G.mgmt.isHolo = false// is the holo up
        G.mgmt.maxIpsTofind = 3;
        G.mgmt.maxFirewallTofind = 5;
        G.mgmt.maxFormTofind = 5;
        G.mgmt.isFinalAnsInChapter = false;
        G.mgmt.nextStage = function () {G.mgmt.stageNumber++ ; G.mgmt.stage = G.mgmt.stageNames [G.mgmt.stageNumber]; G.hacks.current = G.mgmt.stage ; G.hacks.numOfsuccess = 0 ;  }
        G.divs = {};
        G.hacks = {};
        G.hacks.numOfsuccess = 0;
        G.hacks.current = G.mgmt.stageNames // getIp // firewall
        G.hacks.firewallCodeId = 'FWhacksId';
        G.hacks.firewallFinishText = 'ההגנה נעקפה.'
        G.hacks.firewallScrambleColor = 'yellow'
        G.hacks.ipLocations = [];
        G.testMode = true
      }
util_functions: {
    function L (...args){
        let txtcolor1 = 'black';
        let txtcolor2 = 'blue';
        let colorForText = 'green';
        let colorForNumber = 'purple';
        let colors = ['#FAF1E1','#F2EAC1','#F5EAD1', '#F1FFDA ', '#DFEFFF','#E4DFFF', '#FDDFCD', '#FFEAEF']
        let rnd = getRandomInt(colors.length) -1;
        var styles = ['background:' + colors [rnd], 'color: black', 'font-size:14px', 'line-height: 14px', 'font-weight: regular', ' display: inline-block' , 'border: 0px solid ' + colors [rnd], 'position:fixed', 'left:300px'].join(';');
        var style1 = styles + '; color:' + txtcolor1;
        var style2 = styles + '; color:' + txtcolor2;
        var styleText = styles + '; color:' + colorForText;
        let t = [] ;  let  specialStyle = [] ; let objects_array = [];
        for (i = 0; i < 40; i ++){t[i]=''; specialStyle[i]= ''}
        let n = 0;
        args.forEach((a)=>{
            if (a === undefined){a = 'undefined'}
            if (typeof a === 'object' || typeof a === 'function') {objects_array.push(a)  ;return}

            t[n] = '%c'+ a ; n++
            let evl = '%c, ';
            try { if (typeof a === 'number') {throw 'd'}
                evl = '%c = '  + eval(a)+ ', '}
            catch { if (typeof a === 'string' && a !== '') {
                specialStyle[n-1] = styleText;
            } }
            t[n] = evl;
            ;n++
        });
        let fulltxt = t.join('')
        let cssN = n;
        for (i = 0; i < (cssN); i +=2){
            if (specialStyle[i] === ''){t[i] = style1;} else { t[i] = specialStyle[i]}
            t[i + 1] = style2
        }

        console.group (fulltxt,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[12],t[14]);
        objects_array.forEach((a)=>{
            let inf = ''
            let stl = ''
            if (Array.isArray(a)){inf = '%c【】%o'; stl = styleText + '; font-size:17px; color: blue'} else
            if (typeof a === 'function'){inf = '%c ➡️ %o'; stl = styleText + '; font-size:14px'} else
            if (typeof a === 'object'){inf = '%c 🅾 %o'; stl = styleText + '; font-size:14px'}



            console.log (inf,stl,a)
        })
        console.groupEnd('');


        //console.log('%c this is texxt %o',styleText, {a:'1', 'sss': 2})



    }
    function test (typ){
        switch (typ) {
            case 'holo':
            G.divs.ipadContainer.style.top = "10%"
            let fakeevent = {}
            fakeevent.type = "click";
            ledEvent (fakeevent);
            break;
            case "right":
            IpadGrahpic ('right');
            break;

        }

    }
    function Is (obj){

          try {
            let rt = obj instanceof HTMLElement;

            return rt

          }
          catch(e){
            let  rt2 = (typeof obj==='object') &&
              (obj.nodeType===1) && (typeof obj.style === "object") &&
              (typeof obj.ownerDocument ==="object");

              return rt2;
          }
    }
    function Elm(idname, type0){
        let testIt = Id(idname);
        if (Is(testIt)) return testIt;
        type0 = type0 || 'div'
        let newElem = document.createElement(type0);
        newElem.id = idname;
        return newElem

    }
    function Id(TheID){
        return document.getElementById(TheID);
    };
    function stl(p_elem, p_styles, p_styles2 = {}) {
        let x;
        for (x in p_styles) {
            p_elem.style[x] = p_styles[x];
        }
        for (x in p_styles2) {
            p_elem.style[x] = p_styles2[x];
        }
        p_elem.draggable = false; // maybye cancell ??
        p_elem.onselectstart = function(){ return false };
    }
    function Pre2Num (precent){
        // this function convert precent text to number
        return Number(precent.replace("%", ''))
    }
    function mOverAnswer (elem){
        function mouseOutTimer () {

            if (G.css.isMouseOutTimer){true}
            G.css.isMouseOutTimer = true
            G.mgmt.mouseIsOver = 0;
            function mOut (elem){
                if (G.mgmt.isAnswering){return}

                //    let ansId = elem.target.id;
                //    let ansDiv = Id(ansId);
                //    let numOfans =  Number(ansId.replace("ans", ''))
                //    let html = ansDiv.innerHTML;
                //ansDiv.innerHTML = G.Q[G.mgmt.qNumber][numOfans + 2] // newHtml;
                for (let i = 1; i < 5; i++) {
                    //if (i == numOfans) {continue}
                    if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
                }


            }

            G.css.mouseOnTimer = G.css.mouseOnTimer - 100
            if (G.css.mouseOnTimer < 0){mOut () ;G.css.isMouseOutTimer = false; return }

            setTimeout(()=>{mouseOutTimer ()},100)

        }
        if (G.mgmt.isAnswering){return};
        let ansId = elem.target.id;
        let ansDiv = Id(ansId);
        let numOfans =  Number(ansId.replace("ans", ''))
        G.mgmt.mouseIsOver = numOfans;
        if (G.mgmt.isAnswering && G.mgmt.clickedAnswer == numOfans){return}
        if (numOfans === 0){return}

        G.css.lastHoverEvent = numOfans;
        let html = G.Q[G.mgmt.qNumber][numOfans + 2];
        let newHtml = "<span style='background-color:" +  G.css.textcolor + "; color : " + G.css.backGroundtextcolor + "'>" + html + "</span>";
        ansDiv.innerHTML = newHtml;

        for (let i = 1; i < 5; i++) {
            if (i == numOfans) {continue}
            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
        }
        G.css.mouseOnTimer = 2000;
        if (G.css.isMouseOutTimer) {return}

        mouseOutTimer ();

    }
    function getRandomInt(max) {
        return (Math.floor(Math.random() * Math.floor(max))) + 1
    }
    function sinusOne (num){ // gets sinus function results from 0 to 1
        let r =  Math.round(Math.sin(num/10)*100 + 100)/200
        return r;
    }
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    function myStyle (style) {
        let obj = {}
        switch (style) {
            case 'text':
            obj = {
                'fontSize': '4vmax',
                'fontSize': '4vmin',
                'fontFamily':G.css.font_0,
                'textAlign': 'right',
                 'direction': 'rtl',
                'color': G.css.textcolor,
                'fontWeight':'',

            }
            break;
            case 1:
            obj = {
                "backgroundSize": "100%",
                "backgroundRepeat": "no-repeat",
                'overflow':'hidden',
                'opacity': '1',
            }
            break;

        }
        return obj
    }
    function StylelFader (element,ms = 30,fadeIn = false, deleteElm = false)  {


        if (fadeIn) {element.fadeProccess = 'fadeIn'} else if (!fadeIn) {element.fadeProccess = 'fadeOut' }



        var op = 1;  // initial opacity

        let finOp = 0.001
        if (!fadeIn) {

            var timerOut = setInterval(function () {
                let real = Is(element);
                if ((op <= finOp) || (!real) || element.fadeProccess === 'fadeIn') {
                    clearInterval(timerOut) ;
                    if (deleteElm &&  element.parentNode ) { element.parentNode.removeChild(element)};
                    return}

                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";

                op -= 0.1;

            }, ms);


        }
        else {
            op = 0.1
            var timerIn = setInterval(function () {
                let real = Is(element);

                if (op >= 1 || (!real) || element.fadeProccess === 'fadeOut'){
                    clearInterval(timerIn);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += 0.05 ;
                }, ms);

        }
    }



}

function clickAnswer (elem){
    /* for testing */
    if (elem === 'rightAnswerClick') {elem = {}; let rightAnswer = G.Q[G.mgmt.qNumber][G.mgmt.solutionCol]
    let idName = 'ans'+ rightAnswer;
    let div = Id(idName); elem.target = div}

    function wrongAnswerAnimation (num) {

        G.mgmt.isAnswering = true;
        let text = G.Q[G.mgmt.qNumber][2 + num]

        let e = 0;
        function deletAnswer () {

            let str = text.substring(text.length - e, 0);
            if (text.length + 1 < e  ){G.mgmt.isAnswering = false ;IpadGrahpic('wrong') ;return } else {G.divs.ans[num].innerHTML = str;e++ ;setTimeout(()=>{deletAnswer () },100)}
        }
        deletAnswer ()
    }
    function answerAnimation (text, isWin){
        G.mgmt.isAnswering = true;
        let e = 0
        //G.divs.question.innerHTML += "&nbsp&nbsp"

        function typeSolution () {
            let ms = 100;
            if (G.testMode) ms = 3

            let str = text.substring(e, 0);
            if (text.length + 1 <= e ){ nextQuesion () ;return } else {G.css.typeSolution = " " + str;e++ ;setTimeout(()=>{typeSolution () },ms)}
        }
        typeSolution ()

    }
    function nextQuesion () {


        if (G.mgmt.qNumber !== 500) {IpadGrahpic ('right');}
        G.mgmt.isAnswering = true;

        let op  = 1;
        let opDelta = 0.05
        let time = 20;
        let tb = Id('textBlock');
        let rgnObj = hexToRgb(G.css.textcolor)
        let rgbPartialTxt = "rgba(" + rgnObj.r + "," + rgnObj.g + "," + rgnObj.b + ",";
        for (let i = 1; i < 5; i++) {

            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
        }
        function fadeOut () {

            let finRgb = rgbPartialTxt + op + ")"
            //
            tb.style.color = finRgb;
            op =  op - opDelta;
            if (op > 0){setTimeout(()=>{fadeOut ()}, time)} else if (!G.mgmt.isFinalAnsInChapter){

                if (G.mgmt.qNumber === 500){G.mgmt.qNumber = G.mgmt.lastqNumber; IpadGrahpic (G.mgmt.stage)} ;

            setQuestion(G.mgmt.qNumber+1)} else if (G.mgmt.isFinalAnsInChapter) {

                G.mgmt.isFinalAnsInChapter = false; IpadGrahpic ('finishChaper')
            }
        }
        fadeOut ()
    }


    if (G.mgmt.isAnswering) return;
    let ansId = elem.target.id;

    if (elem.target.nodeName == "DIV") {} else {ansId = elem.target.parentElement.id }
    let ansDiv = Id(ansId);

    let numOfans =  Number(ansId.replace("ans", ''))

     G.mgmt.clickedAnswer = numOfans;
    let solutionNumber = G.Q[G.mgmt.qNumber][G.mgmt.solutionCol]
    let solutionText = G.Q[G.mgmt.qNumber][2 + Number(solutionNumber)]

    if (numOfans == G.Q[G.mgmt.qNumber][G.mgmt.solutionCol]) {answerAnimation(solutionText)} else {

        wrongAnswerAnimation (numOfans)
        }

}
function holoMenu () { // creats the menue inside the holo;
    G.divs.holoMenuoptions = G.divs.holoMenuoptions || [];
    function holoAnimation (dir, sz ){
        dir = dir || 1
        sz = sz || 2
        //G.divs.holoSurface.style.backgroundImage =  "url(data/hol" + sz +   ".svg)",
        G.divs.holoSurface.style.backgroundSize = sz * 1 + "%";
        let rnd = ((getRandomInt (100)) / 1000) ;
        let op = G.divs.holoSurface.style.opacity + (rnd * dir)
        G.divs.holoSurface.style.opacity =  op;
        //if (rnd < 0.002) {G.divs.holoSurface.style.opacity = 0.2 }
        //if (rnd > 0.097) {G.divs.holoSurface.style.opacity = 0.6 }
         sz += dir
         if (sz > 8 &&  dir > 0) {sz = 1;  dir  = dir * -1}
         if (sz < 1 &&  dir < 0) {sz = 8;  dir  = dir * -1}
         setTimeout (()=>{holoAnimation (dir, sz)},80)

    }
    function mouseInOut (evnt){

            function inlarge (trns, tm){
                if (evnt.target.style.transform === 'scale(' + 1 + ')' || trns > 1.2){ return}

                trns =  trns + 0.1
                evnt.target.style.transform = 'scale(' + trns + ')'

                setTimeout(()=> {inlarge (trns, tm)}, tm);
                return
            }
            var tr =  evnt.target.id  ;
            if (evnt.type === 'mouseover') {evnt.target.style.backgroundColor = G.linkColor_Hover
                evnt.target.style.transform = 'scale(' + 1.05 + ')'
                inlarge (1, 20)


            }
            if (evnt.type === 'mouseout') {evnt.target.style.backgroundColor = G.linkColor
                evnt.target.style.transform = 'scale(' + 1 + ')'

            }
            ;

         }
    function addOption (text) {
         var option = Elm (text);
         G.divs.holoScreen.appendChild (option)
         stl (option, { 'fontFamily': 'david', 'fontSize': '5vmin', 'color' : 'rgba(3,100,100)', 'opacity' : 0.7, 'textShadow' : "6px 2px 8px yellow",})
         option.innerHTML = text
         option.addEventListener('mouseout',mouseInOut);
         option.addEventListener('mouseover',mouseInOut);
    }
         var optionArray = [ "אפשרוית", "נקודות", "שמירה", "עזרה"]
         optionArray.forEach (function (i){addOption(i)})
        // addOption ("אפשרויות")
         //addOption ("נקודות")

    let htm = "אפשרויות"  + "<br><br>"
    htm += "נקודות" + "<br>"
    htm += "שמירה" + "<br>"
    htm += "הסבר" + "<br>"
    //G.divs.holoScreen.innerHTML = htm

    holoAnimation ();
    G.divs.holoContainer.style.opacity = "0";
}
function ledEvent (e){
    function fadeHolo (op = 1,diro = 1.1,tm = 50) {
        op = op || 1
        G.divs.holoContainer.style.opacity = op;
        op -= (0.08 * diro)
        if (op > 0.00 &&  op < 1.3) {setTimeout (()=>{fadeHolo (op, diro)}, tm); }
    }
    function toggleHolo () {
        if (G.mgmt.ipadMoves) {return}
        G.mgmt.ipadMoves = true;
        function slideIpadUp (y,delta = -2,end = -50, tm = 10) {
            let top =  Pre2Num( G.divs.ipadContainer.style.top)
            y = y || top;
            y += delta;
            G.divs.ipadContainer.style.top = y + "%"
            if (delta < 0 && y < end || delta > 0 && y > end -3){G.mgmt.ipadMoves = false;

                if (delta < 0) { G.divs.holoContainer.style.opacity = 0;fadeHolo (0.2,-1,80) ;
                     G.divs.holoContainer.style.visibility= "visible"} else { G.divs.holoContainer.style.visibility= "hidden"; G.divs.holoContainer.style.opacity = 1 };

                 return
             }
            setTimeout(()=> { slideIpadUp (y,delta,end, tm)},tm)
        }

        if (G.mgmt.isHolo) {

            fadeHolo (1,1);
            slideIpadUp (-50, 2, 3, 14) ; G.mgmt.isHolo = false } // 10
            else if (!G.mgmt.isHolo) {
            slideIpadUp ()
            G.mgmt.isHolo = true;
            }


    }

    G.mgmt.ledWaveTimer = G.mgmt.ledWaveTimer || false
    if(G.mgmt.ledWaveTimer){ clearInterval(G.mgmt.ledWaveTime)}
    function ledBlink (times = 3,interval = 300 ,colorA, colorB, delta, adder = 1){

        let isEven = n =>  n % 2 == 0;
        let color1 =  colorA || "grayscale(00%) brightness(200%)";
        let color2 =  colorB || "grayscale(100%)";
        notOdd = isEven(times);
        let clr;
        if (!notOdd){clr = color1 }else {clr = color2}
        if (Number.isInteger(colorA + colorB)){
            if (G.mgmt.ledEvent === 'hover') {} else {return}
            delta = delta || colorA
            clr  = "hue-rotate (" + 200 + "deg)"
            delta += adder;
            if (delta > colorB || delta < colorA) {adder = adder *-1 }
            clr = "hue-rotate(" + delta +"deg) brightness(130%)"
        }

        G.divs.led.style.filter = clr
        times--;
        if (times > 0) {G.mgmt.ledWaveTimer =  setTimeout (()=>{ ledBlink (times, interval,colorA, colorB, delta,  adder)} ,interval)} else {
            G.divs.led.style.filter = "grayscale(00%)"
             G.mgmt.ledEvent = false; return}

    }

    let typeOfe = e.type;
    if  (typeOfe === "click") {
        G.mgmt.ledEvent = 'click';
        ledBlink (6); toggleHolo () } else if (typeOfe === "mouseout") {
            G.divs.led.style.filter = "grayscale(00%)" //222 red //
            ; G.mgmt.ledEvent = false}
        else if (typeOfe === "mouseover") {
            G.mgmt.ledEvent = 'hover';
             ledBlink (1000, 10 ,10, 200,10,3)
      }

}
function buildBoard (){
    function keyPressFunc (e) {


        if (e.charCode == 32 && G.testMode && !G.mgmt.isFinalAnsInChapter) {
            clickAnswer ('rightAnswerClick');

        }
    }
    function mOverAnswer (elem){
        function mouseOutTimer () {

            if (G.css.isMouseOutTimer){true}
            G.css.isMouseOutTimer = true
            G.mgmt.mouseIsOver = 0;
            function mOut (elem){
                if (G.mgmt.isAnswering){return}

                //    let ansId = elem.target.id;
                //    let ansDiv = Id(ansId);

                for (let i = 1; i < 5; i++) {
                    //if (i == numOfans) {continue}
                    if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
                }


            }

            G.css.mouseOnTimer = G.css.mouseOnTimer - 100
            if (G.css.mouseOnTimer < 0){mOut () ;G.css.isMouseOutTimer = false; return }

            setTimeout(()=>{mouseOutTimer ()},100)

        }
        if (G.mgmt.isAnswering){return};
        let ansId = elem.target.id;
        let ansDiv = Id(ansId);
        let numOfans =  Number(ansId.replace("ans", ''))
        G.mgmt.mouseIsOver = numOfans;
        if (G.mgmt.isAnswering && G.mgmt.clickedAnswer == numOfans){return}
        if (numOfans === 0){return}

        G.css.lastHoverEvent = numOfans;
        let html = G.Q[G.mgmt.qNumber][numOfans + 2];
        let newHtml = "<span style='background-color:" +  G.css.textcolor + "; color : " + G.css.backGroundtextcolor + "'>" + html + "</span>";
        ansDiv.innerHTML = newHtml;

        for (let i = 1; i < 5; i++) {
            if (i == numOfans) {continue}
            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
        }
        G.css.mouseOnTimer = 2000;
        if (G.css.isMouseOutTimer) {return}

        mouseOutTimer ();

    }
    document.body.addEventListener("keypress", keyPressFunc)
    var drone = Id("ErrorCheck");
    drone.innerHTML = "";
    G.divs.pagecontainer = Elm ('pagecontainer');
    G.divs.ipadContainer = Elm ('ipadContainer');
    G.divs.ipadCover = Elm ('ipadCover');
    G.divs.ipad = Elm ('ipad','canvas');
    G.divs.holoSurface = Elm ('div','holoSurface');
    G.divs.holoContainer = Elm ('div','holoContainer');
    G.divs.holoScreen = Elm ('div','G.divs.holoScreen');
    G.divs.laptopKeyboard = Elm ('laptopKeyboard');
    G.divs.textContainer = Elm ('textContainer');
    G.divs.textBlock = Elm ('textBlock');
    G.divs.textBlock2 = Elm ('textBlock2');
    G.divs.infoText = Elm ('infoText');

    G.divs.question = Elm ('question');
    G.divs.holoUI = Elm ('holoUI');
    G.divs.led = Elm ('led','img')
    G.divs.led.src = "data/led.png";

    //G.divs.theCanvas = document.createElement('canvas'); G.divs.theCanvas.id = 'theCanvas';
    G.divs.ans = []
    let maxAnswers = 5
    G.divs.holoContainer.style.visibility = "hidden";
    stl (G.divs.laptopKeyboard, {
        "position": "fixed",
        "background" : "url(data/keyboard.png)",
        "backgroundSize": "100%",
        'overflow': 'hidden',
        "backgroundRepeat": "no-repeat",
        'width':'85%',
        'height': '50%',
        'margins': '0%',
        'padding': '0%',
        "top": "87%",
        "left" : "-8.9%",
    })
    stl (G.divs.pagecontainer, {
        "position" : 'fixed',
        'top': '0%',
        'left':'0%',
          "background" : "url(data/pagebackround.png)",
          "backgroundSize": "100%",
          'overflow': 'hidden',
          //"backgroundRepeat": "no-repeat",
          'width':'100%',
          'height': '100%',
          'margins': '0%',
          'padding': '0%'
        })
    stl (G.divs.textBlock , myStyle('text'), {
        'position':'absolute',
        'left':'3.7%',
        'top':'5%',
        'height':'85%',
        'width':'90%',
        'textAlign': 'left',
        'fontSize': G.css.textFontSize + 'vi',
        'backgroundColor': G.css.backGroundtextcolor,
        'direction': 'ltr',
        'border': '20% solid grey',
         "borderRadius": "3vmin",
        'margins': '0%',
        'padding': '1%',
        'zIndex':'20',
        'fontFamily':G.css.font_0,

    })
    stl (G.divs.textBlock2 , myStyle('text'), {
        'position':'absolute',
        'left':'3.7%',
        'top':'5%',
        'height':'85%',
        'width':'90%',
        'textAlign': 'left',
        'fontSize': G.css.textFontSize + 'vi',
        'backgroundColor': G.css.backGroundtextcolor,
        'direction': 'ltr',
        'border': '20% solid grey',
         "borderRadius": "3vmin",
        'margins': '0%',
        'padding': '1%',
        'zIndex':'20',
        'fontFamily':G.css.font_0,

    })
      let gradientColor = "linear-gradient(60deg ,#3e4042,#3e4042 ,#3e4042,#3e4042 ,#3e4042,#334042 ,#3e4042,#3e4042 ,#3e4042,#4d4d4d, rgba(120,120,120), rgba(120,120,120), rgba(120,120,120) ,#3e4042,#3e4042,#3e4042,#3e4042 )"
    let gradientColor2 = "linear-gradient(60deg ,#cccccc,#cccccc ,#cccccc,#cccccc ,#cccccc,#cccccc ,#f2f2f2,#e6e6e6,#e6e6e6,#cccccc , rgba(254,254,254), rgba(254,254,254), rgba(254,254,254) ,#cccccc,#cccccc,#f2f2f2,#f2f2f2 )"
    stl (G.divs.textContainer, {
        'backgroundImage': gradientColor,'padding': '5%','position':'absolute',
        'left':'1%',
        'top':'1%',
        'height':'65%',
        'width':'55%',
        'border': '0.5vmin solid black',
        "borderRadius": "4vmin",
        "resize": "both",})
    stl (G.divs.ipadContainer, {
            'backgroundImage': gradientColor2,'padding': '5%','position':'absolute',
            'left':'69%',
            'top':'3%', //3% holo
            'height':'55%',
            'width':'18%',
            'border': '0.5vmin solid black',
            "borderRadius": "4vmin",

            "resize": "both",})
    stl (G.divs.ipad , myStyle('text'), {
                'position':'absolute',
                'left':'3.7%',
                'top':'5%',
                'height':'85%',
                'width':'87.7%',
                'textAlign': 'left',
                'backgroundColor': G.css.canvasBackground,
                'direction': 'ltr',
                'border': '1vmin solid black',
                 "borderRadius": "3vmin",
                'margins': '0%',
                'padding': '1%',
                'zIndex':'20',
                'fontFamily':G.css.font_0,

            })
    stl (G.divs.holoUI, {
        "position": "fixed",
        "background" : "url(data/holoUI2.png)",
        "backgroundSize": "100%",
        'overflow': 'hidden',
        "backgroundRepeat": "no-repeat",
        'width':'25%',
        'height': '50%',
        'margins': '0%',
        'padding': '0%',
        "top": "77%",
        "left" : "70.9%",
    })
    stl (G.divs.holoSurface, {
        "position": "fixed",
        "background" : "url(data/hol1.svg)",
        "opacity": '0.3',
        "backgroundSize": "10%",
        'overflow': 'hidden',
        "backgroundRepeat": "repeat",
        'border-radius': '7vmin',
        'border-top': '2vmin solid #01ffffff',
        'border-bottom': '4vmin solid #01ffffff',
        'width':'22%',
        'height': '40%',
        'margins': '0%',
        'padding': '0%',
        "top": "33.5%",
        "left" : "71.9%",
    })
    stl (G.divs.holoScreen,myStyle('text'),  {"position": "fixed",
            "opacity": '1',
            'overflow': 'hidden',
            "fontSize" : '4vmin',
            'fontWeight' : 'bold',
            'fontFamily' : 'ariel',
            'textAlign': 'center',
            'color' : "black",
            'width':'22%',
            'height': '40%',
            'margins': '0%',
            'padding': '2% 2% 2% 2%',
            "top": "33.5%",
            "left" : "71.9%",
            'cursor': "url('data/favicon-16x16.png'), auto"
        })
    stl (G.divs.led,{
        "position": "relative",
        //"background" : "url(data/led.png)",
        "backgroundSize": "50%",
        'overflow': 'hidden',
        "backgroundRepeat": "no-repeat",
          'width':'24%',
        'height': '24%',
        'margins': '0%',
        'padding': '0%',
        "top": "10%",
        "left" : "70%",
    })
    document.body.appendChild (G.divs.pagecontainer);
    pagecontainer.appendChild (G.divs.laptopKeyboard)
    pagecontainer.appendChild (G.divs.textContainer);
    pagecontainer.appendChild (G.divs.holoUI);
    pagecontainer.appendChild (G.divs.ipadContainer);

    textContainer.appendChild (G.divs.textBlock);
    G.divs.holoUI.appendChild (G.divs.led);
    G.divs.textBlock.appendChild (G.divs.infoText);
    G.divs.textBlock.appendChild (G.divs.question);
    G.divs.ipadContainer.appendChild (G.divs.ipad);
    G.divs.ipadContainer.appendChild (G.divs.ipadCover);
    pagecontainer.appendChild (G.divs.holoContainer);
    G.divs.holoContainer.appendChild (G.divs.holoSurface);
    G.divs.holoContainer.appendChild (G.divs.holoScreen)

    let ipadComputedWidth = G.divs.ipad.clientWidth
    let ipadComputedHeight = G.divs.ipad.clientHeight
    stl (G.divs.ipadCover, {
        'position': 'relative',
        'zIndex': 40,
        //'backgroundColor': 'red',
       //  'top': ipadComputedHeight * -0.024 + '%',
       //  'left':ipadComputedWidth * -0.14 + 'px',
       //  'height':ipadComputedHeight  + 'px',
       // 'width':ipadComputedWidth + 'px',
       'top': '-10%',
       'left': '-20%',
       'height' : '120%',
       'width' : '140%',
       'overflow': 'hidden',
        "resize": "both",})




    for (let i = 1; i < maxAnswers; i ++){
        let ansId = 'ans' + i;
        G.divs.ans[i] = Elm (ansId);
        G.divs.textBlock.appendChild (G.divs.ans[i]);
        G.divs.ans[i].addEventListener('mouseover',mOverAnswer,true);
        G.divs.ans[i].addEventListener('click',clickAnswer,false);

        G.divs.ans[i].style.zIndex = "200";

    }
    G.divs.led.addEventListener('mouseover',ledEvent,true)
    G.divs.led.addEventListener('mouseout',ledEvent,true);
    G.divs.led.addEventListener('click',ledEvent,true);

}
function setQuestion (num) {

    function blinkCursor(){

        if (t < 5){return}

        if (G.divs.question.isCursorOn) {G.divs.question.isCursorOn = false } else
        {G.divs.question.isCursorOn = true};
        let cursor = "▉";

        let nocursor = "<font color = '" + G.css.backGroundtextcolor +
         "'> ▉</font>"
        let br = G.css.breakAfterQuestion;
        let addedText0 = '';
        if (G.css.typeSolution) {br = br.replace(/<br>/i,'') }
        if (G.css.typeSolution) { addedText0 = '<br>' + G.css.typeSolution}

        let addedText1 = G.divs.question.isCursorOn ? cursor : nocursor ;
        let addedText = addedText0 + addedText1
        G.divs.question.innerHTML = G.Q[num][2]  + addedText +  br;



    }
    function typeWriterEfct (isCorect){

        if (fulltextArray[t] && (fulltextArray[t].length < position - 1)){t++; position = 0 }
        if (t > 6 || loopControl > 900) {return}
        if (fulltextArray[t]) {elements[t].innerHTML = fulltextArray[t].substring(position, 0);};

        position++; position++;
        setTimeout(()=>{typeWriterEfct (isCorect)},2);
        loopControl++
    }
    function setDirectionBylanguage (element, text) {
        if (text && element) {} else return
        function isHebrew(qtext) {
            var hebLetters = /\s?[אבגדהוזחטיכלמנסעפצקרשתםןץףך]{2,30}\s?/g
            let matchArry = qtext.match(hebLetters)
            if (matchArry !== null){ return true} else {return false}

        }
        if (isHebrew(text)) {element.style.direction = "rtl"; element.style.textAlign = "right"} else {
            {element.style.direction = "ltr"; element.style.textAlign = "left"}
        }

    }
    function resizeText (){
        fontSize = G.css.textFontSize;
        let fullText = "";
        for (let i = 1; i < 8; i++){ fullText += G.Q[num][i]};

        let length01 = fullText.length


        if (length01 > 700){fontSize = G.css.textFontSize *  G.css.resizeFontScale }
        G.divs.textBlock.style.fontSize = fontSize + "vmax"


    }
    let fontSize;
    let loopControl = 0;
    resizeText ()
    G.mgmt.mouseIsOver = 0;
    if (G.mgmt.timer1){clearInterval(G.mgmt.timer1)}
    G.mgmt.isAnswering = false;
    G.css.typeSolution = "";
    let tb = Id('textBlock')
    let children =  tb.childNodes;
    for (i in children){
        children[i].innerHTML = "";
    }
    tb.style.color = G.css.textcolor;
    G.mgmt.clickedAnswer = 0;
    let fulltextArray = [];
    let elements = [];
    let t = 1;
    let position = 1;
    if (G.mgmt.qNumber < 499) {G.mgmt.lastqNumber = G.mgmt.qNumber;}
    G.mgmt.qNumber = num;

    elements[1] = G.divs.infoText
    fulltextArray[1] = G.Q[num][1]

    elements[2] = G.divs.question
    fulltextArray[2]  =   G.Q[num][2] + G.css.breakAfterQuestion
    G.test = fulltextArray[2]

    for (let i = 1; i < 7; i++){
        //fulltextArray[i + 2] = "";
        //if (i === 1){ fulltextArray[2] += "<br><br>"}
        if (G.Q[num][i + 2] != "")    {
            elements[i + 2] = G.divs.ans[i];
            fulltextArray[i + 2] = G.Q[num][i + 2];
        }
        setDirectionBylanguage(elements[i],fulltextArray[i])

    }

    typeWriterEfct ()
    G.mgmt.timer1 = setInterval(()=>{blinkCursor()},200)

}
function IpadGrahpic (type0) {
    function getIp (){
        function clickCanvas (e) {
            let x0  = e.clientX
            let y0 = e.clientY
            let xPadding  = Pre2Num(canvas.parentNode.style.padding) / Pre2Num(canvas.parentNode.style.width)
            let canvasXpre = Pre2Num(canvas.parentNode.style.left)   ;
            let canvasBaseX = window.innerWidth * (canvasXpre +  xPadding) / 100


        }
        function drawLine (x0,y0, x1,y1) {
            let x = xP(x0) ; xe = xP (x1);
            let y = yP(y0) ; ye = yP (y1);
            ctx.beginPath();
            ctx.moveTo(x,y);

            ctx.lineTo(xe,ye);
            ctx.strokeStyle="red";
            ctx.stroke();
        }
        function drawCircle (x0,y0,r0, color = 'white') {
            let x = xP(x0) ;
            let y = yP(y0);
            let r = yP(r0) ;
            ctx.beginPath();
            ctx.arc(x,y,r,0,2*Math.PI);
            ctx.fillStyle = color // color;
            ctx.fill();
        }
        function MoveC (x00,y00, x1,y1, tm = 1 , cObj) {
            cObj = cObj || { 'r' : 0.5, 'color' : 'yellow' }
            for (i = 1; i < 90; i++){
                var deltaX = x1 - x00;
                var  deltaY = y1 - y00;
                var  adder  = 0.01
                var Ydirection = 1; if (deltaY < 0) {Ydirection = -1  }
                var Xdirection = 1; if (deltaX < 0) {Xdirection = -1 }
                var diagonal =  Math.abs(deltaY / deltaX)
                var  Yadder = adder *  diagonal
                x00 = x00 + Math.sign(deltaX) * adder ;
                y00 = y00 + Math.sign (deltaY) * Yadder;
                if (x00 > 100 || x00 < 1 || y00 < 1 || y00 > 100) { return}
                if (isNaN(x00 + y00)) {return}

                tm = 1 /* testing   */

                drawCircle (x00,y00,cObj.r, cObj.color)
                if (deltaX < 1 && deltaX > -1  && deltaY < 1 && deltaY > -1 ){return}
            }
            setTimeout(()=>{MoveC (x00,y00, x1,y1, tm  , cObj)},tm);

        }
        function consoleFoundIp() {
            G.mgmt.isFinalAnsInChapter = false;
            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";

            //tb.style.color =  G.css.textcolor
            var ipArray = [];
            var ipTxtArray = [];
            for (i = 0; i < 300; i++){
                ipArray [i] = [];
                let ipStart = getRandomInt (30)
                ipArray [i][0] = getRandomInt (30) + 255;

                for (l = 1; l <4; l++){
                    let iprnd = getRandomInt (254)
                    ipArray [i][l] = iprnd;
                }

            }

            for (i in ipArray){
                let ipTxt = '';
                for (l in ipArray[i]) {
                    if (l == 0) { } else {ipTxt += '.'}
                    ipTxt += ipArray[i][l];
                }
                let txt =  '&nbsp&nbsp&nbsp' + ipTxt + '&nbsp&nbsp&nbsp<br>'
                ipTxtArray[i] = txt
                G.divs.textBlock2.innerHTML += txt
            }
            //var x = 200;
            function runIps (x){
                G.divs.textBlock2.innerHTML = '<p dir = "rtl" align="right">' + "מחפש כתובת רשת :" + "</p>"
                G.divs.textBlock2.innerHTML += 'Tracing route to 267.1.0.1 over Ip hops:' + (x + 212) + ' <br><br>';
                for (i = 0 ; i < 19; i++){
                    if (i + x > 99) { continue}
                    G.divs.textBlock2.innerHTML += ipTxtArray[i + x]
                    let sum = i+x;
                    let ext = ''
                    switch (sum) {
                        case 10: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 17: ext = 'Router# configure terminal...'; break;
                        case 22: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 50: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 60: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 73: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 80: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 85: ext = 'Router(config-if)# ip address 172.16.0.1'; break;

                    }

                    if (ext) { G.divs.textBlock2.innerHTML += '<br>' + ext ; }

                }
                x++
                if (x < 100) { setTimeout(()=>{runIps (x)},30)} else {
                    G.Q [500] = ["", "","","","","","","",""]
                    G.Q [500][1] = G.divs.textBlock2.innerHTML;
                    G.Q [500][2] = "כתובת רשת נמצאה. להמשיך ?";
                    let theNextStage = G.mgmt.stageNames[G.mgmt.stageNumber + 1 ]
                    G.Q [500][3] = "המשך " + G.mgmt.stagesInfo[theNextStage]

                    G.Q [500][4] = "בדיקה נוספת";
                    G.Q [500][G.mgmt.solutionCol] = 1;
                    G.mgmt.nextStage ()

                    G.divs.textContainer.removeChild(G.divs.textBlock2 )
                    setQuestion (500)

                };
            }

            runIps (1)





        }
        function FullIpWasfoundAnimation () {
            G.mgmt.isFinalAnsInChapter = true;
            drawIpIpad ()
            let lineObj = {'r': 0.5, 'color':'pink'}
            let saveN = 1;
            var tmAdder = 200

            for (n = 1; n <= G.hacks.numOfsuccess; n++ ){
                if (n === 1) { continue};
                let sn = n;
                setTimeout ((n)=> { MoveC  (G.hacks.ipLocations[sn-1][0], G.hacks.ipLocations[sn-1][1],
                    G.hacks.ipLocations[sn][0],G.hacks.ipLocations[sn][1],2,lineObj)},sn* tmAdder);
                    saveN = n;
            }
            setTimeout (()=> {MoveC  (G.hacks.ipLocations[saveN][0], G.hacks.ipLocations[saveN][1], G.hacks.ipLocations[1][0],G.hacks.ipLocations[1][1],2,lineObj);},(saveN +1)*tmAdder);



        }
        function addRevieledLovation (){

                G.hacks.numOfsuccess++;
                G.hacks.ipLocations[G.hacks.numOfsuccess] = G.hacks.ipLocations[G.hacks.numOfsuccess] || [];
                G.hacks.ipLocations[G.hacks.numOfsuccess][1] = G.hacks.ipY
                G.hacks.ipLocations[G.hacks.numOfsuccess][0] = G.hacks.ipX



        }
        function drawIpIpad (){
          let randomMapX = getRandomInt (1300) * -1
          let randomMapY = getRandomInt (350) * -1

          G.hacks.ipMapLocation = G.hacks.ipMapLocation || [randomMapX,randomMapY]
          // maximum values for green map G.hacks.ipMapLocation  = [-1300,-350]
          G.divs.ipadContent = Elm ('ipadContent','img');
          var img = G.divs.ipadContent;
          img.src = "data/map.svg"
          img.onload = function() {
              ctx.drawImage(img, G.hacks.ipMapLocation [0],  G.hacks.ipMapLocation [1]);
              ctx.font = "7vmin Miriam";
              ctx.fillStyle = "white";
              let text =   " זיהוי כתובת רשת "
              ctx.save();
              ctx.shadowOffsetY = 4;
              ctx.shadowOffsetX = 4;
              ctx.shadowColor = "rgba(0,0,0,0.9)";
              ctx.shadowBlur = 3;
              ctx.fillText(text,w / 5, h -(h /30));
              ctx.restore();
              let ips = 5;
              G.hacks.rightIp = getRandomInt(ips)
              for (let i = 1; i <= ips; i++) {
              let xPoint = getRandomInt (80) + 5;
              let yPoint = getRandomInt (70) + 5;

              if (i == G.hacks.rightIp){ G.hacks.ipY = yPoint;G.hacks.ipX = xPoint }
              setTimeout(()=>{
                  ctx.save ();

                  ctx.shadowOffsetY = 5;
                  ctx.shadowOffsetX = 5;
                  ctx.shadowColor = "rgba(0,0,0,0.9)";
                  ctx.shadowBlur = 8;
                  drawCircle (xPoint, yPoint,1,"red")
                  ctx.restore ();
              }, 200 * i);
              }
              for (n = 1; n <= G.hacks.numOfsuccess; n++ ){
                  if (G.hacks.numOfsuccess == 0) { break};
                  ctx.save ();

                  ctx.shadowOffsetY = 4;
                  ctx.shadowOffsetX = 4;
                  ctx.shadowColor = "rgba(0,0,0,0.9)";
                  ctx.shadowBlur = 3;
                  drawCircle (G.hacks.ipLocations[n][0], G.hacks.ipLocations[n][1],2,"yellow")
                  ctx.restore ();
                drawCircle (G.hacks.ipLocations[n][0], G.hacks.ipLocations[n][1],1,"red")

              }
              }


        }
        var canvas = Id ('ipad');
        canvas.addEventListener('click',clickCanvas,false);
        var preW = Pre2Num (G.divs.ipadContainer.style.width) / 100;
        var preH = Pre2Num (G.divs.ipadContainer.style.height) / 100;
        const highRes = 2;
        canvas.height =  preH * window.innerHeight * highRes;
        canvas.width =  preW * window.innerWidth * highRes;
        const w = canvas.width;
        const h = canvas.height;
        function xP(x_){ // x Precent
            let pre = x_ / 100;
            return Math.round(w * pre);
        }
        function yP(y_){ // x Precent
            let pre = y_ / 100;
            return Math.round(h * pre);

        }
        canvas.style.color = 'white';
        var ctx = canvas.getContext("2d");
        if (answeris === 'right') {addRevieledLovation ()}
        if (G.hacks.numOfsuccess >= G.mgmt.maxIpsTofind) {FullIpWasfoundAnimation (); consoleFoundIp()} else {drawIpIpad ()}

    }
    function fireWall (){
        function consoleHackedFirewall(isWaitingCrack = false) {
            if (isWaitingCrack){
                let tx3 = '<p dir = "rtl" align="right">' + "נמצאו מספר רכיבים בחומת האש." + "</p>";
                G.Q [500] = ["", "","","","","","","",""]
                G.Q [500][1] = tx3 + '<br><p dir=rtl style="text-align: right">'
                G.Q [500][2] = "יש לעקוף את כל ההגנות כדי למצוא חולשה מרכזית."

                G.Q [500][G.mgmt.solutionCol] = 1;
                //G.divs.textContainer.removeChild(G.divs.textBlock2 )
                G.mgmt.isFinalAnsInChapter = true;
                setQuestion (500); return; }
            G.mgmt.isFinalAnsInChapter = false;
            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";

            //tb.style.color =  G.css.textcolor
            var ipArray = [];
            var ipTxtArray = [];
            for (i =0 ; i < 100 ; i++){
                let ipTxt = '';


                    let t = '<br>0x20004fff '; if(G.hacks.NamesOfPiecesOfFirewall[i] !== undefined) { t =G.hacks.NamesOfPiecesOfFirewall[i]}
                    t = t.slice(0,9) + " " + G.hacks.NamesOfPiecesOfFirewall[i-5] ;
                    ipTxt +=  t //ipArray[i][l];

                let txt =  '&nbsp&nbsp&nbsp' + ipTxt + '&nbsp&nbsp&nbsp<br>'
                ipTxtArray[i] = txt
                G.divs.textBlock2.innerHTML += txt
            }
            //var x = 200;
            function runDefences (x){
                let tx1 = '<p dir = "rtl" align="right">' + "חומת האש נסרקת, חולשות ופרצות אבטחה:" + "</p>";
                let tx2 = 'Stack buffer Address: x000fff' + (x + 212) + ' <br><br>';
                 G.divs.textBlock2.innerHTML = tx1 + tx2
                for (i = 0 ; i < 19; i++){
                    if (i + x > 99) { continue}
                    G.divs.textBlock2.innerHTML += ipTxtArray[i + x]
                    let sum = i+x;
                    let ext = ''
                    switch (sum) {
                        case 10: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 17: ext = 'Router# configure terminal...'; break;
                        case 22: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 50: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 60: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 73: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 80: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 85: ext = 'Router(config-if)# ip address 172.16.0.1'; break;

                    }

                    if (ext) { G.divs.textBlock2.innerHTML += '<br>' + ext ; }

                }
                x++
                if (x < 100) { setTimeout(()=>{runDefences (x)},30)} else {
                    let tx3 = '<p dir = "rtl" align="right">' + "נמצאה פרצה ברכיב הזיכרון:" + "</p>";
                    G.Q [500] = ["", "","","","","","","",""]
                    G.Q [500][1] = tx3 + tx2 + ipTxtArray[6] + '<br><p dir=rtl style="text-align: right">'
                    G.Q [500][2] = "כל ההגנות נעקפו ונמצאה חולשה מרכזית. להמשיך ?"
                    let theNextStage = G.mgmt.stageNames[G.mgmt.stageNumber + 1 ]
                    G.Q [500][3] = "המשך " + G.mgmt.stagesInfo[theNextStage]
                    G.Q [500][4] = "ביצוע הסוואה של הפעילות"
                    G.Q [500][G.mgmt.solutionCol] = 1;
                    G.mgmt.nextStage ()
                    G.divs.textContainer.removeChild(G.divs.textBlock2 )
                    setQuestion (500)

                };
            }

            runDefences (1)





        }
        function setBG (c) {
            var ipadCover = Id ('ipadCover')
            ipadCover.style.backgroundImage = c
        }
        function blureChanger (){

            ipadCover.isbluring = true;
            var n1 = 0.07 ; var ms = 50;
            var delta = 0.01 ; top_blure = 0.2; bottom_blur = 0.06
            function bllr (n){

                if (!ipadCover.isbluring) {return}
                let b = 'blur(' + n +'rem)';
                ipadCover.style.filter = b;
                if (n > top_blure) { delta *= -1}
                if (n < bottom_blur) { delta *= -1}
                n += delta;
                setTimeout(()=> bllr (n),ms)
            }
            bllr(n1)


        }
        function setFirewallPieces (numOfFWPieces) {
            G.hacks.piecesOfFirewall = [];
            G.hacks.NamesOfPiecesOfFirewall = [];
            var defences = ['access control ','Admin-security: ','Antivirus sftw(): ','Sec- coding: ', 'Sec-by default: ','Sec-by design: ','S-op-systems _','Auth-user - ','AuthToken ; ','Encryp: ', 'main-Panel: ', 'crypto: ', 'node-Secure: ', 'memory-Leak: ']
            var defences_save = defences.slice(0);
            var defence_functions = [' #0000FF', '#F1C40F','f()Firewall','0x3e603fff','0x20004fff','0x4c0101ff','0x1bf200ff','0xffd61f980','0x7ffffaff', '0x003fee00','0x6ffffff4','0x2fffffb8','0xffffff98','0xfff506ff','0x20bfe5ff', '0x3f62ffe9','0x2eff984f','0xf983ffb1'
            ,'OfFirewall', '#0002080', '#FF00FF', 'rgb(13,14,9)s','void_ssmain-i', '#FA2DC9', 'S-N/1692462',]

            for (i = 1; i < numOfFWPieces; i++) {
                let randomX = getRandomInt (1300) * -1
                let randomY = getRandomInt (350) * -1
                let randomDfence = getRandomInt(defences.length - 1)
                let randomDfencef = getRandomInt(defence_functions.length - 1)
                G.hacks.NamesOfPiecesOfFirewall[i] = defences[randomDfence] + " "+ defence_functions[randomDfencef];
                defences.splice(randomDfence,1);
                if ( defences.length < 2) {defences = defences.concat(defences_save)

                }
                G.hacks.piecesOfFirewall[i] = {};
                G.hacks.piecesOfFirewall[i].randX = randomX ;
                G.hacks.piecesOfFirewall[i].randY = randomY ;

            }
        }
        function addFirewallClue (){G.hacks.numOfsuccess++;}
        function drawFireWallIpad () {

            var ipadCover = Id ('ipadCover'); stl (ipadCover,myStyle ('text'),{
                'fontFamily': 'ariel', 'textAlign': 'center', 'lineHeight' : '3vmin'
            });
            ipadCover.innerHTML = '<mark><br><br> &nbsp' + 'זיהוי חומת אש'
            if (G.hacks.numOfsuccess == 0){ipadCover.innerHTML += "<br><br><mark>" + "מחפש רכיבים"; setBG (ipadFireWallBGColor) ;
            } else {
                ipadCover.style.opacity = '1';
                ipadCover.innerHTML += '<br><br><mark>' + 'מזהה רכיבים:' + '<br> '
                ipadCover.innerHTML += '<div style="line-height:10px">';

            }
            ipadCover.innerHTML += '</mark> <br>'
            G.divs.ipadContent = Elm ('ipadContent','img');
            var img = G.divs.ipadContent;
            let num = 1
            img.src  =  "data/mother-board (" + 1 + ").png"
            //consoleHackedFirewall(isWaitingCrack = false)

            img.onload = function() {

                function addHackOption (el){
                    function clickFirewallHack (el){
                        function hackFirewallElement(DomElement ,finishString = 'ok') {

                            if(G.hacks.numOfsuccess >=G.mgmt.maxFirewallTofind){} else return;

                            var dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');
                            var el = DomElement;
                            if (el.innerHTML.includes(finishString)) return;
                            var before = '', after = '';
                            var virtualHtml = ''

                            var Whtml =  () =>{ el.innerHTML = before + virtualHtml + after}
                            var ran = function() {
                             return Math.floor(Math.random() * dictionary.length)
                            }
                            var ranString = function(amt) {
                              var string = '';
                              for(var i = 0; i < amt; i++) {
                                string += dictionary[ran()];
                              }
                              return string;
                            }
                            var init = function(str) {
                              var count = str.length;
                              var delay = 50;
                              virtualHtml = '';
                              Whtml ();

                              var gen = setInterval(function() {
                                  let hackColor = G.hacks.firewallScrambleColor

                                before = '<span style="opacity: 0.5; color: '  + hackColor + '"> ' + ranString(count) + '</span>'
                                after = '<span style="opacity: 0.5; color: '  + hackColor + '"> ' + ranString(count) + '</span>'
                                Whtml ()

                                if(delay > 0) {
                                  delay--;
                                }
                                else {
                                  if(count < str.length) {
                                    virtualHtml += str[str.length - count-1];
                                    Whtml ();

                                  }
                                  count--;
                                  if(count === -1) {
                                     CheckIfAllDefencesDown()
                                    clearInterval(gen);
                                    //showButton();
                                  }
                                }
                              }, 32);

                            }
                            /* my code */
                            init (finishString)

                        }
                        hackFirewallElement (this,G.hacks.firewallFinishText);

                    }
                    el = Id (el)
                    el.addEventListener('click',clickFirewallHack, true)

                }
                function CheckIfAllDefencesDown()  {
                    let ipadCover = Id ('ipadCover')
                    let hacksArray = [];
                    ipadCover.childNodes.forEach(a=>{
                        if (!a.id) {return}
                        if (a.id.includes(G.hacks.firewallCodeId)) {
                            let isFinished = a.innerHTML.includes(G.hacks.firewallFinishText)
                            hacksArray.push(isFinished);
                        }
                    })
                    let allfinished = hacksArray.every ((e) => {
                        return e})
                        if (allfinished) {consoleHackedFirewall()}

                }
                function fadIntext (){

                    if (ipadCover.style.opacity < 0.2 || ipadCover.style.opacity > 0.8) {
                        StylelFader(ipadCover,30,true)
                        var textToReplace = 'מזהה רכיבים:'
                        var altText = 'הרכיבים שזוהו:'
                        var origin = ipadCover.innerHTML;
                        ipadCover.innerHTML = ipadCover.innerHTML.replace(textToReplace,altText)
                    } else {setTimeout(()=>{fadIntext ()},500)}
                }
                function showChips (num1) {


                    ms = 400;
                    if  (answeris === 'wrong') {ms=10}
                    var canvas = Id ('ipad');
                    var preW = Pre2Num (G.divs.ipadContainer.style.width) / 100;
                    var preH = Pre2Num (G.divs.ipadContainer.style.height) / 100;
                    const highRes = 2;
                    canvas.height =  preH * window.innerHeight * highRes;
                    canvas.width =  preW * window.innerWidth * highRes;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, G.hacks.piecesOfFirewall[num1].randX,  G.hacks.piecesOfFirewall[num1].randY);
                    spanId = G.hacks.firewallCodeId  + num1;
                    ipadCover.innerHTML += '<div id = "' + spanId + '"style = "font-size:3vmin; background-color:rgba(10,0,0,0.7); width:80% ; height:5% ;margin: 0 auto; margin-top:1%;">' +  G.hacks.NamesOfPiecesOfFirewall[num1] + '</div>';
                    let sp = Id (spanId);
                    if (num1  < G.hacks.numOfsuccess ) {

                        setTimeout(()=>{showChips (num1+1)},ms)}
                    else {
                            fadIntext();
                            if (G.hacks.numOfsuccess >=G.mgmt.maxFirewallTofind ){
                                consoleHackedFirewall(true)
                                let txt = 'כל ההגנות נמצאו. לחצו על ההגנות כדי לעקוף אותן.'
                            ipadCover.innerHTML += '<br><br><div id = "defMessage"'  + ' style = "font-size:4.3vmin; background-color:rgb(0,191,255); font-weight: bold; color:black;width:90% ;margin: 0 auto; margin-top:3%; padding:2% ;border: 0.3vmin solid black;border-radius: 1vmin ; overflow: hidden">' +  txt + '</div>';}
                            let  breakForeach = false
                            ipadCover.childNodes.forEach(a=>{

                                if (!a.id || breakForeach) {return}
                                if (a.id === 'defMessage'){breakForeach = true}
                                if (a.id.includes(G.hacks.firewallCodeId)) {addHackOption (a.id)}
                            });
                            return;

                        };
                }
                if (G.hacks.numOfsuccess > 0 && G.hacks.numOfsuccess <= G.mgmt.maxFirewallTofind  ) {showChips (num)};


            }
        }
        var ipadFireWallBGColor = "linear-gradient(135deg, rgba(78,92,90,1) 0%,rgba(78,92,90,0.57) 25%,rgba(78,92,90,0.9) 57%,rgba(101,118,119,0.89) 83%,rgba(25,26,63,1) 100%"
        if (answeris === 'right') {let ipadCover = Id ('ipadCover');
            ipadCover.style.filter = ''; setBG('');
            ipadCover.isbluring = false;
            addFirewallClue ()}
            else if (answeris === 'wrong') {blureChanger ();setBG(ipadFireWallBGColor)}
        if (G.hacks.piecesOfFirewall) {} else {setFirewallPieces (100)}
        if(G.hacks.numOfsuccess + 1 >G.mgmt.maxFirewallTofind){G.mgmt.isFinalAnsInChapter = true } //current

        drawFireWallIpad ()
    }
    function user (){
        function consoleHackedUser(stage = 1) {
            L('consoleuser')
            //G.mgmt.isFinalAnsInChapter = false;
            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";


            function stage1 (){
                G.divs.textBlock2.innerHTML = '<p dir = "rtl" align="right">' + "ניתן כעת לקיים חדירה מוצלחת למערכת, באמצעות המשתמש :" + "</p>"
                G.divs.textBlock2.innerHTML += 'user_Name: ' + familyName.data +', '+ firstName.data + ' <br><br>';
                G.divs.textBlock2.innerHTML += 'user_Id: ' +  Id('userName').data + '<br><br>';
                G.divs.textBlock2.innerHTML += 'user_codephrase: ' +  Id('codephrase').data + '<br><br>';

            }
            function stage2 (){
                G.Q [500] = ["", "","","","","","","",""]
                G.Q [500][1] =  '<br><p dir=rtl style="text-align: right">Welcome !'
                G.Q [500][2] = "ניתן לקיים שינויים ולסרוק את המערכת בתור משתמש ." + "<br>"
                G.Q [500][2] += 'האם להמשיך ?'
                let theNextStage = G.mgmt.stageNames[G.mgmt.stageNumber + 1 ]
                G.Q [500][3] = "המשך " + G.mgmt.stagesInfo[theNextStage]
                G.Q [500][4] = "ביצוע הסוואה של הפעילות"
                G.Q [500][G.mgmt.solutionCol] = 1;
                G.mgmt.nextStage ()

                G.divs.textContainer.removeChild(G.divs.textBlock2 )

                setQuestion (500)
            }

            if (stage === 1){stage1();} else if (stage === 2) {stage2 ()}





        }
        function retryPass(el) {
            el.type = 'text';
            var minChar = 3; var tm = 200; var endLength = 14;
            var charsDeleted = 0 ;
            var oroginalWidth = 80;
            var originalBorder = el.style.border;
            function colorBorderPass (c,dlt = 1) {
                if(el.type === 'password')  {el.style.border = originalBorder; return}
                el.style.border = 'solid rgb(254,' + c + ',0) 0.5vmin';
                if (c < 60) {dlt = 1} else if (c > 184) { dlt = -1}
                setTimeout(()=>{colorBorderPass (c+ (30*dlt),dlt)}, 30)


            }
            function changepassStyle ( n = 1, delta = 1) {


              let boxS = ( n * 0.01) + 'vmin '
              el.style.boxShadow =  boxS + boxS + boxS + "black" // '9px 10px 5px 0px rgba(0,0,0,0.75);'
              let nw = n;
              //if ( n < 30 ) {nw*= -6 }
              el.style.width = 80 + (nw * 0.15) + '%'
              if (n > 110 || n < 0) return
              setTimeout (()=>{changepassStyle (n + delta, delta)},3)
            }
            function deletePass () {
                let txt = el.value.slice(2,   el.value.length)
                el.value = txt
                charsDeleted++
                if (el.value.length >= minChar) {setTimeout(()=>{deletePass()},tm)} else rewritePass()
            }
            function  rewritePass() {
                let newtxt = el.data1.slice(-2)
                el.data1 = el.data1.replace(newtxt , '')

                el.value  = newtxt + el.value;
                charsDeleted -=  2
                if (charsDeleted > -2){setTimeout(()=>{rewritePass()},tm)} else {

                    changepassStyle (100,-2)
                    setTimeout(()=>{el.type = 'password'}, (tm * 5))}

            }
            deletePass ()
            changepassStyle ()
            colorBorderPass (1,1)

        }
        function whiteNoise (t,img_) {
            var canvas = Id ('ipad');
            var ctx = canvas.getContext("2d");
            let randomImgX = getRandomInt (100) * -1;
            let randomImgY = getRandomInt (100) * -1;
            G.hacks.userBlureBackround =  [randomImgX,randomImgY];
            ctx.drawImage(img_, G.hacks.userBlureBackround [0],  G.hacks.userBlureBackround [1]);
            let t1 = t;
            let sin = Math.sin(t/8); ipadCover.style.opacity = sin + 1.2;
            if (t > 2) {setTimeout (()=>{whiteNoise (t1-1,img_)}, t / 6)} else return;
        }
        function addUserClue (){G.hacks.numOfsuccess++;}
        function setFormData (){
            function makeid(length, isPass = false) {
                    var result           = '';
                    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var passwordChars = "!@#$%^&*~" + characters
                    if (isPass){characters = passwordChars}
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++ ) {
                      result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                return result;
            }
            if (G.hacks.FormfirstNames) return

            G.hacks.FormfirstNames = ['Addison', 'Adrian', 'Aiden', 'Ainsley', 'Alex', 'Amari', 'Andy', 'Ari', 'Ash', 'Aspen', 'Aubrey', 'August', 'Avery', 'Bailey', 'Bay', 'Blaine', 'Blake', 'Bobbie', 'Brett', 'Brook', 'Brooklyn', 'Caelan', 'Cameron', 'Campbell', 'Carroll', 'Carson', 'Casey', 'Charlie', 'Chris', 'Clay', 'Corey', 'Dana', 'Dakota', 'Dale', 'Dallas', 'Daryl', 'Delta', 'Devin', 'Dorian', 'Drew', 'Dylan', 'Easton', 'Eddie', 'Eli', 'Elliott', 'Emerson', 'Emery', 'Finley', 'Frances', 'Frankie', 'Gabriel', 'Glenn', 'Gray', 'Harley', 'Harper', 'Hayden', 'Hudson', 'Hunter', 'James', 'Jamie', 'Jayden', 'Jean', 'Jesse', 'Jordan', 'Jules', 'Julian', 'Kaden', 'Kai', 'Karter', 'Kelly', 'Kelsey', 'Kendall', 'Kennedy', 'Kyle', 'Lake', 'Landry', 'Lincoln', 'Logan', 'London', 'Lou', 'Mackenzie', 'Mason', 'Max', 'Maxwell', 'Monroe', 'Morgan', 'Parker', 'Pat', 'Peyton', 'Phoenix', 'Quinn', 'Ray', 'Reagan', 'Reed', 'Reese', 'Remy', 'Riley', 'River', 'Roan', 'Rory', 'Rowan', 'Rudy', 'Ryan', 'Sage', 'Sam', 'Sawyer', 'Shawn', 'Sean', 'Skylar', 'Spencer', 'Stevie', 'Sydney', 'Tanner', 'Tatum', 'Taylor', 'Toby', 'Tyler', 'Val', 'West', 'Winter'];
            G.hacks.FormlastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'Mcdonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos', 'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold', 'Wagner', 'Willis', 'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham', 'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong', 'Carpenter', 'Weaver', 'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin', 'Peters', 'Kelley', 'Franklin', 'Lawson', 'Fields', 'Gutierrez', 'Ryan', 'Schmidt', 'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman'];

            Id('firstName').data =  G.hacks.FormfirstNames[getRandomInt (G.hacks.FormfirstNames.length)];
            Id('familyName').data =  G.hacks.FormlastNames[getRandomInt (G.hacks.FormlastNames.length)];
            Id('userName').data = Id('firstName').data + "_" + makeid(7)
            Id('codephrase').data  = makeid(20, true);
            Id('codephrase').data1  = makeid(130, true);
            Id('submitButton').data = "✓ " + 'לחץ לכניסה'
            Id('passportIMG').data =  'data/passports/passport ('+getRandomInt(19)+').jpg';
            // seting the number of questions per stageNames


        }
        function blureChanger (el){


            var n1 = 0.5 ; var ms = 30;
            var delta = -0.01 ; top_blure = 0.2;
            function bllr (n){


                let b = 'blur(' + n +'rem)';
                el.style.filter = b;

                n += delta;
                if (n < 0){return } else setTimeout(()=> bllr (n),ms)
            }
            bllr(n1)


        }
        function colorBorderSubmit (element,c = 60,dlt = 1) {
            element.style.backgroundColor =  ' rgb(' + c + ',255 ,0)'//'solid rgb(254,' + c + ',0) 0.5vmin';
            if (c < 2) {dlt = 1} else if (c > 120) { dlt = -1}
            setTimeout(()=>{colorBorderSubmit (element,c+ (30*dlt),dlt)}, 30)}
        function drawBaseForm (){
            function submittingForm (){
                function DenyEntry () {
                    var deny = Elm ('deny');
                    let ipadCover = Id ('ipadCover') ; ipadCover.appendChild (deny)
                    stl (deny , myStyle ('text'), {'position': 'absolute', 'top' : '25%', 'right': '5%' , 'textAlign': 'center', 'backgroundColor': 'red', 'color' : 'black', 'padding' : '0.5vmin', 'fontWeight': 'bolder', 'border' : 'solid black 0.3vmin'});
                    deny.innerHTML = 'אחד או יותר מהנתונים שגוי.' ;
                    deny.innerHTML += '<br>' + 'הכניסה אסורה. '
                    setTimeout (()=>{StylelFader (deny, 40,false,true)}, 2500 )
                }
                //G.hacks.numOfsuccess = G.mgmt.maxFormTofind
                L(G.hacks.numOfsuccess ,G.mgmt.maxFormTofind)
                if (G.hacks.numOfsuccess === G.mgmt.maxFormTofind) {
                    StylelFader(codephrase,40,false,true);
                    StylelFader(submitButton,40,false,true);
                    StylelFader(userName,40,false,true);
                    setTimeout (()=>{
                        let spn = Id("formP-2");
                        spn.style = 'font-size: 4vmin; color: black; font-weight: bolder'
                        spn.style.opacity = 0 ;
                        spn.innerHTML = '<br><br>' + 'שלום, ' + '<br>' + 'כל הפרטים נכונים,' + '<br>' + 'ברוכים הבאים למערכת.'
                        function fadingin (n) {
                            spn.style.opacity = n / 100 ;
                            ipadCover.style.backgroundColor = 'lightgreen';
                            if (n < 110) {setTimeout(()=>{fadingin (n+1)},20 )} else {consoleHackedUser(2)} //consoleHackedUser()
                        }
                        fadingin (1)

                    },1000)



            } else {DenyEntry ()}

            }
            function addInput (name, typeOfElem =  "text", placeholder,stl0) {
                var newInput = document.createElement('input');
                var addon = ''; if(name ==='codephrase') { newInput.dir = "ltr" ; addon = ';text-align: right' }
                newInput.id = name;
                newInput.type= typeOfElem
                newInput.name="userName"
                newInput.placeholder = placeholder
                newInput.autocomplete="off"
                newInput.style = "font-size: 3vmin; width: 50%;height :1%%; padding: 1vmin 4vmin; margin: 1vmin 1vmin; border: 0.3vmin solid #ccc; border-radius: 1vmin; box-sizing: border-box;background-color: white;" + addon
                if (stl0) stl (newInput, stl0);

                newInput.innerHTML = '<br>'
                return newInput;
            }
            var firstName = addInput ('firstName', 'text', 'שם פרטי', {'width': '45%'});
            var familyName = addInput ('familyName', 'text', 'שם משפחה', {'width': '45%'});
            var userName =  addInput ('userName', 'text', 'שם משתמש', {'width': '85%'});
            var codephrase =  addInput ('codephrase', 'password', 'קוד אבטחה', {'width': '85%'});
            var submitButton =  addInput ('submitButton', 'button', 'קוד אבטחה', {'backgroundColor' : 'rgb(238,174,238)', 'border': 'solid black'}); submitButton.value = 'כניסה' ;
            submitButton.addEventListener('click', submittingForm );
            G.css.formBackColor = 'rgba(219, 250, 89 ,0.99)'
            var qArray = [firstName ,familyName,userName,codephrase,submitButton] ; let spanArr = [];
            //G.mgmt.maxFormTofind = 6;

            G.hacks.formQarray = [ firstName ,familyName,userName]
            while (G.hacks.formQarray.length <  G.mgmt.maxFormTofind - 1) {
                G.hacks.formQarray.push(codephrase);
            } ; G.hacks.formQarray.push(submitButton)



            for (i = 0; i < qArray.length; i ++){
                if (qArray[i] === familyName) continue
                spanArr[i] = document.createElement('span');
                spanArr[i].innerHTML = '<br>';
                spanArr[i].appendChild(qArray[i]);
                if (qArray[i + 1] === familyName) {spanArr[i].appendChild(qArray[i + 1])}
                spanArr[i].id = 'formP-' + i;

            }

            G.divs.ipadContent = G.divs.ipadContent || Elm ('ipadContent','img');
            var img = G.divs.ipadContent;
            img.src = "data/White-Noise (1).jpg"
            let ipadCover = Id ('ipadCover');

            stl (ipadCover, { 'borderRadius': '2vmin' });
            ipadCover = Id ('ipadCover'); stl (ipadCover,myStyle ('text'),{
                'fontFamily': 'ariel', 'textAlign': 'center', 'lineHeight' : '3vmin','backgroundColor': G.css.formBackColor
            });
            ipadCover.innerHTML = '<br><font style="color:black;"> &nbsp' + 'כניסת משתמש' +'<br><br>'
            ipadCover.style.background = G.css.formBackColor;
            var userForm = document.createElement('form'); stl (userForm, myStyle ('text'), {'fontSize': '1vmin', 'padding-right':'0vmin', 'textAlign': 'center'});
            ipadCover.appendChild(userForm)

            let passportIMG = Elm ('passportIMG', 'img');
            passportIMG.src = 'data/passports/passport (20).jpg'
            stl (passportIMG, {'width': '30%' , 'margins' : '1vmin', 'border': '0.3vmin solid #ccc ', 'border-radius': '1vmin'});
            userForm.appendChild (passportIMG);
            spanArr.forEach(e=>{userForm.appendChild(e)})
            img.onload = function() {}
            setFormData ();
            //retryPass(codephrase)

        }
        G.hacks.formQarray = G.hacks.formQarray || [];
        let ipadCover = Id ('ipadCover')
        if (answeris === 'right') {let ipadCover = Id ('ipadCover');
            ipadCover.style.filter = '';
            ipadCover.isbluring = false;
            addUserClue ()}
        else if (answeris === 'wrong') {
            var img = G.divs.ipadContent;
            img.src = "data/White-Noise (1).jpg"
            let rnd = getRandomInt (100) + 30
            whiteNoise (rnd,img); ipadCover.style.opacity = '0.5'}
        else {drawBaseForm ();}
        for (i1 = 1; i1  <= G.hacks.numOfsuccess; i1++) {
            if (i   > G.hacks.formQarray.length) break;
            let q = G.hacks.formQarray[i1-1]
            if (q === undefined) {} else {
                q.value =  q.data
                if (q.id === 'firstName' && G.hacks.numOfsuccess === i1) {Id ('passportIMG').src = Id ('passportIMG').data;  'data/passports/passport (19).jpg';
                let b = 'blur(' + 0.5 +'rem)'; Id ('passportIMG').style.filter = b;}
                if (q.id === 'familyName' && G.hacks.numOfsuccess === i1 ) {blureChanger (Id ('passportIMG'))}
                if (q.id === 'codephrase' &&  G.hacks.formQarray[i1-1].id === 'codephrase'  && G.hacks.numOfsuccess === i1) {
                    retryPass(Id('codephrase')) }
                if (q.id ===  'submitButton' ) { q.style.backgroundColor = 'rgb(144, 238, 144)'; colorBorderSubmit (q,60, 1);

            }

            }
        }
        if(G.hacks.numOfsuccess + 1 >G.mgmt.maxFormTofind) {  G.mgmt.isFinalAnsInChapter = true; consoleHackedUser () }
    }
    function virus () {
        function asciImage () {
            let asci = `                    11010101
                 uu$$$$$$$$$$$uu
              uuoo$1$$$o$$$$o$o$$uu
             u$$$$$$$$$$$$$$$$$$$$$u
            u$$$$$o$$$$o$$$o$$$1$$$$u
           u$$o$$$1$$$o$$$$$o$$$$o$$$u
           u$$$$o$$o$$$$$o$$$$$o$$$$$u
           u$$o$$*   *$$$*   *$$$$$$u
           *$$$$*      u$u       $$o$*
            $o$u       u$u       u$o$
            $$$u      u$$$u      u$$$
             *$$$$uu$$$   $$$uu$$$$*
              *$o$$o$$*   *$o$o$$$*
                u$$$$$$$u$$$$$$$u
                 u$*$*$*$*$*$*$u
      uuu        $$u$ H H H $u$$       uuu
     u$$$$        $$$$$u$u$u$$$       u$$$$
      $$$$$uu      *$$$$$$$$$*     uu$$$$$$
    u$$H$$$H$$$$uu    *****    uuuu$$H$$H$$$$
    $$$$***$$$$$$$$$$uuu   uu$$$$H$$$$***$$$*
     ***      **$$H$$H$$$$$uu **$***
               uuuu **$$H$$H$$$$uuu
      u$$$uuu$$$$$$$$$uu **$$$$$$$$$$$uuu$$$
      $H$$H$$H$$****           **$$$$$H$$$$$*
       *$$$$$*                      **$$$$**
         $$$*                         $$$$*            `
            return asci
        }
        function asciRending (asc) {
            asc = asc.replace(' ', '&nbsp')
            asc = '<pre><br><br>' + asc;
            return asc
        }
        function conseal(txt, number = 0) {
            let regexArray = [/\$/g,/o/g,/u/g,/H/g, /\*/g ]
            if (number > regexArray.length){ number = 0}
            let result = txt.replace(regexArray[number], '&nbsp')
            return result
        }
        let t = asciImage();
        t = asciRending (t)
        let consealed = conseal(t,0)
        let ipadCover = Id('ipadCover');
        ipadCover.style.fontSize = "1.8vmin";
        ipadCover.style.color = 'white';
        ipadCover.innerHTML = consealed;
        function lesandless (n) {
           let s = ipadCover.innerHTML
           s = conseal(s,n)
           ipadCover.innerHTML = s
           if (n === 4) {n = -1; ipadCover.innerHTML = t}
           setTimeout(()=>{lesandless (n + 1)}, 900)
        }
         lesandless (0)

    }
    var answeris = ''; type0 = type0  || G.hacks.current; if ( type0 === G.hacks.current){G.hacks.numOfsuccess = 0} ; if (type0 === 'right' || type0 === 'wrong') {answeris = type0; type0 = G.hacks.current} else if (type0 == "getIp" ) {G.hacks.numOfsuccess = 0}; if (type0 == 'finishChaper' && G.hacks.current === 'getIp'){
        type0 = G.hacks.current; }
    switch( type0) {
        case 'getIp':
        G.hacks.current = 'getIp';
         getIp ()
        break;
        case 'firewall':
        G.hacks.current = 'firewall';
         fireWall ()
         break;
        case 'user':
         G.hacks.current = 'user';
          user ()
          break;
        case 'virus':
         G.hacks.current = 'virus'
        virus ()


    }
}
// main:
buildBoard ();
setQuestion (1);
IpadGrahpic (G.mgmt.stage);
holoMenu(); //test ('holo')
