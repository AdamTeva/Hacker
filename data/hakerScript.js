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
        G.mgmt.numberOftriesPerQuestion = 0;
        G.mgmt.savedSession = {};
        /* savings  */
        G.saves = {};
        G.saves.qNumber = 0; // question number
        G.saves.progressArray = [];
        /* STAGE */
        G.mgmt.stageNumber = 1; //the stage number to begin /* safd */
        G.mgmt.stageNames = ["",'webSite','getIp','firewall','user','virus', 'server'];
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
        G.mgmt.max_Tofind = {}
        G.mgmt.max_Tofind.ip = 3;
        G.mgmt.max_Tofind.firewall = 3
        G.mgmt.max_Tofind.form = 5
        G.mgmt.max_Tofind.virus = 3
        G.mgmt.max_Tofind.ip = 3;
        G.mgmt.max_Tofind.firewall = 5;
        G.mgmt.max_Tofind.form = 5;
        G.mgmt.isFinalAnsInChapter = false;
        G.mgmt.soundIsOn = true;
        G.mgmt.nextStage = function () {G.mgmt.stageNumber++ ; G.mgmt.stage = G.mgmt.stageNames [G.mgmt.stageNumber]; G.hacks.current = G.mgmt.stage ; G.hacks.numOfsuccess = 0 ;  }
        G.divs = {};
        G.hacks = {};
        G.hacks.numOfsuccess = 0;
        G.hacks.current = G.mgmt.stageNames // getIp // firewall
        G.hacks.firewallCodeId = 'FWhacksId';
        G.hacks.firewallFinishText = 'ההגנה נעקפה.'
        G.hacks.firewallScrambleColor = 'yellow'
        G.hacks.visrusNumberOfrows = 0;
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
                //ansDiv.innerHTML = G.Q[G.saves.qNumber][numOfans + 2] // newHtml;
                for (let i = 1; i < 5; i++) {
                    //if (i == numOfans) {continue}
                    if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.saves.qNumber][i + 2]}
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
        let html = G.Q[G.saves.qNumber][numOfans + 2];
        let newHtml = "<span style='background-color:" +  G.css.textcolor + "; color : " + G.css.backGroundtextcolor + "'>" + html + "</span>";
        ansDiv.innerHTML = newHtml;

        for (let i = 1; i < 5; i++) {
            if (i == numOfans) {continue}
            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.saves.qNumber][i + 2]}
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
                    return true
                }

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
    if (elem === 'rightAnswerClick') {elem = {}; let rightAnswer = G.Q[G.saves.qNumber][G.mgmt.solutionCol]
    let idName = 'ans'+ rightAnswer;
    let div = Id(idName); elem.target = div}

    function wrongAnswerAnimation (num) {
        if (G.saves.qNumber !== 500) {G.mgmt.numberOftriesPerQuestion++}



        G.mgmt.isAnswering = true;
        let text = G.Q[G.saves.qNumber][2 + num]

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


        if (G.saves.qNumber !== 500) {
            IpadGrahpic ('right');
            G.mgmt.numberOftriesPerQuestion++;
            G.saves.progressArray.push(G.mgmt.numberOftriesPerQuestion);
            G.mgmt.numberOftriesPerQuestion = 0;

        }
        G.mgmt.isAnswering = true;
        if(storeInLocal ('check')) {storeInLocal ('save')}

        let op  = 1;
        let opDelta = 0.05
        let time = 20;
        let tb = Id('textBlock');
        let rgnObj = hexToRgb(G.css.textcolor)
        let rgbPartialTxt = "rgba(" + rgnObj.r + "," + rgnObj.g + "," + rgnObj.b + ",";
        for (let i = 1; i < 5; i++) {

            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.saves.qNumber][i + 2]}
        }
        function fadeOut () {

            let finRgb = rgbPartialTxt + op + ")"
            //
            tb.style.color = finRgb;
            op =  op - opDelta;
            if (op > 0){setTimeout(()=>{fadeOut ()}, time)} else if (!G.mgmt.isFinalAnsInChapter){

                if (G.saves.qNumber === 500){G.saves.qNumber = G.mgmt.lastqNumber; IpadGrahpic (G.mgmt.stage)} ;

            setQuestion(G.saves.qNumber+1)} else if (G.mgmt.isFinalAnsInChapter) {

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
    let solutionNumber = G.Q[G.saves.qNumber][G.mgmt.solutionCol]
    let solutionText = G.Q[G.saves.qNumber][2 + Number(solutionNumber)]

    if (numOfans == G.Q[G.saves.qNumber][G.mgmt.solutionCol]) {answerAnimation(solutionText)} else {

        wrongAnswerAnimation (numOfans)
        }

}
function holoMenu () { // creats the menue inside the holo;
    //G.divs.holoMenuoptions = G.divs.holoMenuoptions || [];
    function submitF(formArray) {
        let Formtext = Id('Formtext');
       if (formArray === 'clear'){
           if (!storeInLocal ('check')){ Formtext.innerHTML = 'לא נמצא מידע שמור. ניתן להתחיל משחק חדש על ידי רענון החלון.' ;
           return;
       }
           let tx = 'האם אתם מעוניינים למחוק את כל ההתקדמות ולהתחיל משחק חדש ?'
           if (confirm(tx)) { storeInLocal ('reset'); location.reload()}
           return
       }
       let input = Id('input').value
       if (input.length < 2){Formtext.innerHTML = 'שם צריך להכיל לפחות 2 אותיות' + '<br>'; return}
       G.saves.nameOfplayer = input;
       //visuaGamelLoader (true);
       Formtext.innerHTML = '&nbsp';
       let inputName = input;
       inputName += ", מעכשיו ההתקדמות שלך במשחק תישמר"
       setTimeout(()=>{StylelFader (Formtext,50,true)
       Formtext.innerHTML = inputName;},50 )
       storeInLocal ('save')



    }
    function saveMenu () {
        let userMessage = '  ניתן לשמור את ההתקדמות על המחשב הזה';
        //let
        let formStyle = `font-family: david; font-size: 4vmin; color:rgba(3,100,100); opacity:0.7; text-shadow :6px 2px 8px yellow ; border-radius:1vmin;font-weight:bold;`

       if (storeInLocal ('check')){userMessage = G.saves.nameOfplayer + ', ';
       userMessage  += ' ההתקדמות שלך במשחק נשמרת'
       }
       userMessage += ' <br>'


        let form = `<form id='saveForm' method="post" action="javascript:" style="text-align: center ;font-size: 3vmins">
<div id ="Formtext" style="height:7vmin;"> ${userMessage}</div><br>
  <input id='input' type="text" name="name" value="" style="${formStyle} ; color:rgba(3,3,3) ;background: transparent; border-radius: 0.5vmin ; width:70%;" ><br>

  <br>

  <input id="saveButton" type="submit" value="שמירה" style=" ${formStyle}font-size: 4vmin">&nbsp&nbsp
 <input id="clear" type="submit" value="משחק חדש" style=" ${formStyle}font-size: 4vmin">
</form><br><br>`
let op = [ ['form' , form],['mainMenu', 'חזרה']]
createMenu (op)


    }
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
    function createMenu (arrayOfText) {
        fadeOutPromise (G.divs.holoScreen, 20).then((returnValue)=>{
            G.divs.holoScreen.innerHTML = '';
            StylelFader (G.divs.holoScreen, 30, true)
            arrayOfText.forEach (function (i){addOption(i)})
        })


        }
    function addOption (text) {
         var option = Elm (text[0]);
         var extraStyle = {};
         G.divs.holoScreen.appendChild (option) ;
         stl (option, { 'fontFamily': 'david', 'fontSize': '5vmin', 'color' : 'rgba(3,100,100)', 'opacity' : 0.7, 'textShadow' : "6px 2px 8px yellow",}, extraStyle)
         option.innerHTML = text[1] ;
         if (text[0] === 'form') {
             let save = Id('saveButton');  save.addEventListener('click',(f)=>{submitF(f)})
             let clear = Id('clear');  clear.addEventListener('click',(f)=>{submitF('clear')})
         }
         if (text[0] === 'text' || text[0] === 'form') {option.style.fontSize = '2.8vmin'; option.style.paddingRight = "6vmin"; option.style.textAlign = "right"; return}
         option.addEventListener('mouseout',mouseInOut);
         option.addEventListener('mouseover',mouseInOut)
         option.addEventListener('click',clickSubMenu);
    }
    function progressMenu () {
        function checkForUpdate (tim) {
            if(G.divs.holoScreen.innerHTML.includes(txt0)){
                if (qAnswered === G.saves.progressArray.length){setTimeout(()=>{checkForUpdate (5000)},3000 )} else {progressMenu ()}
            }
        }

        function preCent (small,big) {
            if (small && big){} else return '0%'
            let double = Math.floor(100*(small / big))
            return double + '%'

        }
        let qTotal = G.Q.length || 0;
        let qAnswered = G.saves.progressArray.length || 0 ;
        L(G.saves.progressArray)
        let qNumBytry = [];
        let qprecent = preCent (qAnswered,qTotal)
        for (let a= 0; a < 4; a++){
            var countOfTries = 0
            G.saves.progressArray.forEach((e)=>{if (e === (a+1)){countOfTries++}})
            qNumBytry[a] = countOfTries;
        }
        let q0=0, q1=0, q23=0, p0='0%', p1='0%', p23='0%';
        q0 = qNumBytry[0]; q1 = qNumBytry[1]; q23 = qNumBytry[2] + qNumBytry[3]
        p0 = preCent(q0,qAnswered); p1 =  preCent(q1,qAnswered); p23=  preCent(q23,qAnswered)
        let txt0 =  'נתוני ההתקדמות במשחק:';
        let txt1 = `<br><br>עניתם על ` +  qAnswered + ' מתוך ' + qTotal + ' שאלות, שהן ' + qprecent + '&nbsp'+ 'מכלל השאלות.'
        let table = `<table style="width:100% ; border: solid 0.2vmin;  border-collapse: collapse; ; text-align: center"> <tr style="border:solid 0.2vmin">   <th  style="border:solid 0.2vmin" >סוג המענה</th>   <th  style="border: solid 0.2vmin">במספרים</th>   <th  style="border: solid 0.2vmin">באחוזים</th> </tr> <tr  style="border: solid 0.2vmin">  <td>ללא טעויות</td>   <td>${q0}</td> <td>${p0}</td> </tr> <tr>   <td>בנסיון שני</td>   <td>${q1}</td> <td>${p1}</td> </tr> <tr>   <td> אחרי נסיון שני</td>   <td>${q23}</td> <td>${p23}</td> </tr></table>`

        txt = txt0 + txt1 + table;
        let op = [ ['text' , txt],['mainMenu', 'חזרה']]
        createMenu (op)
        setTimeout(()=>{checkForUpdate (3000)},3000 )

    }
    function helpMenu  (){
        let helpText = `ענו על השאלות כדי להתקדם במשחק.כדי לענות על השאלות יש ללחוץ על התשובה הנכונה.
לכל שאלה יש רק תשובה אחת נכונה. אם לא עניתם על התשובה הנכונה, תוכלו לנסות שוב.
<br><br>
על ידי פתיחת תפריט ההולוגרמה תוכלו:<br>
לשמור את המשחק על המחשב הזה,  לראות את ההתקדמות שלכם במשחק ולהפעיל ולהשתיק את הקול. <br><br>
`
        let op = [ ['text' , helpText],['mainMenu', 'חזרה']]
        createMenu (op)

    }
    function optionsMenu () {
        let sound;
        if (G.mgmt.soundIsOn) { sound = ['soundOff','השתק צלילים']} else { sound = ['soundOn','הפעל צלילים']}
        let op = [sound,['mainMenu', 'חזרה']]
        createMenu (op)
    }
    function clickSubMenu () {
        switch (event.target.id) {
            case 'optionsMenu': optionsMenu ();break;
            case 'progressMenu': progressMenu ();break;
            case 'saveMenu': saveMenu ();break;
            case 'helpMenu': helpMenu ();break;mainMenu
            case 'mainMenu': mainMenu ();break;
            case 'soundOff': case 'soundOn':
            G.mgmt.soundIsOn = !G.mgmt.soundIsOn;
            optionsMenu () ;break;


            //case optionArray
        }
    }
    function mainMenu (){
         let optionArray = [['optionsMenu','אפשרויות'],['progressMenu', 'התקדמות'] ,['saveMenu','שמירה'],['helpMenu','עזרה']]
         createMenu (optionArray)
     }
    function fadeOutPromise (element0, tm = 30){
        let opct = 1;
         let delta = 0.1;
            let promise0 = new Promise((resolve, reject) => {
                function faderEngine (opct) {
                    element0.style.opacity = opct;
                    opct -= delta
                    if (opct<0){ resolve ('worked');}
                    else { setTimeout(()=>faderEngine (opct),tm)}

                }
                faderEngine (1)

                // let wait = setTimeout(() => {
                //     clearTimout(wait);
                //     resolve('Promise A win!');
                // }, 200)
            })
            return promise0
     }


    holoAnimation ();
    mainMenu ();
    G.divs.holoContainer.style.opacity = "0";
    let page = Id('laptopKeyboard')





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
                    if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.saves.qNumber][i + 2]}
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
        let html = G.Q[G.saves.qNumber][numOfans + 2];
        let newHtml = "<span style='background-color:" +  G.css.textcolor + "; color : " + G.css.backGroundtextcolor + "'>" + html + "</span>";
        ansDiv.innerHTML = newHtml;

        for (let i = 1; i < 5; i++) {
            if (i == numOfans) {continue}
            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.saves.qNumber][i + 2]}
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
            overflow: 'hidden',

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
function storeInLocal (command){
    let myFileName = location.pathname //.split("/").slice(-1)
    let htmlFileName = myFileName ;//[0];
    switch (command){
        case 'check':
        let chk = localStorage.getItem('isSaved' + htmlFileName);
        if (chk == 'true'){return true} else {return false}
        break;

        case 'save':
        localStorage.setItem('global' + htmlFileName, JSON.stringify(G.saves));
        localStorage.setItem('isSaved' + htmlFileName, 'true');
        break;

        case 'load':
        var retrievedObject = localStorage.getItem('global' + htmlFileName);
        G.saves = JSON.parse(retrievedObject);
        break;

        case 'reset':
        localStorage.setItem('isSaved' + htmlFileName, 'false')
        break;
    }
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
    if (G.saves.qNumber < 499) {G.mgmt.lastqNumber = G.saves.qNumber;}
    G.saves.qNumber = num;

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
        if (G.hacks.numOfsuccess >= G.mgmt.max_Tofind.ip) {FullIpWasfoundAnimation (); consoleFoundIp()} else {drawIpIpad ()}

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

                            if(G.hacks.numOfsuccess >=G.mgmt.max_Tofind.firewall){} else return;

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
                            if (G.hacks.numOfsuccess >=G.mgmt.max_Tofind.firewall ){
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
                if (G.hacks.numOfsuccess > 0 && G.hacks.numOfsuccess <= G.mgmt.max_Tofind.firewall  ) {showChips (num)};


            }
        }
        var ipadFireWallBGColor = "linear-gradient(135deg, rgba(78,92,90,1) 0%,rgba(78,92,90,0.57) 25%,rgba(78,92,90,0.9) 57%,rgba(101,118,119,0.89) 83%,rgba(25,26,63,1) 100%"
        if (answeris === 'right') {let ipadCover = Id ('ipadCover');
            ipadCover.style.filter = ''; setBG('');
            ipadCover.isbluring = false;
            addFirewallClue ()}
            else if (answeris === 'wrong') {blureChanger ();setBG(ipadFireWallBGColor)}
        if (G.hacks.piecesOfFirewall) {} else {setFirewallPieces (100)}
        if(G.hacks.numOfsuccess + 1 >G.mgmt.max_Tofind.firewall){G.mgmt.isFinalAnsInChapter = true } //current

        drawFireWallIpad ()
    }
    function user (){
        function consoleHackedUser(stage = 1) {

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
                if (G.hacks.numOfsuccess === G.mgmt.max_Tofind.form) {
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
            //G.mgmt.max_Tofind.form = 6;

            G.hacks.formQarray = [ firstName ,familyName,userName]
            while (G.hacks.formQarray.length <  G.mgmt.max_Tofind.form - 1) {
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
        if(G.hacks.numOfsuccess + 1 >G.mgmt.max_Tofind.form) {  G.mgmt.isFinalAnsInChapter = true; consoleHackedUser () }
    }
    function virus () {
        function virusComplete () {
            for (let t = 0; t < G.hacks.visrusNumberOfrows; t++){
                let sp = Id('asciSpan' + t);
                sp.style.color = "";
                sp.style.opacity = 1;
            }
            let status = 1;
            let c1 =  "white";
            let c2 =  "black";
            let times = 0;
            function reversColors(){
                if (times>31) return ; times++


                ipadCover.style.background = c1  ;
                ipadCover.style.color =  c2 ;
                setTimeout( ()=> {[c1 ,c2] = [c2 ,c1];reversColors()},200);

            }
            reversColors()

        }
        function asciImage () {
            let asciArr = [];
            asciArr[1] = `MMMMMMMMMMMMMMMMN0d:'.      .':d0NMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMNOl;.              .;oONMMMMMMMMMMMMM
MMMMMMMMMMWKo'                      'oKWMMMMMMMMMM
MMMMMMMMMNx.                          .xNMMMMMMMMM
MMMMMMMMWx.                            .xWMMMMMMMM
MMMMMMMMWl                              lWMMMMMMMM
MMMMMMMMWd.                            .dWMMMMMMMM
MMMMMMMMMO.                            .OMMMMMMMMM
MMMMMMMMMK;                            ,KMMMMMMMMM
XOxOWMMMMNc   .','.            .','.   cNMMMMNOxOX
;  .OMMMMNl  ,0NWNKOd;.    .;dOKNWN0;  lNMMMMO.  ;
c   ,OWMNo.  lWMMMMMMX:    :XMMMMMMWl  .oNMWO,   c
0'   .;x0l.  :XMMMMWKo.    .oKWMMMMX:  .l0x;.   '0
:       ;kx' .:ddol;.  .cc.  .;lodd;  'xO;       :
:::;;,'..'dOc         ,OWWO,        .cOd'..',;;:::
MMMWWWNX0kkKNkc;'     cxddx:     ';ckNKkk0XNWWWMMM
MMMMMMMMMMMMMMMWX:              :XWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMWXKNOc;.        .;cONKKWMMMMMMMMMMMMM
MMMMMNXK0Okoc,..x0docc:;::;:ccodKx..,coxO0KXNMMMMM
MMMMK:...       'kNKxxolddloxxKNk'       ...:KMMMM
MMMMXxc.      .lOXWMMMMWMWWMMMMWXOl.      .cxXMMMM
MMMMMMWK;   .oXWMMMMMMMMMMMMMMMMMMMXo.   ;KWMMMMMM
MMMMMMMMO' .xWMMMMMMMMMMMMMMMMMMMMMMWx. 'OMMMMMMMM


            `
        asciArr[2] = `
MX01101MX01101W0xdoxkO0KKKK0Okxoox0WMX01101MX01101
MX01K01MMMMMMNkc:::::::cccc:::::::ckNMX01101MMMMMM
MX01101MMMMMWOl                    lOWMX01101MMMMM
MXKJ101MMMMMNd                      dXMX01101MMMMM
MX01101MMMMMKo                      oKMX01101MMMMM
MX01101MMWWNOl                      lONWMX01101MMM
MMMMMMWN0xdoc::::::::::::::::::::::::cldx0NWMMMMMM
MMMMMMXd:::::::::::::::::::::::::::::::::cdXMMMMMM
MMMMMMXxc::::::::::::::::::::::::::::::::cxXMMMMMM
MX01A01WXOkd:;;;;;;;;;;;;;;;;;;;;;;;;:okOKNWMMMMMM
MX01B01MMMM0:'''     ;'''''';     ''':0MX01101MMMM
MX01101MMMMKc'''lO00Oo,'''',oO00Ol'''cKMX01101MMMM
MX01101MMMMNx;,,       ,'''',     ,,;xNMX01101MMMM
MX01101MMMMMN0kkkkkkkkkkkkkkkkkkkkkO0NMX01101MMMMM
MX01101MMMMMMWXKKKKKKKKKKKKKKKKKKKKXWMX01101MMMMMM
MX01101MMMNKO0XNXKKKKKKKKKKKKKKKKXNX0OKNMX01101MMM
MX01101MNOdc:cd0XNXKKKKKKKKKKKKXNN0dc:cdONMX01101M
MX01101Xxl:::::cdk0KXXXXXXXXXXK0kdc:::::lkXMX01101
MMMMMMNOo:;,;;:::ccoxk0XNNX0kxolc:::;;,;:oONMMMMMM
MMMMWOl;......,,;;::::o0NN0o::::;;,,......;lONMMMM
MMMNx;...........,,;::cd00xc::;,,...........;xNMMM
MMWk;''''''''''''''',;:cllc:;,''''''''''''''';kWMM
MMKl'''''''''''''''''',;;:;,''''''''''''''''''lKMM
MMO:',''''''''''',''''',,,,'''','''''''''''',':OMM
MMKdoooooooooooooooooooooooooooooooooooooooooodKMM
`

asciArr[3] = `
WWWWWWKxodxkOKXNWWWWWWWWWWWWWWWWWWWNX0OxxdoxXWWWWW
WWWWNxcxKWWWW1WWWWX0100100WWWW1123WWWdfrWN0lcOWWWW
WWWxc0WWWWWWWX0100100WWWWX0100100WWW00000023WxlKWW
WWXldWWWWWWWNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKcxWW
WWkc0WWNOdol:;,,:lxKWWWWWWWWWWWWKkdlc::clxKWWWolNW
WWdlNWXkkO0Oo;'... .cOWWWWWWWXx;. ....'cxxxONMxcKW
WXldWWNNWWWWNXOo:     .OWWWWWNl  .,:odkKWWWXXMO:kW
WKcxWWWWWWWWWWWWXx;',oXWWWWWWk;.'ckXWWWWWWWWWWK:xW
WOckWWWWWX0OkkOKNWXc.:KWWWWWWOcl0NWNXKKXWWWWWMXlxM
WkcOWNk/””””””””\ck0; lNWWWKKNKd/””””””””\ckNMXoxM
Wxc0WWk.          .xc ,KWWWWWWW0,         .xWMNokW
MxcKMWOo_--_____)OKK: ,KWWWWWWWN0k________kXWWNdkW
WKclXWWWWWWWWWWWWWWd  cNWWWWWWWWWWWWWWWWWWWWWWKlkW
WNc.oXWWWWWWWWWWWWK,  lWWWWWWWWWWWWWWWWWWWWWWNdcKW
WXloo:xKNNXXKKKN0o,  .xWWWWWWN00NWWWWWWWWWWX0oc0WW
WWNllkcoc.oXWWWNd.   lWWWWWWWWWNNWWWNXk,.oclklkWWW
WWWKcoOdo:.'oOXWWW. .lNWWWN00NWWWWWWKd''xxoOolXWWW
WWWW0coKxc:' .,clc'cxe\cc:,..:kOOxo:..:koo0dc0WWWW
WWWWWKcoXk:col;..                  .ckd;oKdc0WWWWW
WWWWWWKcoXO,.l0X0kdddk0OOOOl;:clodOXW0lxKolKWWWWWW
WWWWWWWKclX0, ,OXXNWWWWNNNNNWWWWWWWWKk00ldXWWWWWWW
WWWWWWWWXlcK0';KWNXXKxcccccxNWWWWWWX0XOlkWWWWWWWWW
WWWWWWWWWNdcOkl0W0-WWk.   .xNWWWWWKKXxl0WWWWWWWWWW
WWWWWWWWWWWWWNxcOWWWK,    .xWWWWXdcOWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWOcoXWWl    ;XWWNkldXWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWXdlokl010KcOkdodKWWWWWWWWWWWWWWWWW

`
let rnd = getRandomInt(asciArr.length - 1);
            return asciArr[rnd]
        }
        function asciRending (asc) {
            asc = asc.replace(' ', '&nbsp')
            asc = '<pre><p style="text-align: center"> <font style="font-size: 3vmin"> בונה וירוס תקיפה </font></p>' + asc;
            return asc
        }
        function asciPasrseToSpan (txt0){
            let array = txt0.split(/\r?\n/); let htmltxt = '';
            for (i = 0; i < array.length; i++){
                G.hacks.visrusNumberOfrows = i;

             let line = '<span id="' + ascispanId + i + '" style="font-size:inherit; opacity : 0;">' + array[i] + '</span><br>';
             htmltxt  += line
            }
            return htmltxt
        }
        function rightAnswer (){
            G.hacks.numOfsuccess++;
            let numberToreveal0 = Math.floor(G.hacks.visrusNumberOfrows/ G.mgmt.max_Tofind.virus)
            revealvirus(numberToreveal0);
        }
        function wrongAnser (){
            function blinkingRow (elem) {
                let color = elem.style.color;
                function blink (b) {

                    if ( b % 2 == 0) {elem.style.color = 'red'} else {elem.style.color = 'yellow'}


                    b++;
                    if (b>20){setTimeout(()=>{elem.style.color = 'white' },4000) ;return }
                    setTimeout (()=>{ blink (b)},100 )
                }
                blink (1 )
            }
            let children = ipadCover.childNodes;
            let asciSpanId = 'asciSpan';
            let destenationOfRedRows = (G.hacks.numOfsuccess / G.mgmt.max_Tofind.virus ) * 3;
            let redRows = 0
            for (q = 0; q < G.hacks.visrusNumberOfrows; q++){
                let rnd = getRandomInt (3)
                let spn = Id(asciSpanId + q);

                if (rnd === 1) { spn.style.color = 'red'; blinkingRow (spn) ; redRows++}

                //if (redRows > destenationOfRedRows) {break}
            }


        }
        function revealvirus (numberToreveal){

            let isVirusFinished = false;
            if (G.hacks.numOfsuccess >= G.mgmt.max_Tofind.virus) {isVirusFinished = true }
            var saftyCounter = 0;
            function revealOne (){

                if (saftyCounter > 60) return; saftyCounter++
                let rnd = getRandomInt (G.hacks.visrusNumberOfrows+1)
                let span = Id (ascispanId + (rnd - 1) )
                span.style.color = 'white';
                if (!span || span.style.opacity === '1'){revealOne ()} else { StylelFader (span,30,true)   ; return}

            }
            revealOne ()
            numberToreveal--
            if (numberToreveal > 0) {setTimeout(()=>{revealvirus (numberToreveal)},200)} else if (isVirusFinished)  virusComplete ()


        }
        function BuildVirus () {
            let t = asciImage ()
             t = asciRending (t);
             t = asciPasrseToSpan (t);
             ipadCover.style.fontSize = "2vmin";
             ipadCover.style.color = 'white';
             ipadCover.innerHTML = t;


         }
        const ascispanId = 'asciSpan'; //
        var ipadCover = Id('ipadCover');
        if (answeris === 'right') { rightAnswer ()} else if (answeris === 'wrong') {wrongAnser ()} else{ BuildVirus ()};
    }
    function webSite () {
        function getSVGs () {

            var svgHTML = [  ` <svg version="1.1" id="maps" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 59.51 59.51" style="enable-background:new 0 0 59.51 59.51;" xml:space="preserve"> <polygon style="fill:#FFFFFF;" points="53.057,24.76 43.057,24.76 17.057,24.76 7.057,24.76 3.402,53.76 56.171,53.76 "/> <path style="fill:#556080;" d="M53.057,24.76l3.114,29H3.402l3.655-29h10h26H53.057 M55.752,21.76h-2.695h-10h-26h-10H4.411 	L4.08,24.385l-3.655,29L0,56.76h3.402h52.769h3.339l-0.357-3.32l-3.114-29L55.752,21.76L55.752,21.76z"/> <path style="fill:#EBBA16;" d="M13.684,49.76c-0.257,0-0.513-0.016-0.769-0.047c-0.218-0.026-0.438-0.067-0.653-0.124 	c-0.535-0.138-0.856-0.684-0.718-1.218c0.138-0.535,0.683-0.86,1.218-0.718c0.132,0.033,0.264,0.059,0.396,0.075 	c0.403,0.05,0.811,0.037,1.215-0.015c0.552-0.065,1.049,0.319,1.117,0.867c0.069,0.548-0.319,1.048-0.867,1.117 	C14.31,49.738,13.995,49.76,13.684,49.76z M18.334,48.602c-0.401,0-0.779-0.243-0.933-0.64c-0.199-0.516,0.058-1.095,0.572-1.293 	c0.592-0.229,1.188-0.483,1.774-0.759c0.503-0.235,1.096-0.019,1.33,0.48c0.234,0.5,0.02,1.096-0.48,1.33 	c-0.628,0.295-1.269,0.568-1.903,0.813C18.576,48.581,18.454,48.602,18.334,48.602z M9.987,46.87c-0.507,0-0.941-0.384-0.994-0.898 	c-0.02-0.197-0.028-0.395-0.028-0.592c0-0.116,0.003-0.232,0.009-0.347c0.023-0.469,0.099-0.942,0.225-1.406 	c0.144-0.535,0.697-0.853,1.226-0.704c0.533,0.144,0.849,0.692,0.704,1.226c-0.088,0.326-0.141,0.657-0.156,0.983 	c-0.004,0.082-0.007,0.165-0.007,0.248c0,0.129,0.005,0.26,0.019,0.389c0.056,0.55-0.345,1.04-0.894,1.097 	C10.055,46.868,10.021,46.87,9.987,46.87z M23.666,45.871c-0.327,0-0.648-0.16-0.84-0.455c-0.301-0.464-0.169-1.083,0.294-1.384 	c0.535-0.347,1.066-0.72,1.58-1.107c0.444-0.332,1.068-0.241,1.401,0.196c0.332,0.441,0.244,1.068-0.196,1.401 	c-0.552,0.415-1.122,0.815-1.695,1.188C24.041,45.819,23.853,45.871,23.666,45.871z M28.425,42.221c-0.309,0-0.613-0.143-0.81-0.411 	c-0.325-0.446-0.227-1.072,0.22-1.397c0.209-0.151,0.422-0.3,0.641-0.441c0.377-0.245,0.781-0.477,1.2-0.688 	c0.496-0.247,1.095-0.048,1.343,0.444c0.248,0.493,0.049,1.095-0.444,1.343c-0.354,0.178-0.693,0.372-1.01,0.577 	c-0.188,0.123-0.372,0.25-0.552,0.382C28.835,42.159,28.629,42.221,28.425,42.221z M12.469,41.748c-0.355,0-0.699-0.189-0.88-0.523 	c-0.264-0.485-0.083-1.092,0.402-1.355c0.518-0.281,1.071-0.456,1.644-0.52c0.29-0.033,0.593-0.032,0.891,0.008 	c0.547,0.072,0.933,0.574,0.86,1.122c-0.072,0.546-0.561,0.931-1.122,0.86c-0.133-0.018-0.271-0.018-0.406-0.002 	c-0.316,0.034-0.623,0.132-0.913,0.289C12.793,41.709,12.63,41.748,12.469,41.748z M33.903,39.896c-0.462,0-0.877-0.321-0.977-0.791 	c-0.115-0.541,0.229-1.072,0.769-1.187c0.643-0.138,1.335-0.252,2.058-0.342c0.553-0.081,1.047,0.32,1.115,0.869 	c0.068,0.548-0.321,1.048-0.869,1.115c-0.665,0.083-1.3,0.188-1.886,0.313C34.042,39.889,33.972,39.896,33.903,39.896z  M39.863,39.279c-0.533,0-0.977-0.421-0.998-0.959c-0.022-0.552,0.406-1.018,0.958-1.04l1.993-0.082 	c0.55-0.05,1.02,0.401,1.045,0.954c0.025,0.551-0.402,1.019-0.954,1.044l-2.002,0.082C39.892,39.279,39.877,39.279,39.863,39.279z  M45.842,38.836c-0.465,0-0.881-0.325-0.979-0.798c-0.111-0.541,0.236-1.07,0.777-1.182c0.578-0.119,1.006-0.286,1.347-0.525 	c0.437-0.341,1.102-0.285,1.438,0.149c0.339,0.437,0.296,1.039-0.14,1.378c-0.055,0.042-0.11,0.083-0.169,0.122 	c-0.544,0.384-1.229,0.661-2.072,0.835C45.977,38.829,45.908,38.836,45.842,38.836z M49.911,34.806 	c-0.098,0-0.197-0.015-0.296-0.045c-0.527-0.163-0.823-0.724-0.659-1.251c0.053-0.171,0.086-0.341,0.097-0.506l0.004-0.116 	c0-0.229-0.044-0.462-0.13-0.694c-0.192-0.518,0.071-1.093,0.59-1.285c0.514-0.191,1.094,0.071,1.285,0.59 	c0.169,0.455,0.255,0.923,0.255,1.39c0,0.084-0.003,0.167-0.008,0.25c-0.022,0.324-0.084,0.646-0.183,0.964 	C50.734,34.531,50.338,34.806,49.911,34.806z M44.851,30.699c-0.436,0-0.837-0.287-0.961-0.729c-0.15-0.531,0.158-1.084,0.69-1.233 	c0.779-0.22,1.597-0.286,2.386-0.18c0.547,0.074,0.931,0.577,0.857,1.125c-0.073,0.547-0.566,0.931-1.125,0.857 	c-0.521-0.069-1.058-0.023-1.575,0.121C45.032,30.687,44.942,30.699,44.851,30.699z"/> <path style="fill:#DD352E;" d="M40.844,11.931C40.32,7.932,38.23,2.75,30.022,2.75c-8.207,0-10.298,5.182-10.822,9.181 	c-0.287,2.192-0.126,4.419,0.33,6.582c2.509,11.893,8.71,19.022,10.177,20.577c0.172,0.182,0.458,0.182,0.63,0 	c1.467-1.555,7.668-8.684,10.177-20.577C40.971,16.35,41.132,14.123,40.844,11.931z M30.022,19.672 	c-3.505,0-6.346-2.841-6.346-6.346c0-3.505,2.841-6.345,6.346-6.345c3.505,0,6.346,2.841,6.346,6.345 	C36.368,16.831,33.527,19.672,30.022,19.672z"/> <g> 	<path style="fill:#B02721;" d="M30.023,5.981c-4.051,0-7.346,3.295-7.346,7.345c0,4.051,3.295,7.346,7.346,7.346  s7.346-3.295,7.346-7.346C37.368,9.276,34.073,5.981,30.023,5.981z M30.023,18.672c-2.947,0-5.346-2.398-5.346-5.346  s2.398-5.345,5.346-5.345s5.346,2.397,5.346,5.345S32.97,18.672,30.023,18.672z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, `<svg version="1.1" id="Calandar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <polygon style="fill:#FC3952;" points="48,4 48,8 41,8 41,4 17,4 17,8 10,8 10,4 2,4 2,15 56,15 56,4 "/> <polygon style="fill:#EDEADA;" points="10,15 2,15 2,58 56,58 56,15 48,15 41,15 17,15 "/> <path style="fill:#CEC9AE;" d="M39,22h-2h-7h-2h-7h-2h-9v9v2v7v2v9h9h2h7h2h7h2h9v-9v-2v-7v-2v-9H39z M30,24h7v7h-7V24z M37,40h-7 v-7h7V40z M21,33h7v7h-7V33z M21,24h7v7h-7V24z M12,24h7v7h-7V24z M12,33h7v7h-7V33z M19,49h-7v-7h7V49z M28,49h-7v-7h7V49z M37,49 h-7v-7h7V49z M46,49h-7v-7h7V49z M46,40h-7v-7h7V40z M39,31v-7h7v7H39z"/> <rect x="10" style="fill:#28384C;" width="7" height="8"/> <rect x="41" style="fill:#28384C;" width="7" height="8"/> <rect x="30" y="33" style="fill:#26B99A;" width="7" height="7"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, ` <svg version="1.1" id="server" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"> <path style="fill:#38454F;" d="M50.594,45H1.406C0.63,45,0,44.37,0,43.594V32.406C0,31.63,0.63,31,1.406,31h49.187 	C51.37,31,52,31.63,52,32.406v11.187C52,44.37,51.37,45,50.594,45z"/> <path style="fill:#28384C;" d="M6,49L6,49c-1.657,0-3-1.343-3-3v-1h6v1C9,47.657,7.657,49,6,49z"/> <path style="fill:#28384C;" d="M46,49L46,49c-1.657,0-3-1.343-3-3v-1h6v1C49,47.657,47.657,49,46,49z"/> <circle style="fill:#546A79;" cx="48" cy="36" r="1"/> <circle style="fill:#546A79;" cx="44" cy="36" r="1"/> <circle style="fill:#546A79;" cx="46" cy="40" r="1"/> <circle style="fill:#546A79;" cx="42" cy="40" r="1"/> <circle style="fill:#546A79;" cx="40" cy="36" r="1"/> <circle style="fill:#546A79;" cx="38" cy="40" r="1"/> <circle style="fill:#546A79;" cx="36" cy="36" r="1"/> <circle style="fill:#546A79;" cx="34" cy="40" r="1"/> <circle style="fill:#546A79;" cx="32" cy="36" r="1"/> <circle style="fill:#546A79;" cx="30" cy="40" r="1"/> <path style="fill:#546A79;" d="M50.594,31H1.406C0.63,31,0,30.37,0,29.594V18.406C0,17.63,0.63,17,1.406,17h49.187 	C51.37,17,52,17.63,52,18.406v11.187C52,30.37,51.37,31,50.594,31z"/> <path style="fill:#38454F;" d="M50.594,17H1.406C0.63,17,0,16.37,0,15.594V4.406C0,3.63,0.63,3,1.406,3h49.187 	C51.37,3,52,3.63,52,4.406v11.187C52,16.37,51.37,17,50.594,17z"/> <circle style="fill:#38454F;" cx="48" cy="22" r="1"/> <circle style="fill:#38454F;" cx="44" cy="22" r="1"/> <circle style="fill:#38454F;" cx="46" cy="26" r="1"/> <circle style="fill:#38454F;" cx="42" cy="26" r="1"/> <circle style="fill:#38454F;" cx="40" cy="22" r="1"/> <circle style="fill:#38454F;" cx="38" cy="26" r="1"/> <circle style="fill:#38454F;" cx="36" cy="22" r="1"/> <circle style="fill:#38454F;" cx="34" cy="26" r="1"/> <circle style="fill:#38454F;" cx="32" cy="22" r="1"/> <circle style="fill:#38454F;" cx="30" cy="26" r="1"/> <circle style="fill:#546A79;" cx="48" cy="8" r="1"/> <circle style="fill:#546A79;" cx="44" cy="8" r="1"/> <circle style="fill:#546A79;" cx="46" cy="12" r="1"/> <circle style="fill:#546A79;" cx="42" cy="12" r="1"/> <circle style="fill:#546A79;" cx="40" cy="8" r="1"/> <circle style="fill:#546A79;" cx="38" cy="12" r="1"/> <circle style="fill:#546A79;" cx="36" cy="8" r="1"/> <circle style="fill:#546A79;" cx="34" cy="12" r="1"/> <circle style="fill:#546A79;" cx="32" cy="8" r="1"/> <circle style="fill:#546A79;" cx="30" cy="12" r="1"/> <circle style="fill:#283238;" cx="8" cy="10" r="3"/> <circle style="fill:#81EA1C;" cx="8" cy="10" r="2"/> <circle style="fill:#283238;" cx="8" cy="24" r="3"/> <circle style="fill:#81EA1C;" cx="8" cy="24" r="2"/> <circle style="fill:#283238;" cx="8" cy="38" r="3"/> <circle style="fill:#81EA1C;" cx="8" cy="38" r="2"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`, `<svg version="1.1" id="grocery" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 54.819 54.819" style="enable-background:new 0 0 54.819 54.819;" xml:space="preserve"> <g> 	<path style="fill:#436B1C;" d="M11.217,19.913c-0.335,0-0.663-0.169-0.852-0.476c-0.614-0.995-1.761-2.146-3.078-2.104  c-0.56-0.03-1.014-0.418-1.03-0.969c-0.017-0.553,0.417-1.014,0.969-1.031c2.107-0.063,3.904,1.534,4.841,3.055  c0.29,0.47,0.144,1.086-0.326,1.376C11.578,19.865,11.396,19.913,11.217,19.913z"/> 	<g>  <path style="fill:#88C057;" d="M31.684,6.597c-0.134-1.948-1.753-3.488-3.735-3.488c-0.006,0-0.011,0.001-0.017,0.001  	c0.035-0.295,0.015-0.607-0.08-0.932c-0.268-0.914-1.072-1.616-2.018-1.729c-0.776-0.092-1.488,0.186-1.987,0.679  	c-0.475-0.429-1.097-0.697-1.787-0.697c-1.479,0-2.677,1.199-2.677,2.677c0,0.005,0.001,0.009,0.001,0.014  	c-1.797,0.136-3.214,1.635-3.214,3.467c0,0.28,0.037,0.551,0.099,0.812c-2.139,0.089-3.847,1.847-3.847,4.008  	c0,0.732,0.199,1.416,0.541,2.007c-0.657,0.54-1.077,1.359-1.077,2.276c0,0.838,0.355,1.589,0.917,2.124  	c2.412-1.971,4.946,4.621,7.93,9.884c0.991,1.748,11.698-0.114,12.551,0.972c0.972-0.874,1.6-16.094,1.627-17.431  	C34.953,9.096,33.591,7.266,31.684,6.597z"/> 	</g> 	<path style="fill:#EEAF4B;" d="M33.053,26.533l0.713-0.427c1.32-0.792,2.968-0.792,4.287,0l0.713,0.427  c1.32,0.792,2.968,0.792,4.287,0l2.015-0.896c0.296-0.826,0.502-1.424,0.584-1.689c1.88-6.047,3.091-12.414,3.256-18.765  c0.066-2.554-2.046-6.537-5.555-4.727c-3.449,1.778-5.919,8.597-7.655,11.835c-2.466,4.601-4.416,9.605-5.805,14.704  C30.951,27.262,32.089,27.111,33.053,26.533z"/> 	<path style="fill:#ED3F32;" d="M7.055,25.506L8.4,26.313c1.545,0.927,3.475,0.927,5.02,0l0.346-0.208  c1.32-0.792,2.968-0.792,4.287,0l0.713,0.427c0.775,0.465,1.663,0.649,2.531,0.568c0.64-2.067,0.425-4.651-0.567-6.4  c-3.336-5.885-6.111-4.686-8.781-2.131c-0.512,0.49-1.138,0.849-1.82,1.044c-2.928,0.837-5.089,2.206-3.86,5.934  C6.486,25.389,6.788,25.346,7.055,25.506z"/> 	<path style="fill:#A46F3E;" d="M35.592,24.356c-0.106,0-0.215-0.017-0.321-0.053c-0.523-0.178-0.803-0.746-0.625-1.269  c0.667-1.962,2.809-3.012,4.768-2.352c0.919,0.313,1.92-0.181,2.232-1.1c0.177-0.523,0.743-0.805,1.269-0.626  c0.523,0.178,0.803,0.746,0.625,1.269c-0.666,1.963-2.806,3.017-4.768,2.352c-0.918-0.312-1.919,0.183-2.232,1.1  C36.397,24.095,36.008,24.356,35.592,24.356z"/> 	<path style="fill:#A46F3E;" d="M37.957,17.389c-0.106,0-0.215-0.017-0.321-0.053c-0.523-0.178-0.803-0.746-0.625-1.269  c0.323-0.951,0.997-1.72,1.897-2.164c0.9-0.444,1.919-0.511,2.871-0.188c0.921,0.314,1.92-0.181,2.232-1.101  c0.177-0.524,0.745-0.805,1.268-0.626c0.523,0.178,0.803,0.746,0.625,1.269c-0.666,1.964-2.806,3.016-4.768,2.353  c-0.445-0.152-0.923-0.121-1.344,0.087s-0.736,0.567-0.888,1.013C38.763,17.127,38.374,17.389,37.957,17.389z"/> 	<path style="fill:#A46F3E;" d="M40.323,10.421c-0.106,0-0.215-0.017-0.322-0.053c-0.523-0.178-0.803-0.746-0.625-1.269  c0.584-1.722,2.463-2.646,4.185-2.064c0.33,0.112,0.682,0.09,0.993-0.063c0.311-0.153,0.544-0.419,0.656-0.748  c0.177-0.523,0.744-0.804,1.269-0.626c0.523,0.178,0.803,0.746,0.625,1.269c-0.284,0.835-0.875,1.51-1.665,1.899  c-0.791,0.39-1.686,0.447-2.521,0.164c-0.678-0.231-1.418,0.134-1.648,0.813C41.128,10.159,40.739,10.421,40.323,10.421z"/> 	<g>  <path style="fill:#DAE7EF;" d="M23.37,14.095c-0.945,1.257-2.436,2.745-1.862,5.373l1.544,7.065c0,0,0.001,0,0.001,0l0.713-0.427  	c1.32-0.792,2.968-0.792,4.287,0l0.713,0.427c0.58,0.348,1.127,0.463,1.127,0.463c1.042-3.823,2.399-7.593,4.052-11.179  	c-0.774-1.936-2.427-2.584-3.627-3.247c-0.007-0.004-0.014-0.008-0.02-0.011c-0.759-0.435-0.806-1.474-0.235-2.136  	c0.225-0.261,0.329-0.62,0.251-0.98l-0.121-0.552c-0.133-0.608-0.739-0.996-1.346-0.863L22.77,9.354  	c-0.608,0.133-0.996,0.739-0.863,1.346l0.121,0.552c0.08,0.368,0.334,0.653,0.656,0.792c0.739,0.319,1.19,1.144,0.812,1.855  	C23.46,13.966,23.418,14.031,23.37,14.095z"/> 	</g> 	<path style="fill:#FFFFFF;" d="M29.746,10.899l-6.879,1.503c-0.759,0.166-1.517-0.32-1.683-1.079l-0.099-0.452  c-0.166-0.759,0.32-1.517,1.079-1.683l6.879-1.503c0.759-0.166,1.517,0.32,1.683,1.079l0.099,0.452  C30.991,9.976,30.505,10.733,29.746,10.899z"/> 	<path style="fill:#FBD490;" d="M46.816,25.332l-1.745,25.029c-0.128,2.499-2.191,4.459-4.693,4.459H12.307  c-2.502,0-4.565-1.96-4.693-4.459L5.911,26.153c-0.029-0.569,0.588-0.94,1.077-0.647l1.345,0.807c1.545,0.927,3.475,0.927,5.02,0  l0.346-0.208c1.32-0.792,2.968-0.792,4.287,0l0.713,0.428c1.32,0.792,2.968,0.792,4.287,0l0.713-0.428  c1.32-0.792,2.968-0.792,4.287,0l0.713,0.428c1.32,0.792,2.968,0.792,4.287,0l0.713-0.428c1.32-0.792,2.968-0.792,4.287,0  l0.713,0.428c1.32,0.792,2.968,0.792,4.287,0l3.387-1.505C46.588,24.932,46.828,25.097,46.816,25.332z"/> 	<path style="fill:#E0B877;" d="M17.91,42h-7c-0.552,0-1-0.447-1-1s0.448-1,1-1h7c0.552,0,1,0.447,1,1S18.462,42,17.91,42z"/> 	<path style="fill:#E0B877;" d="M19.91,46h-9c-0.552,0-1-0.447-1-1s0.448-1,1-1h9c0.552,0,1,0.447,1,1S20.462,46,19.91,46z"/> 	<path style="fill:#E0B877;" d="M21.91,50h-11c-0.552,0-1-0.447-1-1s0.448-1,1-1h11c0.552,0,1,0.447,1,1S22.462,50,21.91,50z"/> 	<path style="fill:#E0B877;" d="M27.91,50h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S28.462,50,27.91,50z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `,  `<svg version="1.1" id="chat" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><g><path style="fill:#226BAC;" d="M0,58l4.042-12.125c-2.05-3.45-3.231-7.476-3.231-11.78C0.81,21.34,11.15,11,23.905,11 S47,21.34,47,34.095S36.66,57.19,23.905,57.19c-3.881,0-7.535-0.961-10.745-2.653L0,58z"/>	<path style="fill:#3BA58B;" d="M23.905,11C36.66,11,47,21.34,47,34.095c0,3.378-0.731,6.583-2.034,9.475L58,47l-4.042-12.125 c2.05-3.45,3.231-7.476,3.231-11.78C57.19,10.34,46.85,0,34.095,0c-9.426,0-17.528,5.65-21.118,13.746 C16.231,11.995,19.951,11,23.905,11z"/>	<circle style="fill:#FFFFFF;" cx="13" cy="34" r="3"/><circle style="fill:#FFFFFF;" cx="24" cy="34" r="3"/> <circle style="fill:#FFFFFF;" cx="35" cy="34" r="3"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`, `<svg version="1.1" id="music" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"      viewBox="0 0 54.888 54.888" style="enable-background:new 0 0 54.888 54.888;" xml:space="preserve"> <path style="fill:#EA6248;"d="M52.104,0.249c-0.216-0.189-0.501-0.275-0.789-0.241l-31,4.011c-0.499,0.065-0.872,0.489-0.872,0.992    v6.017v4.212v26.035C17.706,39.285,14.997,38,11.944,38c-5.247,0-9.5,3.781-9.5,8.444s4.253,8.444,9.5,8.444s9.5-3.781,9.5-8.444    c0-0.332-0.027-0.658-0.069-0.981c0.04-0.108,0.069-0.221,0.069-0.343V16.118l29-3.753v18.909C48.706,29.285,45.997,28,42.944,28    c-5.247,0-9.5,3.781-9.5,8.444s4.253,8.444,9.5,8.444s9.5-3.781,9.5-8.444c0-0.092-0.012-0.181-0.015-0.272    c0.002-0.027,0.015-0.05,0.015-0.077V11.227V7.016V1C52.444,0.712,52.32,0.438,52.104,0.249z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`, `<svg version="1.1" id="website" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"      viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <circle style="fill:#7383BF;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" cx="29" cy="29" r="28"/> <line style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="29" y1="57" x2="29" y2="1"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M29,1    c-0.214,0-0.426,0.011-0.639,0.016C20.213,7.616,15,17.697,15,29s5.213,21.384,13.361,27.984C28.574,56.989,28.786,57,29,57"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M8.698,9.728    C14.478,13.683,21.468,16,29,16s14.522-2.317,20.302-6.272"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M49.862,47.67    C43.975,43.475,36.779,41,29,41s-14.975,2.475-20.862,6.67"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M29,57    c0.214,0,0.426-0.011,0.639-0.016C37.787,50.384,43,40.303,43,29S37.787,7.616,29.639,1.016C29.426,1.011,29.214,1,29,1"/> <line style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="1" y1="29" x2="57" y2="29"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>` , `<svg version="1.1" id="present" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"      viewBox="0 0 57 57" style="enable-background:new 0 0 57 57;" xml:space="preserve"> <rect x="1" y="13.002" style="fill:#CB465F;" width="55" height="12"/> <rect x="6" y="25.002" style="fill:#EF4D4D;" width="46" height="30"/> <path style="fill:#EBBA16;" d="M56,12.002H41.741C42.556,10.837,43,9.453,43,7.995c0-1.875-0.726-3.633-2.043-4.95    c-2.729-2.729-7.17-2.729-9.899,0l-2.829,2.829l-2.828-2.829c-2.729-2.729-7.17-2.729-9.899,0c-1.317,1.317-2.043,3.075-2.043,4.95    c0,1.458,0.444,2.842,1.259,4.007H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h27v24H6c-0.552,0-1,0.447-1,1s0.448,1,1,1h22v15    c0,0.553,0.448,1,1,1s1-0.447,1-1v-15h22c0.552,0,1-0.447,1-1s-0.448-1-1-1H30v-24h26c0.552,0,1-0.447,1-1S56.552,12.002,56,12.002z      M32.472,4.459c1.95-1.949,5.122-1.949,7.071,0C40.482,5.399,41,6.654,41,7.995c0,1.34-0.518,2.596-1.457,3.535l-0.472,0.472H24.929    l4.006-4.006l0.001-0.001l0.001-0.001L32.472,4.459z M16.916,11.53c-0.939-0.939-1.457-2.195-1.457-3.535    c0-1.341,0.518-2.596,1.457-3.536c1.95-1.949,5.122-1.949,7.071,0l2.828,2.829l-3.536,3.536c-0.331,0.331-0.622,0.735-0.898,1.179    h-4.994L16.916,11.53z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`, `<svg version="1.1" id="thumb1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 56 56" style="enable-background:new 0 0 56 56;" xml:space="preserve"> <rect x="1.5" y="20" style="fill:#4B6DAA;" width="14" height="36"/> <circle style="fill:#D8A852;" cx="8.5" cy="47" r="4"/> <path style="fill:#FBCE9D;" d="M53.5,26c0-2.209-1.791-4-4-4h-9h-3h-3.602l0.988-4.619c0.754-3.524,0.552-7.819,0.104-10.836 	C34.542,3.528,31.84,0,29.013,0h-0.239C26.364,0,25.5,2.659,25.5,6c0,16.25-8,16-8,16h-2v32h15h10h4c2.209,0,4-1.791,4-4 	c0-2.209-1.791-4-4-4h3c2.209,0,4-1.791,4-4c0-2.209-1.791-4-4-4h3c2.209,0,4-1.791,4-4c0-2.493-1.613-3.442-4-3.796 	C49.337,30.031,47.224,30,46.5,30h3C51.709,30,53.5,28.209,53.5,26z"/> <path style="fill:#F7B563;" d="M52.12,29H39.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h13.456c-0.657-0.403-1.488-0.653-2.456-0.796 	C49.337,30.031,47.224,30,46.5,30h3C50.508,30,51.417,29.615,52.12,29z"/> <path style="fill:#F7B563;" d="M53.12,37H39.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h10.621c-0.703-0.615-1.613-1-2.621-1h3 	C51.508,38,52.417,37.615,53.12,37z"/> <path style="fill:#F7B563;" d="M50.12,45H37.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h9.621c-0.703-0.615-1.613-1-2.621-1h3 	C48.508,46,49.417,45.615,50.12,45z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`]

            return  svgHTML}

        let ipadCover = Id('ipadCover')
        let appContainer = Elm ('appContainer');
        let appHeader = Elm ('appHeader')
        let ipadColor = Id('ipad').style.backgroundColor;


        appHeader.innerHTML =   "מחפש אפליקציות ריגול" + '<font style="font-size: 0.2vmin"><br><br></font>'

        stl (appHeader, {position: 'relative', color:'white', fontFamily: 'consolas', fontSize: '4.5vmin', textAlign: 'center', zIndex: '19', backgroundColor: ipadColor, hieght: '130%', overflow:'hidden'})

        ipadCover.appendChild(appHeader)
        ipadCover.appendChild(appContainer)
        let SVGs = getSVGs ()
        for (q = 1 ; q < 100; q++){
            let div1 = Elm('app' + q)
            let rndImg = getRandomInt( SVGs.length) - 1;
            let rndR =  getRandomInt( 150) + 100 ; let rndG =  getRandomInt( 150) + 100 ; let rndB =  getRandomInt( 150) + 100
            let bgColor = `rgba(${rndR},${rndB},${rndG})`

            div1.innerHTML = SVGs[rndImg];
            stl (div1, {position: 'static', float: 'left', width: '10%', height: '8%', backgroundColor: bgColor, padding: '1vmin', margin: '2.3vmin', borderRadius: '2vmin', boxShadow: '0.5vmin 0.5vmin 1vmin rgba(0,0,0,0.8)'})
            appContainer.appendChild(div1)
        }
        appContainer.style.position = 'relative';
        function scrollApps (h = 0){
            appContainer.style.top = h + 'px';
            h -= 3;
            if (h < -1200) return
            setTimeout (()=>{scrollApps(h)},8)
        }
        scrollApps()





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
        virus () ; break;
        case 'webSite':
        G.hacks.current = 'webSite'
        webSite(); break;


    }
}


// main:
if(storeInLocal ('check')){storeInLocal ('load') }
buildBoard ();
setQuestion (G.saves.qNumber + 1);
IpadGrahpic (G.mgmt.stage);
holoMenu();
//test ('holo')
