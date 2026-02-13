// Enums for Card component
export enum CardVariant {
  Shadow = 'shadow',
  NoShadow = 'no-shadow',
  Stroke = 'stroke',
  Transparent = 'transparent',
  Special = 'special',
}

// Enums for Button component
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Text = 'text',
}

export enum ButtonSubvariant {
  Filled = 'filled',
  Tonal = 'tonal',
  Text = 'text',
  IconCircle = 'icon-circle',
  IconSquare = 'icon-square',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface PrimaryButtonVariantProps {
  variant: ButtonVariant.Primary;
  subvariant?: ButtonSubvariant.Filled | ButtonSubvariant.Tonal;
}

interface SecondaryButtonVariantProps {
  variant: ButtonVariant.Secondary;
  subvariant?: never;
}

interface TertiaryButtonVariantProps {
  variant: ButtonVariant.Tertiary;
  subvariant?:
    | ButtonSubvariant.Text
    | ButtonSubvariant.IconCircle
    | ButtonSubvariant.IconSquare;
}

export type ButtonVariantProps =
  | PrimaryButtonVariantProps
  | SecondaryButtonVariantProps
  | TertiaryButtonVariantProps;
