import favoriteRestaurant from '../../data/favoriteRestorant';
import {
  restoTemplate,
  emptyRestaurant,
} from '../templates/template-restaurant';

const Favorite = {
  async render() {
    return `
    <section id="favorite-restaurants" class="card-container">
    </section>
        `;
  },

  async afterRender() {
    const restaurant = await favoriteRestaurant.getAllRestaurants();
    const restaurantFavoriteContainer = document.querySelector(
      '#favorite-restaurants'
    );

    if (restaurant.length === 0) {
      restaurantFavoriteContainer.innerHTML += emptyRestaurant();
    }
    restaurant.forEach((data) => {
      restaurantFavoriteContainer.innerHTML += restoTemplate(data);
    });
  },
};

export default Favorite;
