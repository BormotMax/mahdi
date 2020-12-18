import { MutationFunction } from "react-query";

interface NewPolicies {
  name: string,
}

interface UpdateTravelPoliciesVariables {
  url: string;
  data: NewPolicies;
}

export const updateTravelPolicies: MutationFunction<any, any> = (async ({ url, data }: UpdateTravelPoliciesVariables) => {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  });