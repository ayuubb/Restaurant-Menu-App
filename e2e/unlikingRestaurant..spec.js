const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Unliking A Restaurant', async ({ I }) => {
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
  I.click(sampleResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Favorite Restaurant Not Found', '#empty');
});
