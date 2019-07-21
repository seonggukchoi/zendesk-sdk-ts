import * as request from 'request-promise';

import ZendeskError from '@/exceptions/zendesk-error';

export default abstract class ZendeskRequest implements ZendeskRequest.ZendeskRequest {
  protected request = request.defaults({});
  private apiKey: string;
  private endpoint: string;

  constructor(endpoint: string, apiKey: string) {
    if (!endpoint || endpoint.length < 1) { throw new ZendeskError('Endpoint is not valid.'); }
    if (!apiKey || apiKey.length < 1) { throw new ZendeskError('API key is not valid.'); }

    this.endpoint = endpoint;
    this.apiKey = apiKey;

    const headers = {
      'Authorization': this.apiKey,
      'Content-Type': 'application/json',
    };

    this.request = request.defaults({
      baseUrl: this.endpoint,
      json: true,
      headers,
    });
  }
}
