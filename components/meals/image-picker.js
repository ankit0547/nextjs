"use client";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageRefInput = useRef();
  const handlePickClick = () => {
    imageRefInput.current.click();
  };
  const handleImageChange = (event) => {
    // debugger;
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  console.log("IMAGE>", pickedImage);
  return (
    <div className={classes.picker}>
      <label htmlFor='image'>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              fill
              alt='This image selected by the user.'
            />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageRefInput}
          onChange={handleImageChange}
        />
        <button
          type='button'
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
