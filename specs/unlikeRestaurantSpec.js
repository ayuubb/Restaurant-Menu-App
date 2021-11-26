import favoriteRestaurant from '../src/scripts/data/favoriteRestorant';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurant.deleteRestaurant(1);
  });

  it('should display unlike widget when the Restaurant has been liked', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  it('should not display like widget when the Restaurant has been liked', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked Restaurant from the list', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked Restaurant is not in the list', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    await favoriteRestaurant.deleteRestaurant(1);

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
