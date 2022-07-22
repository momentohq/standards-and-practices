import {enumFromValue} from './enums';

export enum ProjectStatus {
  OFFICIAL = 'official',
  INCUBATING = 'incubating',
}

export enum ProjectStability {
  EXPERIMENTAL = 'experimental',
  ALPHA = 'alpha',
  BETA = 'beta',
  STABLE = 'stable',
}

export function validateProjectStatus(status: string): ProjectStatus {
  return enumFromValue(ProjectStatus, status) as unknown as ProjectStatus;
}

export function validateProjectStability(stability: string): ProjectStability {
  return enumFromValue(
    ProjectStability,
    stability
  ) as unknown as ProjectStability;
}
