import React, { useState } from "react";
import Input from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";

export default function Contact() {
  const methods = useForm();

  const [formStatus, setFormStatus] = useState("Send");
  const [email, setEmail] = useState("youremail@mail.com ");
  const [subject, setSubject] = useState("Subject");
  const [message, setMessage] = useState(
    "Let us build something amazing together"
  );
  
  
  const onSubmit = methods.handleSubmit((e) => console.log(e));
  
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <FormProvider {...methods}>
          <form
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <Input
              label="email"
              type="email"
              name="email"
              id="email"
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
              placeholder={email}
            />
            <Input
              name="subject"
              label="subject"
              type="text"
              id="subject"
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
                minLength: {
                  value: 6,
                  message: "min 6 characters",
                },
              }}
              placeholder={subject}
            />

            <Input
              name="message"
              multiline={true}
              label="subject"
              type="text"
              id="subject"
              placeholder={subject}
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
                minLength: {
                  value: 6,
                  message: "min 6 characters",
                },
              }}
            />
            <button
              class="w-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 hover:border-transparent rounded"
              onClick={onSubmit}
            >
              {formStatus}
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
