import * as request from 'request-promise';
import * as config from 'config';

export default abstract class ZendeskAPI {
  protected apikey: string;
  protected endpoint: string = config.get('api.zendesk.endpoint');
  protected request = request.defaults({});

  constructor(apikey: string) {
    this.apikey = apikey;
    this.request = request.defaults({
      baseUrl: this.endpoint,
      headers: {
        'Authorization': this.apikey,
        'Content-Type': 'application/json',
      },
      json: true,
    });
  }
}
