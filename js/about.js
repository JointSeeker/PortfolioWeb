// Získáme element, který chceme sledovat
const about = document.getElementById('about');

const picture = document.querySelector('.photo')
const textHeader = document.querySelector('.about-text')

// Vytvoříme nový Intersection Observer
const observerAbout = new IntersectionObserver(entries => {
    // Pro každý element v oblasti viditelnosti se provede následující akce
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            picture.classList.add('active-photo')
            textHeader.classList.add('active-text')
            // Zde můžeš spustit potřebnou událost
        } else {
            picture.classList.remove('active-photo')
            textHeader.classList.remove('active-text')
        }
    });
});

// Spustíme sledování elementu
observerAbout.observe(about);