// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import {Const} from "../app/const";
const domainUrl = 'http://localhost:8080/';

export const environment = {
  production: false,
  URL_API_AUTH: domainUrl + 'api/auth/',
  URL_API_POLICY: domainUrl + 'api/policy/',
  URL_API_PROVINCE: domainUrl + 'api/province/',
  URL_API_DISTRICT: domainUrl + 'api/district/',
  URL_API_WARD: domainUrl + 'api/ward/',
  URL_API_TYPESTATION: domainUrl + 'api/type-station/',
  URL_API_STATION: domainUrl + 'api/station/',
  URL_API_WARRANTYCLAIM: domainUrl + 'api/requestguarantee/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
