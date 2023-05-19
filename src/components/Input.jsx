import React from "react";

import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInValid } from "../utils/utils";
// import findInputError from '../utils'

export default function Input({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
  multiline,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, name);
  const isInvalid = isFormInValid(inputError);

  console.log("errors: ", errors);
  console.log("inputError: ", inputError);
  console.log("isInvalid: ", isInvalid);
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error?.message}
              key={inputError.error?.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          label="name"
          id={id}
          type={type}
          className="
                            block 
                            p-3 
                            w-full 
                            text-sm 
                            text-gray-900 
                            bg-gray-50 
                            rounded-lg 
                            border 
                            border-gray-300 
                            shadow-sm 
                            focus:ring-primary-500 
                            focus:border-primary-500 
                            dark:bg-gray-700 
                            dark:border-gray-600 
                            dark:placeholder-gray-400 
                            dark:text-white 
                            dark:focus:ring-primary-500 
                            dark:focus:border-primary-500 
                            dark:shadow-sm-light
                            md:col-span-2
                        "
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="
                            block 
                            p-3 
                            w-full 
                            text-sm 
                            text-gray-900 
                            bg-gray-50 
                            rounded-lg 
                            border 
                            border-gray-300 
                            shadow-sm 
                            focus:ring-primary-500 
                            focus:border-primary-500 
                            dark:bg-gray-700 
                            dark:border-gray-600 
                            dark:placeholder-gray-400 
                            dark:text-white 
                            dark:focus:ring-primary-500 
                            dark:focus:border-primary-500 
                            dark:shadow-sm-light
                        "
          {...register(name, validation)}
        />
      )}
    </div>
  );
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md mb-3"
      {...framer_error}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>

      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
