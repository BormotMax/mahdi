import React, { FC, useState } from 'react';
import { MutationFunction, useMutation, useQuery } from 'react-query';
import { AddNewTravelPolicy } from './AddNewTravelPolicy';
import { BASE_URL } from './api';
import { TravelPolicy } from './NoTravelPolicy';
import { updateTravelPolicies, UpdateTravelPoliciesVariables } from './helpers';
import { Policies } from './interfaces';



// interface useQueryProps {
//   onSuccess: (data: Policies[]) => void, 
// }

interface Props {
  isAdding: boolean,
  onClick(): void,
}

export const TravelPolicies: FC<Props> = ({ isAdding, onClick }) => {
  const [policies, setPolicies] = useState<Policies[]>([]);

  const { data } = useQuery<Policies[]>('travelPolicies', async () => {
    const result = await (await fetch(BASE_URL)).json();
      return result;
  }, {
    onSuccess: (rules) => {
      setPolicies(rules);
    },
    onError: (error) => {console.log(error)}
  });

  const { mutate } = useMutation(
    updateTravelPolicies as MutationFunction<Policies, UpdateTravelPoliciesVariables>,
    {
      onSuccess: (newPolicy) => {
        setPolicies((prevState) => [...prevState, newPolicy])
        },
    },
    );

  const handleClick = (data: Policies) => {

    mutate({
      url: BASE_URL,
      data: data,
    })
  };

  return (
    <>
      {policies?.length 
      ? policies.map(({ name, id }) => <TravelPolicy key={id} title={name} />) 
      : <TravelPolicy title="No Travel Policies" />}
      <AddNewTravelPolicy isOpened={isAdding} onClick={onClick} updateFn={handleClick}/>
    </>
    )
};
