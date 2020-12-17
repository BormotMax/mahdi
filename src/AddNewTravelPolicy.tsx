import React, { FC, useState } from 'react';
import { FormButton } from './FormButton';
import { useForm } from "react-hook-form";
import { FormCheckBox } from './FormCheckBox';
import { BedIcon, BriefcaseIcon, CarIcon, DailyIcon, PlaneIcon, TrainIcon } from './svg/icons';

interface Props {
  isOpened: Boolean,
  onClick: Function,
};

type Inputs = {
  name: string,
  description: string,
  exampleRequired: string,
};

export const AddNewTravelPolicy: FC<Props> = ({ isOpened, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm<Inputs>({
    criteriaMode: "all"
  });

  const handleClick = () => {
    onClick();
  };

  const onSubmit = (data: any) => {
    console.log(data, errors);
  };

  return (
    <>
    <div className={`absolute top-0 left-0 w-full h-full bg-black ${isOpened ? 'bg-opacity-0 hidden' : 'bg-opacity-50'}`}>
    </div>
      <form
        className={`w-2/3 h-screen absolute top-0 right-0 bg-white overflow-hidden transform ${isOpened ? 'translate-x-full' : ''} duration-1000 ease-in`}
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex py-11 pl-24 pr-12 justify-between bg-secondary rounded-tl-3xl pb-11">
          <h3 className="text-5xl text-white font-semibold">Add New Travel Policy</h3>
          <button type="button" onClick={handleClick} className="focus:outline-none text-5xl text-white font-semibold">X</button>
        </div>
        <div className="w-full px-24 overflow-y-scroll h-full pb-80">
          <h4 className="font-semibold text-primary text-3xl mb-6">Name & Description</h4>
          <h5 className="mb-3 text-2xl text-primary">Policy Name</h5>
          {errors.name && <span className="text-red-500">This field is required</span>}
          <input
            className="h-16 w-full mb-8 px-5 bg-input focus:outline-none rounded-md"
            name="name"
            placeholder="name"
            ref={register({ required: true })}
          />
          <h5 className="mb-3 text-2xl text-primary">Description ( optional )</h5>
          <textarea
            className="h-44 w-full mb-12 px-5 pt-4 bg-input focus:outline-none rounded-md resize-none"
            name="description"
            placeholder="Description"
            ref={register}
          />
          <h4 className="font-semibold text-primary text-3xl mb-6">General Policies</h4>
          <h5 className="mb-7 text-2xl text-primary">Short description about selecting items and editing them later</h5>
          <FormCheckBox isChecked Icon={BedIcon} title="Hotels" refHandler={(ele: any) => register(ele)} />
          <FormCheckBox isChecked Icon={TrainIcon} title="Flights" refHandler={(ele: any) => register(ele)} />
          <FormCheckBox isChecked={false} Icon={PlaneIcon} title="Trains" refHandler={(ele: any) => register(ele)} />
          <FormCheckBox isChecked Icon={CarIcon} title="Cars" refHandler={(ele: any) => register(ele)} />
          <FormCheckBox isChecked Icon={BriefcaseIcon} title="Perdieme" refHandler={(ele: any) => register(ele)} />
          <FormCheckBox isChecked Icon={DailyIcon} title="Daily Expenses" refHandler={(ele: any) => register(ele)} />
        </div>
        <div className="flex justify-between w-full absolute bottom-0 py-11 bg-primary lg:px-36 sm:px-12">
          <FormButton
            type="button"
            value="Cancel"
            className="text-2xl text-black font-bold px-28 py-3 rounded-lg focus:outline-none"
          />
          <FormButton
            type="submit"
            value="Save Travel Policy"
            className="text-2xl text-white font-bold bg-secondary px-28 py-3 rounded-lg focus:outline-none"
          />
        </div>
      </form>
      </>
  )
};
