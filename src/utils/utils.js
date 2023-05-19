export const findInputError = (errors, name) => {
  console.log(name, " error ", errors[name]);
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      console.log("error is: ", errors[key]);
      return Object.assign(cur, { error: errors[key] });
    }, {});
  // console.log('filtered: ', filtered);
  return filtered;
};

export const isFormInValid = (err) => {
  if (Object.keys(err).length > 0) {
    console.log("form is invalid");
    return true;
  }
  console.log("form is valid");
  return false;
};
