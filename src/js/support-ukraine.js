import $ from 'jquery';
import 'slick-carousel';
import { supportUkraineFunds } from './support-funds';
import arrowIcon from '../images/icons.svg';

const fundsContainer = document.querySelector('.organization-container');
fundsContainer.insertAdjacentHTML('beforeend', generateSupportFundsMarkup(supportUkraineFunds));

$('.organization-container').slick({
  vertical: true,
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  prevArrow: '<div></div>',
  nextArrow: `<div class="flex-btn"><button type="button" class="org-btn" aria-label="Next">
          <svg width="22" height="22"><use href="${arrowIcon}#icon-arrow"></use></svg>
        </button></div>`,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
      },
    },
  ],
});

function getRetinaImageUrl(imageObject) {
    const isRetina = window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches;
    const selectedImage = isRetina ? imageObject.img2x : imageObject.img;
    return selectedImage;
}

function generateSupportFundsMarkup(supportFunds) {
  const markup = supportFunds
    .map((uaFund, index) => {
      const listIndex = String(index + 1).padStart(2, '0');
      const imageUrl = getRetinaImageUrl(uaFund);
      return `<div><li class="support-column">
  <span class="support-index">${listIndex}</span><a class="fund-link" href="${uaFund.url}" target="_blank" rel="noopener noreferrer">
  <img class="list-item" src="${imageUrl}" alt="${uaFund.title}"></a>
</li></div>
`;
    })
    .join('');
  return markup;
}