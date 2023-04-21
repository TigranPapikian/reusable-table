import React, { useEffect } from 'react';
import { CustomLink, DarkRoundedContainer, Heading, HeadingWithUnderline, RoundedButton, SimpleFlexContainer } from '../../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getSecret, setSecret } from '../../features/app/appSlice';
import { SecretMethods, StatelessSecretMethods, StatelessUserMethods, UserMethods } from '../../appMethods';
import keygen from 'keygenerator';
import { GENERATE_NEW_SECRET, LOG_OUT, USER_LOGGED_IN } from '../../constant/varName';

function UserPage() {
  const dispatch = useDispatch()
  const secret = useSelector(getSecret)

  useEffect(() => {
    const secretKeyMethods = new StatelessSecretMethods();
    dispatch(setSecret(secretKeyMethods.getEncryptedSecret()));
}, [])

  const generateNewSecret = () => {
    const userInfo = new StatelessUserMethods();
    const newSecret = keygen._();
    const currentPassword = userInfo.getAndDecryptPassword();
    const userMethods = new UserMethods(currentPassword);
    const secretMethods = new SecretMethods(newSecret);
    secretMethods.encryptAndSaveSecret();
    userMethods.encryptPasswordAndSave();
    dispatch(setSecret(newSecret));
}

  return (
    <SimpleFlexContainer>
      <Heading margin="lg" size="lg">
        {USER_LOGGED_IN}
      </Heading>
      <DarkRoundedContainer margin="xs" size="xs">
        {secret}
      </DarkRoundedContainer>
        <HeadingWithUnderline onClick={generateNewSecret} margin="xs" size="xs">
          {GENERATE_NEW_SECRET}
        </HeadingWithUnderline>
      <CustomLink to={'/login'}>
        <RoundedButton margin="lg">{LOG_OUT}</RoundedButton>
      </CustomLink>
    </SimpleFlexContainer>
  );
}

export default UserPage;
