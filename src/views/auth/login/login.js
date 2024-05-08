import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import { authUser } from '../../../services/user.service';
import DefaultButton from '../../components/buttons/defaultButton';

const LoginPage = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const ValidateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter a valid email'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Password is required'),
  });

  useEffect(() => {
    if (user && user.token) {
      navigate('/');
    }
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    if (
      values.email != 'daniel.wilson@bristolcare.com' ||
      values.password != '12345678'
    ) {
      console.log('error');
      setError('Login credentials not matched!');
    } else {
      localStorage.setItem(
        'authToken',
        'jskdhbsajhdsajhdjashbbeuy4bebb.sfdhijhniunhie.fedfedibnihub.fdeeedsdsdsdjhbniuryuiir'
      );
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
    setLoading(false);
    setSubmitting(false);
  };

  return (
    <div className="flex bg-themeColor flex-col p-4 w-[400px] rounded-md gap-2">
      <div className={'flex flex-col gap-4'}>
        <div className={'flex flex-col items-center gap-1'}>
          <span className={'text-xl font-medium text-white'}>
            Welcome to Bristol Care
          </span>
        </div>
        <div className={'flex flex-col items-center gap-1'}>
          {error && (
            <span className={'text-sm font-medium text-red-500'}>{error}</span>
          )}
        </div>
        <div className={'flex flex-col gap-2'}>
          <Formik
            initialValues={{
              email: 'daniel.wilson@bristolcare.com',
              password: '12345678',
            }}
            validationSchema={ValidateSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex flex-col gap-2">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter username/email"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
                <div className={'flex justify-end text-white'}>
                  <Link to="/forgot-password" className="text-blue-600">
                    Forgot Password?
                  </Link>
                </div>
                <DefaultButton
                  type="submit"
                  classnames=""
                  disabled={loading}
                  name={'Submit'}
                  loading={loading}
                />
              </div>
            </Form>
          </Formik>
          {/* <div className={'text-center text-white text-sm'}>
            <span>
              Don't have an account?{' '}
              <Link to={'/auth/signup'} className={'px-1 text-blue-600'}>
                Signup
              </Link>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
