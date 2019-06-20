import * as request from 'request-promise';

import ZendeskError from '@/exceptions/zendesk-error';

export abstract class ZendeskRequest implements ZendeskRequest.ZendeskRequest {
  protected apiKey: string;
  protected endpoint: string;
  protected request = request.defaults({});

  constructor(endpoint: string, apiKey: string) {
    if (!endpoint || endpoint.length < 1) { throw new ZendeskError('Endpoint is not valid.'); }
    if (!apiKey || apiKey.length < 1) { throw new ZendeskError('API key is not valid.'); }

    this.endpoint = endpoint;
    this.apiKey = apiKey;

    this.request = request.defaults({
      baseUrl: this.endpoint,
      headers: {
        'Authorization': this.apiKey,
        'Content-Type': 'application/json',
      },
      json: true,
    });
  }
}
