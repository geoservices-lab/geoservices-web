import { BreadcrumbMapProps, BreadcrumbProps } from "./types";

export const generateBreadcrumb = (
  childBreadcrumb: BreadcrumbMapProps,
  newBreadcrumb: BreadcrumbProps,
): BreadcrumbMapProps =>
  Object.keys(childBreadcrumb).reduce(
    (obj, curr) => ({
      ...obj,
      [curr]: [...newBreadcrumb, ...childBreadcrumb[curr]],
    }),
    {},
  );
