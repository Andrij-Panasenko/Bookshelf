const organizationsList = document.getElementById('organizations-list');

const organizations = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
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

organizations.forEach((organization, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const image = document.createElement('img');

    const number = (index + 1).toString().padStart(2, '0');
    const imgSrc = organization.img;

    link.href = organization.url;
    link.target = '_blank';

    link.appendChild(image);
    image.src = imgSrc;
    image.alt = organization.title;

    listItem.appendChild(document.createTextNode(number + ' '));
    listItem.appendChild(link);

    organizationsList.appendChild(listItem);
});

