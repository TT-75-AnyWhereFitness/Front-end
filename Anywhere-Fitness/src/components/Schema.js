import * as yup from 'yup'


const Schema = yup.object().shape({
    fName: yup
    .string()
    .required("Must include a name.")
    .min(2, "Must include at least 2 characters."),
    lName: yup
    .string()
    .required("Must include a name.")
    .min(2, "Must include at least 2 characters."),
    // password: yup 
    // .password(),
    email:yup
    .string().email(),
})
export default Schema