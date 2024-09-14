import { Form } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <>
      <Form className='loginForm' method='POST'>
        <label className='loginLabel' htmlFor='username'>
          Username:
        </label>
        <input className='loginInput' type='text' id='username' name='username' />

        <label className='loginLabel' htmlFor='password'>
          Password
        </label>
        <input className='loginInput' type='password' name='password' id='password' />

        <button className='loginBtn' type='submit'>
          Login
        </button>
      </Form>
    </>
  );
}
