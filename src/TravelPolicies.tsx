import React, { FC, SetStateAction, useEffect, useState } from 'react';
import { MutationFunction, useMutation, useQuery } from 'react-query';
import { AddNewTravelPolicy } from './AddNewTravelPolicy';
import { BASE_URL } from './api';
import { TravelPolicy } from './NoTravelPolicy';
import { updateTravelPolicies } from './helpers';
import { Policies } from './interfaces';



interface useQueryProps {
  onSuccess: (data: Policies[]) => void, 
}

interface Props {
  isAdding: boolean,
  onClick(): void,
}

export const TravelPolicies: FC<Props> = ({ isAdding, onClick }) => {
  const [policies, setPolicies] = useState<Policies[]>([]);

  const { data } = useQuery<Policies[]>('travelPolicies', async () => {
    const result = await (await fetch(BASE_URL)).json();
    console.log('fetchJSON-Server>>>>', result)
      return result;
  }, {
    onSuccess: (rules) => {
      setPolicies(rules);
    },
    onError: (error) => {console.log(error)}
  });

  const { data: newRules, mutate, status } = useMutation(
    updateTravelPolicies as MutationFunction<any, any>,
    // {
    //   onSuccess: (newPolicy: Policies) => {
    //     console.log(newPolicy, status, '>>>>> new policy');
    //     setPolicies((prevState) => [...prevState])
    //     },
    // },
    );

  console.log(policies, newRules, status,'.....general scope');

  const handleClick = (data: any) => {

    setPolicies((prevState) => [...prevState, {
      ...data, 
      id: prevState.length + 1,
    }])

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
