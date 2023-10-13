const organizationsList = document.getElementById('organizations-list');
const orgBtn = document.querySelector('.org-btn');

const organizations = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: 'images/Save_the_children.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: 'images/hope.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: 'images/united24.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: 'images/international.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: 'images/medecins.png',
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: 'images/razom.png',
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: 'images/razom.png',
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: 'images/word_vision.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: 'images/sergiy_prytula.png',
    },
];

const itemsPerPage = 6;
let currentPage = 0;


const totalPages = Math.ceil(organizations.length / itemsPerPage);

function createListItem(organization, index) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const image = document.createElement('img');

    const number = (index + 1).toString().padStart(2, '0');
    const { img, url, title } = organization;

    listItem.classList.add('list-item');

    link.href = url;
    link.target = '_blank';

    link.appendChild(image);
    image.src = img;
    image.alt = title;

    listItem.appendChild(document.createTextNode(number + ' '));
    listItem.appendChild(link);

    return listItem;
}

function updateList() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    organizationsList.innerHTML = '';

    const fragment = document.createDocumentFragment();
    for (let i = start; i < end; i++) {
        if (i >= organizations.length) break;
        const listItem = createListItem(organizations[i], i);
        fragment.appendChild(listItem);
    }
    organizationsList.appendChild(fragment);
}

function scrollDown() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateList();
        updateButtonLabel();
        smoothScroll(organizationsList);
    }
}

function scrollUp() {
    if (currentPage > 0) {
        currentPage--;
        updateList();
        updateButtonLabel();
        smoothScroll(organizationsList);
    }
}

function updateButtonLabel() {
    orgBtn.textContent = currentPage < totalPages - 1 ? 'Вниз' : 'Вгору';
}

function smoothScroll(element) {
    const offsetTop = element.offsetTop;
    window.scrollBy({ top: offsetTop, behavior: 'smooth' });
}

orgBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        scrollDown();
    } else {
        scrollUp();
    }
});

updateList();
updateButtonLabel();