//Сначала сделай страничку и покажи там cпинер, потом получи данные  c fetch и await и вставь цитату, ну как то так :)
 //Не усложняй!)
 //спинер
 fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(json => {

    let next = document.querySelector("#liste");
        
     next.addEventListener("click", function() {   
     let i = Math.ceil( Math.random() * 1000)
     let backgroundcolor = "#" + Math.ceil(Math.random() * 10000).toString(16);//получаем цвет
    
     console.log(backgroundcolor);    
        
      setTimeout( () => {              
        document.querySelector(".text1").innerHTML = (json[i].text); 
        document.querySelector(".text2").innerHTML = (json[i].author); 
        document.body.style.backgroundColor = backgroundcolor;
        document.querySelector(".text1").style.color = backgroundcolor;
        document.querySelector(".text2").style.color = backgroundcolor; 
             
        }, 800) 
      }
    )
});