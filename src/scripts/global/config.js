const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMG_URL_SM: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMG_URL_MD: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMG_URL_LG: 'https://restaurant-api.dicoding.dev/images/large/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: `restaurant-cache-${new Date().toISOString()}`,
  DATABASE_NAME: 'restaurant-menu-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

export default CONFIG;
