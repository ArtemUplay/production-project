type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  additionalClassNames: string[]
): string => {
  return [
    cls,
    ...additionalClassNames,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};


