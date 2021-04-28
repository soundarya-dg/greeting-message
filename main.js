var today = new Date();
var hrs = today.getHours();
    document.writeln('<b>');
    document.writeln('<b>');
    if (hrs >= 0 && hrs < 12)
    {
        document.write('<h1> Hello , Good Morning ! </h1> <p1> "The beautiful thing about learning is <br> nobody can take it away from you."—B. B. King </p>');
    } 
    else if (hrs == 12)
    {
        document.write('<h1> Hello , Good Noon ! </h1> <p1> "Dream, dream, dream. Dreams transform into thoughts and <br> thoughts result in action." -Dr.APJ Abdul Kalam </p1>'); 
    } 
    else if (hrs >= 12 && hrs <= 17)
    {
        document.write('<h1> Hello , Good Afternoon ! </h1> <p1> "Be a lifelong student. The more you learn, <br> the more you earn and more self-confidence you will have." - Brian Tracy</p1>');
    } 
    else 
    {
        document.write('<h1> Hello , Good Evening ! </h1> <p1> "A good decision is based on knowledge and not on numbers."- plato </p1>');
    }
    document.write('<br/>')

    
   