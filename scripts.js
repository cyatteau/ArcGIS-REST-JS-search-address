import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { geocode } from "@esri/arcgis-rest-geocoding";

const apiKey =
  "YOUR_API_KEY";

const authentication = ApiKeyManager.fromKey(apiKey);

geocode({
  address: "N Main St",
  postal: 38103,
  countryCode: "USA",
  authentication,
}).then((response) => {
  console.log(response.candidates);
});
