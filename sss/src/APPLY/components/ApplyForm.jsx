// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import styles from '../../style';

// const ApplyForm = () => {
//   const [state, handleSubmit] = useForm("xzbndjka");

//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" name="email" />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />

//       <label htmlFor="message">Message</label>
//       <textarea id="message" name="message" />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />

//       {/* File input for uploading */}
//       <label htmlFor="file">File</label>
//       <input type="file" id="file" name="file" />

//       {/* Display errors for file upload if any */}
//       <ValidationError prefix="File" field="file" errors={state.errors} />

//       <button
//         className={`${styles.button} cursor-pointer`}
//         type="submit"
//         disabled={state.submitting}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ApplyForm;
