import { ProjectExperience } from './projects';

export type Company = {
  name: string;
  type: string;
  startDate: string;
  endDate?: string;
  iconUrl: string;
  href: string;
  projects: ProjectExperience[];
};