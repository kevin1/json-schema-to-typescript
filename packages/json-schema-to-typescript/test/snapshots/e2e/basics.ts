/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type LastName = string;
export type Height = number;

export interface ExampleSchema {
  firstName: string;
  lastName: LastName;
  /**
   * Age in years
   */
  age?: number;
  height?: Height;
  favoriteFoods?: unknown[];
  likesDogs?: boolean;
  [k: string]: unknown;
}
