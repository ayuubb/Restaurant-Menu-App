import CONFIG from '../../global/config';
import star from '../../../public/images/icons/start.png';

const restoTemplate = (item) => `
    <a href="#/detail/${item.id}" class='card-tag'>
        <div tabindex="0" class="article-card">
            <figure class="article-image">
                <img tabindex="0" class="lazyload" src="${CONFIG.BASE_IMG_URL_SM}${item.pictureId}" alt="${item.name}" />
            </figure>
            <div tabindex="0" class="article-content">
                    <h2 class="card-name">${item.name}</h2>
                    <p class="card-city">(${item.city})</p>
                    <div class="rating">
                        <img class="lazyload" src="${star}" alt="star-rating" />
                        <span>${item.rating}</span>
                    </div>

                <p class="card-desc truncate">${item.description}</p>
            </div>
        </div>
    </a>
`;

const createLikeButton = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButton = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const emptyRestaurant = () => `
    <div id="empty">
        <h2>Favorite Restaurant Not Found</h2>
    </div>
`;

// eslint-disable-next-line object-curly-newline
export { restoTemplate, createLikeButton, createLikedButton, emptyRestaurant };
