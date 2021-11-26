import favoriteRestaurant from '../src/scripts/data/favoriteRestorant';
import * as TestFactories from './helpers/testFactories';

describe('Liking a food', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show like button when food has not been liked before', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show unlike button when food has not been liked before', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to like a Restaurant when button clicked', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurant.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    favoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a Restaurant again when its already liked', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({ id: 1 });

    await favoriteRestaurant.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }]);

    favoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a Restaurant when it has no id', async () => {
    await TestFactories.likeButtonIntiatorWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
