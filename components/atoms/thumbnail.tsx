import React from 'react';
import { css } from '@emotion/react';

interface Props {
  title: string;
  outline: string;
}

export const Thumbnail: React.FC<Props> = (props) => {
  return (
    <div className="shadow-md rounded-md mx-1 first:ml-4 last:mr-4 p-4">
      <h4>{props.title}</h4>
      <p className="text-xs text-gray-500">{props.outline}</p>
    </div>
  );
};
