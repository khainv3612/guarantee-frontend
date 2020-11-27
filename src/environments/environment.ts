// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_API_AUTH: 'http://localhost:8080/api/auth/',
  URL_API_POLICY: 'http://localhost:8080/api/policy/',
  URL_API_PROVINCE: 'http://localhost:8080/api/province/',
  URL_API_DISTRICT: 'http://localhost:8080/api/district/',
  URL_API_WARD: 'http://localhost:8080/api/ward/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
