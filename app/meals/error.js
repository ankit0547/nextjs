"use client";

import React from "react";

function Error({ error }) {
  return (
    <div>
      Fetching meals failed! Error
      {JSON.stringify(error, null, 2)}
    </div>
  );
}

export default Error;
