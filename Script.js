document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fermer le menu mobile lorsqu'un lien est cliqué
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Ajouter une classe lors du défilement pour la navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Animation de défilement fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation au défilement
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('in-view');
            }
        });
    }
    
    // Vérifier au chargement
    checkScroll();
    
    // Vérifier lors du défilement
    window.addEventListener('scroll', checkScroll);
    
    // Générer les cartes des philosophes
    const philosophesGrid = document.querySelector('.philosophes-grid');
    
    const philosophes = [
        {
            name: "Socrate",
            period: "470-399 av. J.-C.",
            description: "Père de la philosophie occidentale, connu pour sa méthode dialectique et sa maxime \"Connais-toi toi-même\".",
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Platon",
            period: "428-348 av. J.-C.",
            description: "Fondateur de l'Académie, auteur des Dialogues et théoricien des Idées et de la République idéale.",
            image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Aristote",
            period: "384-322 av. J.-C.",
            description: "Élève de Platon, fondateur du Lycée et auteur d'une œuvre encyclopédique couvrant tous les domaines du savoir.",
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "René Descartes",
            period: "1596-1650",
            description: "Père du rationalisme moderne, connu pour son cogito \"Je pense, donc je suis\" et sa méthode du doute.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Immanuel Kant",
            period: "1724-1804",
            description: "Auteur de la \"Critique de la raison pure\", il a opéré une révolution copernicienne en philosophie.",
            image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Friedrich Nietzsche",
            period: "1844-1900",
            description: "Critique de la morale traditionnelle, théoricien de la volonté de puissance et du surhomme.",
            image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        }
    ];
    
    philosophes.forEach(philosophe => {
        const card = document.createElement('div');
        card.className = 'philosophe-card';
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${philosophe.image}" alt="${philosophe.name}">
            </div>
            <div class="card-content">
                <h3 class="card-title">${philosophe.name}</h3>
                <span class="card-subtitle">${philosophe.period}</span>
                <p class="card-text">${philosophe.description}</p>
                <a href="#" class="card-link">En savoir plus</a>
            </div>
        `;
        
        philosophesGrid.appendChild(card);
    });
    
    // Carrousel des écrivains
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    const ecrivains = [
        {
            name: "Victor Hugo",
            period: "1802-1885",
            description: "Géant de la littérature française, auteur des \"Misérables\" et de \"Notre-Dame de Paris\".",
            image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Jane Austen",
            period: "1775-1817",
            description: "Maîtresse du roman de moeurs, célèbre pour \"Orgueil et Préjugés\" et \"Raison et Sentiments\".",
            image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Fiodor Dostoïevski",
            period: "1821-1881",
            description: "Auteur de \"Crime et Châtiment\" et \"Les Frères Karamazov\", explorateur de l'âme humaine.",
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Toni Morrison",
            period: "1931-2019",
            description: "Prix Nobel de littérature, auteure de \"Beloved\" et voix majeure de la littérature afro-américaine.",
            image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Gabriel García Márquez",
            period: "1927-2014",
            description: "Maître du réalisme magique, auteur de \"Cent ans de solitude\" et prix Nobel de littérature.",
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        }
    ];
    
    ecrivains.forEach((ecrivain, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.style.animationDelay = `${index * 0.2}s`;
        
        item.innerHTML = `
            <img src="${ecrivain.image}" alt="${ecrivain.name}">
            <div class="carousel-content">
                <h3 class="carousel-title">${ecrivain.name}</h3>
                <span class="carousel-subtitle">${ecrivain.period}</span>
                <p class="carousel-text">${ecrivain.description}</p>
            </div>
        `;
        
        carouselContainer.appendChild(item);
    });
    
    // Navigation du carrousel
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 32; // Largeur de l'item + marge
    
    function updateCarousel() {
        carouselContainer.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    }
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Machine à citations
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    const newQuoteBtn = document.querySelector('.new-quote-btn');
    
    const quotes = [
        {
            text: "La vie doit être comprise à reculons. Mais elle doit être vécue en avant.",
            author: "Søren Kierkegaard"
        },
        {
            text: "Je pense, donc je suis.",
            author: "René Descartes"
        },
        {
            text: "Connais-toi toi-même.",
            author: "Socrate"
        },
        {
            text: "L'homme est condamné à être libre.",
            author: "Jean-Paul Sartre"
        },
        {
            text: "Le bonheur est un idéal de l'imagination, non de la raison.",
            author: "Immanuel Kant"
        },
        {
            text: "Ce qui ne me tue pas me rend plus fort.",
            author: "Friedrich Nietzsche"
        },
        {
            text: "Écrire, c'est une façon de parler sans être interrompu.",
            author: "Jules Renard"
        },
        {
            text: "Un classique est un livre que tout le monde veut avoir lu, mais que personne ne veut lire.",
            author: "Mark Twain"
        }
    ];
    
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
    
    function displayNewQuote() {
        const quote = getRandomQuote();
        quoteText.style.animation = 'none';
        quoteAuthor.style.animation = 'none';
        
        // Force un reflow pour réinitialiser l'animation
        void quoteText.offsetWidth;
        void quoteAuthor.offsetWidth;
        
        quoteText.style.animation = 'fadeIn 0.5s ease forwards';
        quoteAuthor.style.animation = 'fadeIn 0.5s ease forwards 0.2s';
        
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `- ${quote.author}`;
    }
    
    newQuoteBtn.addEventListener('click', displayNewQuote);
    
    // Afficher une citation aléatoire au chargement
    displayNewQuote();
    
    // Animation du texte dégradé dans le hero
    const heroTitle = document.querySelector('.hero-title');
    
    function animateGradientText() {
        heroTitle.classList.add('animate-text');
    }
    
    // Démarrer l'animation après un délai
    setTimeout(animateGradientText, 1000);
    
    // Effet parallaxe pour l'image about
    const aboutSection = document.querySelector('.about-section');
    const imageBox = document.querySelector('.image-box');
    
    if (aboutSection && imageBox) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const aboutPosition = aboutSection.offsetTop;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition > aboutPosition - windowHeight) {
                const distance = scrollPosition - aboutPosition;
                imageBox.style.transform = `translateY(${distance * 0.1}px)`;
            }
        });
    }
});
