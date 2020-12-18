interface NewPolicies {
  name: string,
}

export interface UpdateTravelPoliciesVariables {
  url: string;
  data: NewPolicies;
}

export const updateTravelPolicies = (async ({ url, data }: UpdateTravelPoliciesVariables) => {
  try {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const content = await rawResponse.json();

    return content;
    } catch (error) {
    console.log(error);
    }
  }
);