import { useId } from 'react';
import './LoginForm.css'
// const LoginForm = ({onLogin}) => {

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.dir(event.target.elements);

//         const form = event.target;
//         const [login, password] = form.elements;
//         onLogin({
//             login: login.value,
//             pass: password.value,
//         });
//         // console.log(login, password);
//         // console.log(login.value, password.value);

//         form.reset();
//     }
        
//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <input className="login-form-login" type="text" name="login"></input>
//       <input className="login-form-password" type="text" name="password"></input>
//       <button className="login-form-button" type="submit">Log in</button>
//     </form>
//   );
// };


function LoginForm() {
    const loginId = useId();  // useId returns a unique ID string associated with this particular useId call in this particular component
    const passwId = useId();

    return (
        <form name="login-form" className='login-form' noValidate>
            <label htmlFor={loginId}>Login</label>
            <input type="text" id={loginId}></input>
            <label htmlFor={passwId}>Password</label>
            <input type="text" id={passwId}></input>
            <button className="login-form-button" type="submit">Log in</button>
        </form>
    )
}


export default LoginForm;