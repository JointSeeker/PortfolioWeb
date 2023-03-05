// Získáme element, který chceme sledovat
const services = document.getElementById('services');
const servicesItems = document.getElementById('services-layout')

const headerServices = document.querySelector('.services-header h2')
const servicesInfo = document.querySelector('.services-header p')

const servicesItem = document.querySelectorAll('.services-item')

// Vytvoříme nový Intersection Observer
const observerServices = new IntersectionObserver(entries => {
    // Pro každý element v oblasti viditelnosti se provede následující akce
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            headerServices.classList.add('active-service-header')
            servicesInfo.classList.add('active-service-text')
            // Zde můžeš spustit potřebnou událost
        } else {
            headerServices.classList.remove('active-service-header')
            servicesInfo.classList.remove('active-service-text')
        }
    });
});

const observerServicesItems = new IntersectionObserver(entries => {
    // Pro každý element v oblasti viditelnosti se provede následující akce
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            servicesItem.forEach(item => {
                item.classList.add('services-item-active')
            } )
            // Zde můžeš spustit potřebnou událost
        } else {
            servicesItem.forEach(item => {
                item.classList.remove('services-item-active')
            } )
        }
    });
});

// Spustíme sledování elementu
observerServices.observe(services);
observerServicesItems.observe(servicesItems);
