const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Restaurant', ({ I }) => {
  I.see('Favorite Restaurant Not Found', '#empty');
});

Scenario('liking A restaurant', async ({ I }) => {
  I.see('Favorite Restaurant Not Found', '#empty');
  I.amOnPage('/');

  I.seeElement('.card-tag');

  const sampleResto = locate('.card-tag').first();
  const sampleRestoTitle = await I.grabTextFrom(sampleResto);
  I.click(sampleResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-tag');

  const likedRestoTitle = await I.grabTextFrom('.card-tag');

  assert.strictEqual(sampleRestoTitle, likedRestoTitle);
});
