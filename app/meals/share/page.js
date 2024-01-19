"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { useFormik } from "formik";
import * as Yup from "yup";

// Yup schema to validate the form

let formik;

export default function ShareMealPage() {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    title: Yup.string().required(),
    summary: Yup.string().required(),
    instructions: Yup.string().required(),
    // image: Yup.string().required(),
  });
  formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      title: "",
      summary: "",
      instructions: "",
      // image: null,
    },
    // Pass the Yup schema to validate the form
    validationSchema: schema,
    enableReinitialize: true,
    // Handle form submission
    onSubmit: async (values) => {
      debugger;
      shareMeal(values);
      // Make a request to your backend to store the data
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit} action='POST'>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <span className='error'>{errors.name}</span>
              )}
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <span className='error'>{errors.email}</span>
              )}
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              onChange={handleChange}
            />
            {errors.title && touched.title && (
              <span className='error'>{errors.title}</span>
            )}
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input
              type='text'
              id='summary'
              name='summary'
              onChange={handleChange}
            />
            {errors.summary && touched.summary && (
              <span className='error'>{errors.summary}</span>
            )}
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              onChange={handleChange}
            />
            {errors.instructions && touched.instructions && (
              <span className='error'>{errors.instructions}</span>
            )}
          </p>
          <div>
            <ImagePicker label='Your image' name='image' />
            {errors.image && touched.image && (
              <span className='error'>{errors.image}</span>
            )}
          </div>

          <p className={classes.actions}>
            {/* <button type='submit'>Share Meal</button> */}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
