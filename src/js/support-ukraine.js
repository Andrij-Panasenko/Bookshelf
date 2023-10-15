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

function generateSupportFundsMarkup(supportFunds) {
  const markup = supportFunds
    .map((uaFund, index) => {
      const listIndex = String(index + 1).padStart(2, '0');
      return `<div><li class="support-column">
  <span class="support-index">${listIndex}</span><a class="fund-link" href="${uaFund.url}" target="_blank" rel="noopener noreferrer">
  <img class="list-item" src="${uaFund.img}" alt="${uaFund.title}"></a>
</li></div>
`;
    })
    .join('');
  return markup;
}