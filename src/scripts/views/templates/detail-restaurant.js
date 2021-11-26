import CONFIG from '../../global/config';
import star from '../../../public/images/icons/start.png';

const restoDetail = (item) => `
<div tabindex="0">
    <div class="detail">
        <figure class="img-detail">
            <img
            tabindex="0"
            src="${CONFIG.BASE_IMG_URL_MD}${item.pictureId}"
            alt="${item.name}"
            />
        </figure>
        <div class="detail__content">
            <h2>${item.name}</h2>
            <div class="rating">
            <img src="${star}" alt="star-rating" />
            <span>${item.rating}</span>
            </div>
            <h3 class="detail-address">${item.city}</h3>
            <p class="detail-address">${item.address}</p>
            <p class="detail-desc">${item.description}</p>
            <div class="category">
            ${item.categories
              .map(
                (category) =>
                  // eslint-disable-next-line implicit-arrow-linebreak
                  `<span class="category">${category.name}</span>`
              )
              .join(' ')}
            </div>
        </div>
    </div>
    <div class="menu">
      <h2>Menu</h2>
      <div class="detail__menu">
        <div class="detail-food">
          <h4>- Food -</h4>
          <ul>
            ${item.menus.foods
              .map(
                (food) => `
                  <li class="item__menu">${food.name}</li>
                `
              )
              .join('')}
          </ul>
        </div>
        <div class="detail-drink">
          <h4>- Drink- </h4>
          <ul>
            ${item.menus.drinks
              .map(
                (drink) => `
                  <li class="item__menu">${drink.name}</li>
                `
              )
              .join('')} 
          </ul>
        </div>
      </div>
  </div>
    <h3 class="title-review">Reviews</h3>
    <div class="detail-review">
    ${item.customerReviews
      .map(
        (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>
              <p class="review-date">${review.date}</p>
              <div class="review-body truncate-review">"${review.review}"</div>
            </div>
          </div>
        `
      )
      .join('')}
    </div>
</div>
`;

export default restoDetail;
