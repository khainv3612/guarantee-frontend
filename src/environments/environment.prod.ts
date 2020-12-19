// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const domainUrl = 'https://api.chuyengialocnuocminhduc.com/';

export const environment = {
  production: true,
  URL_API_AUTH: domainUrl + 'api/auth/',
  URL_API_POLICY: domainUrl + 'api/policy/',
  URL_API_PROVINCE: domainUrl + 'api/province/',
  URL_API_DISTRICT: domainUrl + 'api/district/',
  URL_API_WARD: domainUrl + 'api/ward/',
  URL_API_TYPESTATION: domainUrl + 'api/type-station/',
  URL_API_STATION: domainUrl + 'api/station/',
  URL_API_PRODUCT: domainUrl + 'api/product/',
  URL_API_ACCOUNT: domainUrl + 'api/account/',
  URL_API_WARRANTYCLAIM: domainUrl + 'api/requestguarantee/',
  URL_API_WARRANTY_CARD: domainUrl + 'api/warranty/',
  PHONE_CONTACT: '0238 66 22 333'
};

