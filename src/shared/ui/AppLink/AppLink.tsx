import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  classname?: string;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  classname,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      {...otherProps}
      to={to}
      className={classNames(cls.AppLink, {}, [classname, cls[theme]])}
    ></Link>
  );
};
