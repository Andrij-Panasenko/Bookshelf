const organizationsList = document.getElementById('organizations-list');
const orgBtn = document.querySelector('.org-btn');

const organizations = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: 'images/save-the-children@1x.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: 'images/project-hope@1x.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: 'images/united24@1x.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: 'images/intern-med-corp@1x.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: 'images/med-sans@1x.png',
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: 'images/razom@1x.png',
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: 'images/intern-med-corp@1x.png',
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: 'images/world-vision@1x.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: 'images/sergiy-prytula@1x.png',
    },
];

const itemsPerPage = 6;
let currentPage = 0;
let isAnimating = false;


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
        const adjustedIndex = i % organizations.length;
        const listItem = createListItem(organizations[adjustedIndex], adjustedIndex);
        fragment.appendChild(listItem);
    }
    organizationsList.appendChild(fragment);
}

function scrollUp() {
    currentPage = (currentPage - 1 + organizations.length) % organizations.length;
    updateList();
}

function scrollDown() {
    currentPage = (currentPage + 1) % organizations.length;
    updateList();
}

orgBtn.addEventListener('click', () => {
    setTimeout(() => {
        scrollUp();
        }, 200);
});

organizationsList.addEventListener('wheel', (e) => {
    setTimeout(() => {
    if (e.deltaY > 0) {
        scrollDown();
    } else {
        scrollUp();
    }}, 200);
});

updateList();




