import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../../src/scripts/data/favoriteRestorant';

const likeButtonIntiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { likeButtonIntiatorWithRestaurant };
