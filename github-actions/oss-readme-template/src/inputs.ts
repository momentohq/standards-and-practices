import {enumFromValue} from './enums';

export enum ProjectType {
  SDK = 'sdk',
  OTHER = 'other',
}

export interface ProjectInfo {
  type: ProjectType;
}

export interface SdkProject extends ProjectInfo {
  type: ProjectType.SDK;
  language: string;
}

export interface OtherProject extends ProjectInfo {
  type: ProjectType.OTHER;
}

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

export function validateProjectType(projectType: string): ProjectType {
  return enumFromValue(ProjectType, projectType) as unknown as ProjectType;
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
