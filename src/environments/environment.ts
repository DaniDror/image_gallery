// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  FLICKR_API_URL: 'https://api.flickr.com/services',
  FLICKR_API_INFO: '/rest/?method=flickr.photos.getInfo',
  FLICKR_API_PUBLIC: '/feeds/photos_public.gne?',
  FLICKR_API_KEY: '93fa20a32f75348b7ba9167fb392e4ef',
  FLICKR_FORMAT: '&format=json&nojsoncallback=1',
  PROXY_URL: 'https://cors-anywhere.herokuapp.com/'

};
