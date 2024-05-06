import * as yup from "yup";

const phoneRegx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
export const AddVendorSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email Address is required"),
  phone: yup
    .string()
    .min(8, "Minimum 8 character")
    .max(16, "Maximum 16 character")
    .matches(phoneRegx, "Phone number is not valid")
    .required("Phone number is required"),
  county: yup.string(),
  state: yup.string(),
  city: yup.string(),
  address: yup.string(),
  zipCode: yup
    .string()
    .min(5, "Please enter a valid Zip code.")
    .max(5, "Please enter a valid Zip code."),
  IdProof: yup.string(),
  profilePicture: yup.string(),
});

export const AddCategorySchema = yup.object().shape({
  name: yup.string().trim().required("Category name is required."),
});

export const EditProfileSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.number().required("Phone number is required"),
  zip_code: yup
    .string()
    .min(5, "Please enter a valid Zip code.")
    .max(5, "Please enter a valid Zip code."),
});

export const ChangePasswordSchema = yup.object().shape({
  oldPassword: yup.string().trim().required("Old password is required."),
  newPassword: yup
    .string()
    .trim()
    .required("New password is required.")
    .min(8, "Minimum 8 character")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required.")
    .min(8, "Minimum 8 character")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export const AddSubCategorySchema = yup.object().shape({
  name: yup.string().trim().required("Subcategory name is required."),
  inspector_category_id: yup
    .string()
    .required("Please select the dealers Category"),
});

export const AddHomeownerSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.number().required("Phone number is required"),
  zip_code: yup
    .string()
    .min(5, "Please enter a valid Zip code.")
    .max(5, "Please enter a valid Zip code."),
});

export const SetVendorPasswordSchema = yup.object().shape({
  new_password: yup
    .string()
    .trim()
    .required("New password is required.")
    .min(8, "Minimum 8 character")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const InviteVendorSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.number().required("Phone number is required"),
  email: yup.string().email().required("Email Address is required"),
  role_id: yup.string().required("Please select the for"),
  language_id: yup.string().required("Please select the language"),
  company_name: yup.string().required("Please enter company name"),
  zip_code: yup
    .string()
    .min(5, "Please enter a valid Zip code.")
    .max(5, "Please enter a valid Zip code."),
});

export const AddInspectorSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.number().required("Phone number is required"),
  zip_code: yup
    .string()
    .min(5, "Please enter a valid Zip code.")
    .max(5, "Please enter a valid Zip code."),
});
const phoneRegExp = /^[0-9\b]+$/;
export const AddPropertySchema = yup.object().shape({
  assigned_user_id: yup.string().required("Selelct Inspector is required"),
  property_name: yup.string().required("Property Name is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  zip_code: yup
    .string()
    .min(5, "Please enter a valid Zip code.")
    .max(5, "Please enter a valid Zip code.")
    .required("Zip code is required"),
  lot_number: yup.string().required("Lot Number is required"),
  block_number: yup.string().required("Block Number is required"),
  permit_number: yup.string().required("Permit Number is required"),
  state: yup.string().required("State is required"),
  county_id: yup.string().required("Select County is required"),
});
