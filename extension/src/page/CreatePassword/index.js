import React, { useState } from 'react';
import { Heading, CustomInput, RoundedButton, SimpleFlexContainer, DarkRoundedContainer } from '../../globalStyles';
import { useNavigate } from 'react-router-dom';
import {UserMethods, SecretMethods} from '../../appMethods'
import { getSecret } from '../../features/app/appSlice';
import { useSelector } from 'react-redux';
import { CREATE_PASSWORD, SAVE_PASSWORD } from '../../constant/varName';

function CreatePassword() {
  const [password, setPassword] = useState("")
  const [secondPass, setSecondPass] = useState("")
  const secret = useSelector(getSecret)
  const navigate = useNavigate()
  const handleSave = () => {
    if (password && password === secondPass) {
        const userMethods = new UserMethods(password);
        const secretMethods = new SecretMethods(secret);
        secretMethods.encryptAndSaveSecret();
        userMethods.encryptPasswordAndSave();
        navigate('/login');
    }
  }

  return (
    <SimpleFlexContainer>
      <Heading margin="lg" size="lg">
        {CREATE_PASSWORD}
      </Heading>
      <CustomInput value={password} onChange={(e) => setPassword(e.target.value)} margin="sm" type='password' />
      <CustomInput value={secondPass} onChange={(e) => setSecondPass(e.target.value)} margin="sm" type='password' />
      <DarkRoundedContainer margin="xs" size="xs">
      {password ? password === secondPass ? "Match !" : "Not Match !" : "Enter Password"}
      </DarkRoundedContainer>
        <RoundedButton onClick={handleSave} margin="xs">{SAVE_PASSWORD}</RoundedButton>
    </SimpleFlexContainer>
  );
}

export default CreatePassword;
