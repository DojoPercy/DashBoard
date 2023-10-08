
'use client'


import Button from "../FromControls/button";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import Select from "../FromControls/Select";
import Input from "../FromControls/Input";

const Modal = ({ show, title, formControls = [], onAdd, formData, setFormData, setShow }) => {
  const { sideBarOpen, setSidebarOpen } = useContext(GlobalContext);
  return (
    <>
      {show ? (
        <>
          <div className={`justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${sideBarOpen ? 'pl-[310px]': 'pl-0'}`}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-fill bg-white outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-s-lime-200">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                </div>
                <div className="relative p-5 flex-auto flex flex-col gap-5">
                  {formControls && formControls.length
                    ? formControls.map((item) =>
                        item.componentType === "input" ? (
                          <Input
                          key={item.label}
                            type={item.type}
                            placeholder={item.placeholder}
                            label={item.label}
                            value={formData && formData[item.id]}
                            onChange={(e)=> setFormData({
                              ...formData,
                              [item.id] : e.target.value
                            })}
                          />
                        ) : item.componentType === "select" ? (
                          <Select label={item.label} key={item.label} options={item.options} onChange={(e)=> setFormData({
                            ...formData,
                            [item.id] : item.type === 'number'? parseInt(e.target.value): e.target.value
                          })} />
                        ) : null
                      )
                    : null}
                </div>
                <div className="flex gap-2 items-center justify-end p-6 border-t border-solid rounded-b">
                  <Button text={"Add"} onClick={onAdd} key={"1"}/>
                  <Button text={"Close"} key={"2"} onClick={()=> setShow(false)} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-slate-900"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
