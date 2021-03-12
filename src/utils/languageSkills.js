import { MAXIMUM_LANGUAGE_GRADE } from '../constants';

export const getLanguageSkillPercentage = (grade) => (grade / MAXIMUM_LANGUAGE_GRADE) * 100;

export const getLanguageSkillCodeFromGrade = (grade) => ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'][grade - 1];
