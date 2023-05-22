import React, { useState } from "react";
import Input from "../components/Input";
import Alert from "../components/Alert"


import { FormProvider, useForm } from "react-hook-form";
import { API_URL } from "../constants";
import axios from "axios";



export default function Contact() {
  const methods = useForm();

  const [formStatus, setFormStatus] = useState("Send");

  // sendStatus {
  // status: successfull or Failed
  // title: action message title
  // message: message
  // }
  const [sendStatus, setSendStatus] = useState(null);

  const onSubmit = methods.handleSubmit(
    (e) => {
      setFormStatus("Sending");
      axios
        .post(API_URL + 'core/contact', {
          email: e.email,
          subject: e.subject,
          description: e.message
        })
        .then(response => {


          setSendStatus({
            status: 200,
            title: "Successfull",
            message: "Message sent successfully. We will get in touch soon."
          });
          setFormStatus("Send");

        })
        .catch((error) => {
          setSendStatus({
            status: 500,
            title: "Error",
            message: error ? Object.values(error.response.data) : "An Error occured"
          });
          setFormStatus("Send");
        })
        .finally(() => {
          console.log("the axios call was executed");
          methods.reset();
        });
    });

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-centertext-zinc-800 dark:text-zinc-100 dark:text-white">
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
              placeholder={"your@email.com"}
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
              placeholder={"Subject"}
            />

            <Input
              name="message"
              multiline={true}
              label="Description"
              type="text"
              id="Description"
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
              placeholder={"Let us build something amazing together"}
            />
            <button
              class="w-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 dark:bg-slate-800 bg-slate-900 text-white hover:bg-slate-700 hover:border-transparent rounded"
              onClick={onSubmit}
            >
              {formStatus}
            </button>
          </form>
        </FormProvider>
        {sendStatus && <Alert message={sendStatus?.message} title={sendStatus?.title} />}
      </div>
    </section>
  );
}
