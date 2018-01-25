import api from '@utils/api';
import { AxiosResponse } from 'axios';

class ProjectService {
  /**
   * Get project list
   *
   * Method GET - /projects
   */
  static async getRessources(): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      resolve(api.get('/projects'));
    }) as Promise<AxiosResponse>;
  }
}

export default ProjectService;