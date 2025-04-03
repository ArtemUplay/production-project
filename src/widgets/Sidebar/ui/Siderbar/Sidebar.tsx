import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwither } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  console.log(cls.language, 'cls.language');

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LanguageSwitcher className={cls.language} />
      </div>
    </div>
  );
};
