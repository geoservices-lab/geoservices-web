export interface BreadcrumbItemProps {
  title: string;
  url: string;
  textColor?: string;
}

export type BreadcrumbProps = BreadcrumbItemProps[];

export interface BreadcrumbMapProps {
  [x: string]: BreadcrumbProps;
}

export interface NavMainMenuProps {
  onChange?: (x: string) => void;
  selected?: string;
}
