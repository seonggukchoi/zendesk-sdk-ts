export default class ZendeskError extends Error {
  constructor(message: string, data?: any) {
    super(message);
  }
}
