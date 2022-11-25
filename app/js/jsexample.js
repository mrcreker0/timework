/*let today = new Date();
let hourHow = today.getHours();
let getting;
if (hourHow >18)
    {
    getting = "Добрый вечер";
    } else if (hourHow > 12)
            {
                getting ="Добрый день";
            } else if(hourHow > 0)
                    {
                        getting = "Доброе утро";
                    } else 
                        {
                            getting =" Привет!"
                        }
  
   
document.write('<h3>'+ today +'</h3>');*/
let HelloText = 'Hellow';
let name = 'Artem';
let message = 'Please Check Prise!';
let priceChar = 5;
let welcome = HelloText +' '+ name +' '+ message; 

let _costWelcome = welcome.length;
let _welcomeText = document.getElementById('welcomeText');
_welcomeText.textContent = welcome + '!';
