import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import restoDetail from '../templates/detail-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurant from '../../data/favoriteRestorant';

const Detail = {
  async render() {
    return `
        <section id="detail-restaurant">
        </section>
        <div id="likeButtonContainer"></div>


    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantDbSource.getRestaurantDetail(url.id);
    const { restaurant } = data;
    const detailContainer = document.querySelector('#detail-restaurant');
    detailContainer.innerHTML = restoDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
