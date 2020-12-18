import React, { FC } from 'react';

interface Props {
  title: string,
  key?: number,
}

export const  TravelPolicy: FC<Props> = ({ title }) => {
  return (
    <div className="container bg-white px-14 py-10 rounded-xl border border-primary">
      <h3 className="text-3xl font-semibold mb-6">{title}</h3>
      <p className="font-normal text-2xl text-secondary">in case you didn't set up a travel policy, travellers will book without budget restrictions.</p>
    </div>
  )
};
