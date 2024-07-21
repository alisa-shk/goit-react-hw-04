// import { Formik, Form, Field, ErrorMessage } from "formik";

// const SearchBar = () => {
//     return (
//         <header>
//             <Formik>
//                 <Form>
//                     <div>
//                         <Field type="text" name="text" autoComplete="off" autoFocus placeholder="Search images and photos"></Field>
//                         <ErrorMessage name="text" component="div"></ErrorMessage>
//                     </div>
//                     <button type="submit">Search</button>
//                 </Form>
//             </Formik>
//         </header>
//     );
// };


import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.elements.query.value;
        if (query.trim() === "") {
            toast.error("Please complete the search field!");
            return;
        } onSearch(query);
        form.reset();
    }
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <Toaster/>
                <button type="submit">Search</button>
                </form>
        </header>
    );
};

export default SearchBar;