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

  /**
   * Get project detail by id
   *
   * Method GET - /projects/:id
   */
  static async getRessourceById(id: number): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      resolve(api.get(`/projects/${id}`));
    }) as Promise<AxiosResponse>;
  }
}

export default ProjectService;