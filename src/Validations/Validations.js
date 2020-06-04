const validEmailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
);
const validPasswordRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,15}$/i
);
const validContactRegex = RegExp(
  /^(?:\s+|)((0|(?:(\+|)91))(?:\s|-)*(?:(?:\d(?:\s|-)*\d{9})|(?:\d{2}(?:\s|-)*\d{8})|(?:\d{3}(?:\s|-)*\d{7}))|\d{10})(?:\s+|)$/i
);
const validGstRegex = RegExp(
  /^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/i
);

export const Validations = (event, errors) => {
  const { name, value } = event.target;
  switch (name) {
    case "firstName":
      errors.firstName = value.length > 0 ? "This is a required Field!" : "";
      break;
    case "lastName":
      errors.lastName = value.length > 0 ? "This is a required Field!" : "";
      break;
    case "email":
      errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
      break;
    case "password":
      errors.password = validPasswordRegex.test(value)
        ? ""
        : "Password is not valid!";
      break;
    case "confirmPassword":
      errors.confirmPassword = validPasswordRegex.test(value)
        ? ""
        : "Password and Confirm Password Should Match!";
      break;
    case "companyContact":
      errors.companyContact = validContactRegex.test(value)
        ? ""
        : "Contact No. is not valid!";
      break;
    case "gst":
      errors.gst = validGstRegex.test(value) ? "" : "GST No. is not valid!";
      break;
    case "companyName":
      errors.companyName = value.length > 0 ? "This is a required Field!" : "";
      break;
    case "contact":
      errors.contact = validContactRegex.test(value)
        ? ""
        : "Contact No. is not valid!";
      break;
    case "city":
      errors.city = value.length > 0 ? "This is a required Field!" : "";
      break;

    case "state":
      errors.state = value.length  > 0 ? "This is a required Field!" : "";
      break;

    case "country":
      errors.country = value.length > 0 ? "This is a required Field!" : "";
      break;

    case "addressLine":
      errors.addressLine = value.length > 0 ? "This is a required Field!" : "";
      break;

    case "address_line":
      errors.address_line = value.length > 0 ? "This is a required Field!" : "";
      break;
    case "zipCode":
      errors.zipCode = value.length > 0 ? "Zip-Code is not valid!" : "";
      break;

    case "zip_code":
      errors.zip_code = value.length < 6 ? "Zip-Code is not valid!" : "";
      break;
    case "label":
      errors.label = value.length > 0 ? "This is a required Field!" : "";
      break;
    default:
      break;
  }
  return errors;
};
