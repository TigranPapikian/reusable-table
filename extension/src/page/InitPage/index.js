import React from 'react';
import { CustomLink, DarkRoundedContainer, Heading, RoundedButton, SimpleFlexContainer } from '../../globalStyles';
import { getSecret, setSecret } from '../../features/app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import keygen from 'keygenerator';
import { CHROME_HASHING_EXTENSION, CREATE_PASSWORD, SECRET_KEY } from '../../constant/varName';

function InitPage() {
  const dispatch = useDispatch()
  const secret = useSelector(getSecret)
  if(!secret) {
    dispatch(setSecret(keygen._()))
  }
  return (
    <SimpleFlexContainer>
      <Heading margin="lg" size="lg">
        {CHROME_HASHING_EXTENSION}
      </Heading>
      <Heading margin="xs" size="sm">
        {SECRET_KEY}
      </Heading>
      <DarkRoundedContainer margin="sm" size="xs">
        {secret}
      </DarkRoundedContainer>
      <CustomLink to={'/password'}>
        <RoundedButton margin="xs">{CREATE_PASSWORD}</RoundedButton>
      </CustomLink>
    </SimpleFlexContainer>
  );
}

export default InitPage;
