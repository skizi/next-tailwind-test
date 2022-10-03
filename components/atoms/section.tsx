import React from 'react';

type Props = React.ComponentProps<'section'>;
export const Section: React.FC = ({ children }: Props) => {
  return <section className="px-2 py-8">{children}</section>;
};
