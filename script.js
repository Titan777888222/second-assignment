//Сначала сделай страничку и покажи там cпинер, потом получи данные  c fetch и await и вставь цитату, ну как то так :)
 //Не усложняй!)
 //спинер
 fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(json => {

    let next = document.getElementById("button_color");
    let i = 0;     
    
    next.addEventListener("click", function() {   
      i++; 
      /* for ( i ; i < json.length; ) {        
      };   */ 

        setTimeout( () => {              
        console.log(json[i].text + " " + json[i].author )        
        }, 2000) 
      }
    )
});