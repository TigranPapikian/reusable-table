import React, { useState } from 'react';
import { CustomInput, Heading, HeadingWithUnderline, RoundedButton, SimpleFlexContainer } from '../../globalStyles';
import { StatelessUserMethods } from '../../appMethods';
import { useNavigate } from 'react-router-dom';
import { LOGIN, RESET_APP } from '../../constant/varName';

function Login() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleLogin = () => {
    const UserLoginMethods = new StatelessUserMethods();
    if (UserLoginMethods.processLogin(password)) {
      navigate("/user");
    } else {
      setError("Wrong Password !")
    }
  }
  const resetApp = () => {
    const userMethods = new StatelessUserMethods();
    userMethods.resetApp();
    navigate("/");
  }

  return (
    <SimpleFlexContainer>
      <Heading margin="lg" size="lg">
        {LOGIN}
      </Heading>
      <CustomInput value={password} onChange={(e) => setPassword(e.target.value)} margin="sm" type='password' />
      <RoundedButton onClick={handleLogin} margin="xs">{LOGIN}</RoundedButton>
        <HeadingWithUnderline onClick={resetApp} margin="xs" size="xs">
          {RESET_APP}
        </HeadingWithUnderline>
      <Heading margin="xs" size="xs">
        {!!error && error}
      </Heading>
    </SimpleFlexContainer>
  );
}

export default Login;
