import api from '@utils/api';
import { AxiosResponse } from 'axios';

class DetailService {
  /**
   * Get personal detail
   *
   * Method GET - /general
   */
  static async getInfo(): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      resolve(api.get('/general'));
    }) as Promise<AxiosResponse>;
  }
}

export default DetailService;