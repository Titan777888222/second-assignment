//Сначала сделай страничку и покажи там cпинер, потом получи данные  c fetch и await и вставь цитату, ну как то так :)
 //Не усложняй!)
 //спинер
 fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(json => {

    let next = document.querySelector("#button");
        
     next.addEventListener("click", function() {   
     let i = Math.ceil( Math.random() * 1000)
     let backgroundcolor = "#" + Math.ceil(Math.random() * 10000).toString(16);//получаем цвет
     let element_one = document.querySelector(".text1");
     let element_two = document.querySelector(".text2");
     
     console.log(backgroundcolor);    
        
      setTimeout( () => {              
        element_one.innerHTML = (json[i].text); 
        element_two.innerHTML = (json[i].author); 
        document.body.style.backgroundColor = backgroundcolor;
        element_one.style.color = backgroundcolor;
        element_two.style.color = backgroundcolor; 

        document.querySelector(".main").style.backgroundColor = backgroundcolor;
        next.style.backgroundColor = backgroundcolor; 
        
            
        }, 800) 
      }
    )
});