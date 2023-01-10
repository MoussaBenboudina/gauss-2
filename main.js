
function getText(){
    document.write(`
    <style>
    body{
       background:#EEE;
    
    }
  
    
    .hr{
    width:100%
    hright:4px;
    background-color:black;
    }
    .textGSJ{

        width:90%
    }
    .textGSJ p ,.textGSJ h2{
        margin:10px 5%;
        
    }
    </style>
    
    <div class="textGSJ">
    <h2>Methode de Gauss </h2>
    <p class="textgauss">Une technique de choix pour ramener la résolution d'un système linéaire 
    quelconque à d'un système triangulaire et la méthode d'élimination de Gauss
     . Celle - ci consiste en premier lieu à transformer , par des opérations
      simples sur les équations , ce système en un système équivalent ,
       c'est - à - dire ayant la ( ou les ) même ( s ) solution ( s ) , M Ax = M b ,
        dans lequel M A est une matrice triangulaire supérieure
         ( on dit encore que la matrice du système est sous forme échelonnée ) .
          Cette étape de mise à zéro d'une partie des coefficients de la matrice 
          est qualifiée d'élimination et utilise de manière essentielle le fait qu'on ne 
          modifie pas la solution d'un système linéaire en ajoutant à une équation donnée
           une combinaison linéaire des autres équations . Si A est inversible ,
            la solution du système peut ensuite être obtenue par une méthode de remontée ,
             mais le procédé d'élimination est en fait très général , 
             la matrice pouvant être rectangulaire</p>
    
             </div>
    
    <hr>
             <div class="hr"></div>
    
    `)}

   //  ====================================================================
   // ========================    p2   ================================
function getstart(){
   document.write(`


   <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cookie&family=Dancing+Script:wght@500&family=Sofia+Sans:ital,wght@0,200;0,300;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,800&family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;1,100;1,300;1,400;1,500;1,800&display=swap" rel="stylesheet">
   <style>
   
   body{
      display: flex;
      justify-content: center;
      align-items: center;
color:#fff;
font-family: 'Sofia Sans', sans-se;   
      }
      
body {
   /* background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(0,212,255,0.8)),url(../image/3.jpg) ; */
   font-family: 'Sofia Sans', sans-se;
   
   background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/3.jpg);
   
      /* background: url(../image/3.jpg); */
      background-size: cover;
      background-position: center;
   
   
       height: 100vh;
       margin: 0;
       padding: 0;
       color: #FFF;
   }
   .box div{
       position: absolute;
       z-index: -1;
       width: 40px;
       height: 40px;
        background-color: transparent;
        border: 5px solid rgba(255,255, 255, 0.8);    
   }
   
   
   .box div:nth-child(1){
       top: 90%;
       left: 82%;
       animation: animate 7s linear infinite;
   }
   
   .box div:nth-child(2){
       top: 14%;
       left: 82%;
       animation: animate 7s linear infinite;
   }
   
   .box div:nth-child(3){
       top: 60%;
       left: 78%;
       animation: animate 8s linear infinite;
   }
   
   
   .box div:nth-child(4){
       top: 57%;
       left: 31%;
       animation: animate 11s linear infinite;
   }
   
   .box div:nth-child(5){
       top: 40%;
       left:70%;
       animation: animate 14s linear infinite;
   }
   
   
   .box div:nth-child(6){
       top: 2%;
       left:40%;
       animation: animate 6s linear infinite;
   }
   
   .box div:nth-child(7){
       top: 90%;
       left:52%;
       animation: animate 13s linear infinite;
   }
   
   .box div:nth-child(8){
       top: 50%;
       left:9%;
       animation: animate 10s linear infinite;
   }
   
   .box div:nth-child(9){
       top: 75%;
       left:14%;
       animation: animate 20s linear infinite;
   }
   
   .box div:nth-child(10){
       top: 10%;
       left:10%;
       animation: animate 12s linear infinite;
   }
   
   @keyframes animate{
       0%{
           transform: scale(0) translateY(0) rotate(0);
           opacity: .8;
       }
       100%{
           transform: scale(1) translateY(-90px) rotate(360deg);
           opacity: 1;
   
       }
   }

      .nombreLinge{
         margin-top: 250px;
         }
   
h3{
   display: inline-block;
  margin-top: -20px;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


.nombreLigne button{
   display:block;
   margin:auto;

}

input{
   width: 46px;
   height: 35px;
   font-size: 22px; 
}

button{
   width: 120px;
   height: 40px;
   color: #fff;
   font-weight: 800px;
   font-size: 18PX;
   font-family: inherit;
   background-color: black;
   margin-top: 20px;
   margin-left: 60px;
   border-radius: 5px;
   box-shadow: 0 0 2px blue;
   display: block;
   border: none;
   -webkit-transition-duration: .3s;
   transition-duration: .3s;
   -webkit-transition-property: box-shadow,transform;
   transition-property:  box-shadow,transform;
   margin: auto;
   font-family: 'Sofia Sans', sans-se;
   
   }

button:hover , button:focus ,button:active{
   box-shadow: 0 0 5px #0a7aea;
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
   background-color: black;
   font-size: 20px;

}


   </style>
   
   <div class="box">
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
 </div>



  <div class="section2">
    <div class="nombreLigne">
    
<h3>Entrez le nombre de ligne:</h3>
<input type="number" id="n">
<button    onclick="get()"  onclick="getx0()" type="button" id="nombreLinge" class="btn0">submit</button>
   
</div>
  </div>
   
   `)}



   // ==============================================================
   // ========================    p2   ================================


    
function get(){
    var n = document.getElementById("n").value;
 document.write(`<style> 
 body{
   /* background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(0,212,255,0.8)),url(../image/3.jpg) ; */
   font-family: 'Sofia Sans', sans-se;
   
   background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/3.jpg);
   
      /* background: url(../image/3.jpg); */
      background-size: cover;
      background-position: center;
   display: flex;
    justify-content: center;
    justify-items: center;
 }


 .section2{
display:none;
 }
 .lesValurs{
    padding-top:180px;
 }
 input{
    width: 46px;
    height: 35px;
    font-size: 22px; 
 }


 @media(max-width:768px){
    input{
    width: 32px;
    height: 28px;
    font-size: 19px; 
    }
 }
 h3{
    display:inline-block;
 }
 .n1{
    
    display:flex;
    justify-content: center;
    justify-items: center;
    
 }
 button{
    width: 120px;
 height: 40px;
 color: #fff;
 font-weight: 800px;
 font-size: 17PX;
 background-color: black;
 margin-top: 20px;
 margin-right:15px;
 border-radius: 5px;
 box-shadow: 0 0 10px  #FFF;
 display: inline-block;
 border: none;
 -webkit-transition-duration: .3s;
 transition-duration: .3s;
 -webkit-transition-property: box-shadow,transform;
 transition-property:  box-shadow,transform;
 
 }
 button:hover , button:focus ,button:active{
 
    box-shadow: 0 0 20 #FFF;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background-color: black;
    color:blue;
 }
 
 h3 {
    display: inline-block;
 }
 
 
 .btn2{
    display:none;
 }

 
 </style>`)
 document.write(`



 <div class="lesValurs" > `)
 
 for(var i=0; i<n;i++){
    document.write(`<div>`)
    for(var j=0; j<n;j++){
    document.write(`
        <input type="number" id="val-${i}${j}">
          <h3>X${j+1}</h3>    `)}
       document.write(` = <input type="number" id="val-${i}">
       </div> <br>`)
    }
    document.write(`
    <div class="btn" style="display:flex; justify-content: center;">
    <div>
    <button onclick="gauss()"  onclick="getx0()" onclick="jacobi()"  type="button" class="btn" id="c">submite</button> 
   
   <input type="number" id="n1" value="${n}" style="display:none">
   </div></div></div></div>`)
 
 document.getElementById("c").onclick = function(){
 document.write(`
 <style>
 .lesValurs{
    display:none;
 }
 
 .btn2{
    display:flex;
    
    justify-content: center;
    align-items: center;
    margin: 100px 50%;
 }
 
 .btn2 button{
    width:300px;
    height:50px;
 }
 
 </style>
 <div class="btn2" >
 <div>
 <button type="button" id="1" value="1" onclick="gauss()" >Gauss</button>
 <button type="button" id="2" value="2" onclick="saidle()" >Gauss saidle</button>
 <button type="button" id="3" value="3" onclick="jacobi()" >Jacobi</button>
 </div></div>
 `)}};
 
 
// -------------------------------------------------------------------------------
//                                   gauss 
// --------------------------------------------------------------------------------
function gauss(){
    document.write(`
    <style>
    .box{
      display:none
    }
    .btn2{
       display:none;
    }
    </style>
    `)
      
      let n = document.getElementById("n1").value;
       
      let a = []; let b = [];
       for(var i=0; i<n;i++){
    
          a[i] = [];  
          for(var j=0; j<n;j++){
        a[i][j] = +document.getElementById(`val-${i}${j}`).value;
      
       }
        b[i] = +document.getElementById(`val-${i}`).value;
    }
    console.log(a);
    console.log(b);
    
    
    
    
    var temp;
    for( i=0;i<n;i++){
       for(j=i+1;j<n;j++){
          if(Math.abs(a[i][i]<a[j][i])){
          for(var i2=0;i2<n;i2++){
    
           temp=a[i][i2];
           a[i][i2]=a[j][i2];
           a[j][i2]=temp;
    
          }
          temp=b[i];
          b[i]=b[j];
          b[j]=temp;
          
         
       }}}
    
    let s1;
    for(let x=0;x<n-1;x++){
    for(i=x+1;i<n;i++){
    
        if(a[i][x] === 0){
         
            continue;
                }else{
          //  console.log(a[i][x]/a[0][x]);
           s1 = a[i][x] / a[x][x];
    
           
    for(j=x;j<n;j++){
    a[i][j]=a[i][j]-(s1*a[x][j]);
    }
    b[i]-=s1*b[x];
    }
    }}
    document.write(`<style> 
    body{
      background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/4.jpg);
      background-size: cover;
      background-position: center;
   
       display: flex;
      justify-content: space-around;
       align-items: center;
       flex-wrap:wrap;
 
       
    }
  @media(max-width:768px){
body{
   background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/5.jpg);
   background-size: cover;
   background-position: center;
}

  }
   
  }
    .lesValurs{
       display:none;
    }
    .x{
       font-size:12px;
    }
    .afficherVal{
       word-spacing:10px;
    }


    .soulition h3{
      display:block;
      margin:5px 30px;
    }
    h1{
      position: absolute;
      top:10%;
      left:50%;
      transform:translateX(-50%)
    }
    @media(max-width:768px){
      h1{
       
         top:4%;
        
   
   
       }
    }
    </style>
    <h1>Gauss</h1>
    <div class="afficherVal">
    <div>
    `)
    for(var i=0; i<n;i++){
       document.write(`<div>`)
       for(var j=0; j<n;j++){
       document.write(`
             <h3>${(a[i][j].toFixed(2))}X<span class="x">${j+1}</span></h3> `)
          }
          document.write(` = <h3>${(b[i].toFixed(2))}</h3> 
         
          </div> <br> `)
       }
       document.write(`
       </div> </div>  
       <div class="soulition">`)
    
      let x=[] ;
       for(i=0;i<n;i++){
        x[i]=b[i];
       }
       for(j=n-1;j>=0;j--){
       if(a[j][j] !== 0){
       
         x[j]/=a[j][j];
       
         document.write(`<h3>X${j+1} : ${(x[j].toFixed(2))}</h3>`) 
        
       }
       else{
            x[j]=0;
        document.write(`<h3>X${j+1} : ${(x[j].toFixed(2))}</h3>`)
       }
       for(i=j-1;i>=0;i--){
       x[i]=x[i]-(x[j]*a[i][j]);
       }
       }
       document.write(`</div> </div>`)
    };
 // -------------------------------------------------------------------------------
//                                gauss saidle
// --------------------------------------------------------------------------------

function saidle(){ 
    let n = document.getElementById("n1").value;
    
    document.write(`
    <style>
 body{
    display:block;
    background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/4.jpg);
    background-size: cover;
    background-position: center;
 
 }
 .box{
   display:none;
 }

 button{
   margin:auto;
 }
 
   .x{
    margin:180px;
       display: flex;
       justify-content:space-evenly;
       align-items: center;
       
    }
    @media(max-width:768px){
      body{
         background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/5.jpg);
         background-size: cover;
         background-position: center;
      }
       h2{
          display:block;
       }
       .x0{
          display:flex;
          justify-content:center;
       }
       .x0 div {
          margin:8px;
       }
       .x{
          display:block;
          margin:200px auto;
       }
       .nbrSoulition{
       display: flex;
       align-items: center;
       justify-content: center;
     
       }
       .nbrSoulition input{
          margin: 0 10px;
       }
 
    }
   }
 
   
    .btn2{
       display:none;
    }
     h2 {
       
       display: inline-block;
    }
   .xx0{
    display: inline-block;
    }
    
    .btn2{
       display:none;
    }
    .btn33{
       
   
       display: flex;
       justify-content:center;
       align-items: center;
       margin-top:-140px;
       
    }
    .sec1{
 
 
       
          
         
        
        
          display: flex;
          justify-content: center;
          color:#FFF;
      
    }
    sup{
       color:red;
    }
    .nbrSoulition{
      display: flex;
    align-items: center;
}
    }
 </style>
 <div class="sec1">
    <h1>methode de gauss saidle</h1>
    </div>
 <div class="x">
 <div class="x0"> `)
  for(var i=0;i<n;i++){
    document.write(`<div>
    <h2>X${i+1}<sup>(0)</sup></h2> 
    <input type="number" id="x0${i}" class="xx0" value="0"></div>
    
    `)}
    document.write(`
    </div>
    <div class="nbrSoulition">
    <h4> nombre de soluition : </h4>
    <input type="number" id="soul">
    </div></div>
    </div>
    
    <div class="btn33">
    <button type="button" onclick="getx00()"  onclick="saidle()" class="btn3">submit</button>
    </div>
 `)
 };

 function getx00(){  
   
    let  n = +document.getElementById("n1").value;
    
    let a = []; let b = [];
        for(var i=0; i<n;i++){
           a[i] = [];  
           for(var j=0; j<n;j++){
         a[i][j] = +document.getElementById(`val-${i}${j}`).value;
        }
         b[i] = +document.getElementById(`val-${i}`).value;
     }
     var ns = +document.getElementById("soul").value;
     let x0=[];
     for(var i=0;i<n;i++){
    
      x0[i] = +document.getElementById(`x0${i}`).value;
     }
     console.log(a);
    console.log(b);
    
    
    let s=[];
    let s1;
    
    for(var k1=0;k1<n;k1++){
       for(var k=0;k<n;k++){
          for(i=0;i<n;i++){
             for(var i1=0;i1<n;i1++){
              s[i]=0;
             }
             for( j=0;j<n;j++){
                if(j !== i){
                   s[i]+=Math.abs(a[i][j]);
                }}}
    
                for(i=k;i<n-1;i++){
                   if(Math.abs(a[i][i]) >= Math.abs(s[i])){
                      continue;
                   }else{
                      for( j=0;j<n;j++){
                           
                         s1=a[i][j];
                         a[i][j]=a[i+1][j];
                         a[i+1][j]=s1;}
                         s1=b[i];
                         b[i]=b[i+1];
                         b[i+1]=s1;
                   }}}}
    
    

    document.write(`
    
    
    
     <style>
    body{


    }
     .x , .btn3{
        display:none;
     }
     @media(max-width:768px){
    body .saidleSoul h2{
        font-size:15px;
    }}

    .saidleSoul{
       word-spacing:20px;
       display:flex;
       justify-content:center;
       align-items:center;
       margin-top:230px;
    }

    @media(max-width:768px){
      .saidleSoul > div{
         display:grid;
      }
    }
     </style>
     `)

    
    let a1;
    document.write(`<div class="saidleSoul">
    <div>`)
    for(let k=0;k<ns;k++){
       for(i=0; i<n; i++){
    a1=0;
       
       for(j=0;j<n;j++){
       if(i !== j){
          a1+=a[i][j]*x0[j];
       }}
       x0[i]=(b[i]-a1)/a[i][i];
     
       document.write(`
      
       <h2>X${i+1}<sup>(${k+1})</sup>=${(x0[i]).toFixed(2)}</h2>
       `)}
       document.write(`
      <br>
       `)}
       document.write(`</div> </div>`)
    };
       

//  ------------------------------------------- jacobi ----------------------- 



function jacobi(){ 
    let n = document.getElementById("n1").value;
    
    
 
    document.write(`
    <style>
    .box{
      display:none
    }
 body{
    display:block;
    background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/8.jpg);
    background-size: cover;
    background-position: center;
 }
 button{
   margin:auto;
 }
 
   .x{
    margin:180px;
       display: flex;
       justify-content:space-evenly;
       align-items: center;
       
    }
   }
    .btn2{
       display:none;
    }
     h2 {
       
       display: inline-block;
    }
   .xx0{
    display: inline-block;
    }
    
    .btn2{
       display:none;
    }
    .btn33{
       
   
       display: flex;
       justify-content:center;
       align-items: center;
       margin-top:-140px;
       
    }
    @media(max-width:768px){
      body{
         background:linear-gradient(90deg , rgba(2,0,.6,0.8) 0% ,rgba(9,9,121,0.8) 35% ,rgba(2,0,.6,0.8)),url(image/9.jpg);
         background-size: cover;
         background-position: center;

      }
        h2{
           display:block;
        }
        .x0{
           display:flex;
           justify-content:center;
        }
        .x0 div {
           margin:8px;
        }
        .x{
           display:block;
           margin:200px auto;
        }
        .nbrSoulition{
        display: flex;
        align-items: center;
        justify-content: center;
        }
        .nbrSoulition {
           margin: 40px;
        }
        .nbrSoulition h3{
         margin:0;
        }
     }
    .sec1{
 
 
       
          
         
          display: flex;
          justify-content: center;
          color:#FFF;
      
    }
 sup{
    color:red;
 }
 </style>
 <div class="sec1">
    <h1>methode de jacobi</h1>
    </div>
 <div class="x">
 <div class="x0"> `)
  for(var i=0;i<n;i++){
    document.write(`<div>
    <h2>X${i+1}<sup>(0)</sup></h2> 
    <input type="number" id="x0${i}" class="xx0" value="0"></div>
    
    `)}
    document.write(`
 
    
    </div>
    <div class="nbrSoulition">
    <h3> nombre de soluition : </h3>
    <input type="number" id="soul">
    </div></div>
    </div>
    
    <div class="btn33">
    <button type="button" onclick="getx0()"  onclick="saidle()" class="btn3">submit</button>
    </div>
 `)
 
 };

 
function getx0(){  
    let  n = +document.getElementById("n1").value;
    console.log(n);
    let a = []; let b = [];
        for(var i=0; i<n;i++){
           a[i] = [];  
           for(var j=0; j<n;j++){
         a[i][j] = +document.getElementById(`val-${i}${j}`).value;
        }
         b[i] = +document.getElementById(`val-${i}`).value;
     }
     console.log(a);
     console.log(b);
 
 
     var ns = +document.getElementById("soul").value;
     let x0=[];
     for(var i=0;i<n;i++){
      x0[i] = +document.getElementById(`x0${i}`).value;
     }
   
    
    document.write(`
    
    
    
     <style>
    
     .x , .btn3{
        display:none;
     }
    body{
      
    }
    .saidleSoul{
       word-spacing:20px;
       display:flex;
       justify-content:center;
       align-items:center;
       margin-top:230px;
    
    
    }
    
    
     </style>
     
     
     `)
 
 
 
   
 
     let s=[];
     let s1;
     
     for(var k1=0;k1<n;k1++){
        for(var k=0;k<n;k++){
           for(i=0;i<n;i++){
              for(var i1=0;i1<n;i1++){
               s[i]=0;
              }
              for( j=0;j<n;j++){
                 if(j !== i){
                    s[i]+=Math.abs(a[i][j]);
                 }}}
     
                 for(i=k;i<n-1;i++){
                    if(Math.abs(a[i][i]) >= Math.abs(s[i])){
                       continue;
                    }else{
                       for( j=0;j<n;j++){
                            
                          s1=a[i][j];
                          a[i][j]=a[i+1][j];
                          a[i+1][j]=s1;}
                          s1=b[i];
                          b[i]=b[i+1];
                          b[i+1]=s1;
                    }}}}
     
     console.log(a);
     console.log(b);
    
 
    let a1;
    let a2 =[];
    document.write(`<div class="saidleSoul">
    <div>`)
    for(let k=0;k<ns;k++){
       for(i=0; i<n; i++){
    a2[i]=0;
       
       for(j=0;j<n;j++){
       if(i !== j){
          a2[i]+=a[i][j]*x0[j];
          }}}
          for(i=0;i<n;i++){
       x0[i]=(b[i]-a2[i])/a[i][i];
       console.log(x0);
       document.write(`
       <h2>X${i+1}<sup>(${k+1})</sup>=${(x0[i]).toFixed(2)}</h2>
       `)}
       document.write(`
      <br>
       `)}
       document.write(`</div> </div>`)
    };
       