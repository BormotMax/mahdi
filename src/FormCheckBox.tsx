import React, { FC, useState } from 'react'
import { JsxChild } from 'typescript';
import { BedIcon, BriefcaseIcon, DailyIcon } from './svg/icons';

interface Props {
  isChecked: boolean,
  Icon: JSX.Element,
  title: string,
}

export const FormCheckBox: FC<Props> = ({ isChecked, Icon, title }) => {
  const [value, setValue] = useState(isChecked);

  const handleOnChange = () => {
    setValue(prevState => !prevState)
  }

  return (
    <div className="flex justify-between items-center mb-4 px-7 py-5 w-full bg-light-grey border border-primary ">
      <div className="flex items-center">
        <div className=" grid place-items-center h-16 w-16 bg-light-blue rounded-full mr-4" >
          {Icon}
        </div>
        <span className="text-primary font-semibold text-2xl">{title}</span>
      </div>
      <input type="checkbox" name="daily" id="dailyId" checked={value} onChange={handleOnChange}/>
    </div>
  )
};
