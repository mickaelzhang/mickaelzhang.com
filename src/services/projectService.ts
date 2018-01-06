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
  static async getRessourceBySlug(slug: string): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      resolve(api.get(`/projects/${slug}`));
    }) as Promise<AxiosResponse>;
  }
}

export default ProjectService;