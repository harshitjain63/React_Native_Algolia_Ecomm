import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {LoginProps} from '../../Screens/Login';
import {z} from 'zod';
import Buttons from '../Button';

interface FormLoginProps extends LoginProps {
  translations: undefined; // Define the type for translations
}

const FormLogin = ({navigation}: FormLoginProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [passwordErrors, setPAsswordErrors] = useState<string>('');
  const [emailErrors, setEmailError] = useState<string>('');

  const EmailFormSchema = z.object({
    email: z.string().email('Invalid email format').trim(),
    password: z
      .string()
      .min(8, 'The password must be at least 8 characters long')
      .max(32, 'The password must be a maximum of 32 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character , and must be at least 8 characters long',
      ),
  });

  type EmailForm = z.infer<typeof EmailFormSchema>;

  const validateAddress = (formData: EmailForm) => {
    try {
      const parsedAddress = EmailFormSchema.parse(formData);
      console.log('Validation passed: ', parsedAddress);
      onPressHandler();
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach(issue => {
          const field = issue.path[0];
          const message = issue.message;

          switch (field) {
            case 'password':
              setPAsswordErrors(message);
              break;
            case 'email':
              setEmailError(message);
              break;
            default:
              break;
          }
        });
      } else {
        console.error('Unexpected error: ', error);
      }
    }
  };

  const handleSubmit = () => {
    const formData = {password, email};
    validateAddress(formData);
  };

  const onPressHandler = () => {
    setEmail('');
    setPassword('');
    setPasswordShown(false);
    navigation.navigate('Home');
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <View style={styles.formContainer}>
      {emailErrors.length > 0 && (
        <Text style={styles.error}>{emailErrors}</Text>
      )}
      <TextInput
        label={'Enter Email'}
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        autoComplete="email"
        outlineColor={'orange'}
        activeOutlineColor="orange"
        style={styles.input}
      />
      {passwordErrors.length > 0 && (
        <Text style={styles.error}>{passwordErrors}</Text>
      )}
      <TextInput
        secureTextEntry={!passwordShown}
        label={'Enter Password'}
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        autoComplete="password"
        outlineColor={'orange'}
        activeOutlineColor="orange"
        style={styles.input}
        right={
          <TextInput.Icon
            icon={passwordShown ? 'eye-off' : 'eye'}
            onPress={togglePassword}
          />
        }
      />

      {/* Register Button */}
      <Buttons
        txt={'Login'}
        styles={styles.custom_button}
        onpress={() => {
          handleSubmit();
        }}
      />
      <Text style={styles.txt}>
        Don{'&apos'}t Have an Account?
        <Text
          onPress={() => navigation.navigate('Register')}
          style={styles.txt2}>
          {' '}
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: '10%',
  },
  txt2: {
    color: 'orange',
  },
  formContainer: {
    padding: 20,
    marginTop: '5%',
    width: '100%',
  },
  input: {
    marginBottom: '6%',
    width: '100%',
  },
  custom_button: {
    alignSelf: 'center',
    marginTop: '8%',
  },
  error: {
    color: 'red',
    marginBottom: '1%',
  },
});

export default FormLogin;
