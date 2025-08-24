import { useState } from "react"


export const LoginForm = () => {
    const [values, setValues] = useState({
        login: "",
        password: "",
    });

    
    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value,
        });
  };

    // const handleLoginChange = (evt) => {
    //     setValues({
    //         ...values,
    //         login: evt.target.value,
    //     })
    // }


        // const handlePasswordChange = (evt) => {
        // setValues({
        //     ...values,
        //     password: evt.target.password,
        // })
        // }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(values);
        
        setValues({
            login: '',
            password: '',
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="login"
                value={values.login}
                onChange={handleChange} />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange} />
            <button type="submit">Login</button>
            <p></p>
        </form>
    )
}


