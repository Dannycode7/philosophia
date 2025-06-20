const tab=[
   {
       citation:"Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
        id:"Marguerite Duras"
    },
     {
        citation:"La vraie générosité envers l'avenir consiste à tout donner au présent.",
        id:"Albert camus"
    },
     {
        citation:"Cela semble toujours impossible jusqu'à ce qu'on le fasse.",
        id:"Nelson Mandela"
    },
     {
        citation:"Mille bougies peuvent être allumées à partir d'une seule sans la faire disparaître. Le bonheur ne diminue pas quand on le partage",
        id:"Boudha"
    },
     {
        citation:"N'interrompez jamais un ennemi lorsqu'il est en train de faire une erreur",
        id:"Napoleon Bonaparta"
    }
]

function changer(){
 let cit=Math.floor(Math.random()*tab.length)
 document.getElementById("name").innerHTML=tab[cit].id 
 document.getElementById("cit").textContent=tab[cit].citation
}



document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('span');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('#nav ul li a');
    
   
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
});