import React, { FC } from 'react';

interface Props {
  type: "button" | "submit" | "reset" | undefined,
  className: string,
  // onClick: Function,
  value: string,
}

export const FormButton: FC<Props> = ({ type, value, className }) => {
  return (
    <button type={type} className={className}>{value}</button>
  )
};
