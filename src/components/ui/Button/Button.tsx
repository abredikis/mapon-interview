import { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.scss';
type ButtonProps = ComponentPropsWithoutRef<'button'>;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
