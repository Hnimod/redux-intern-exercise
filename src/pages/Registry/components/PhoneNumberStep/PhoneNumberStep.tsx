import { Field, FieldProps, ErrorMessage } from 'formik';

import ErrorText from '../ErrorText';
import { FormModel } from '../../models/registryFormModel';
import { FormButton } from '../../../../shared/Buttons';

import styles from './PhoneNumberStep.module.scss';

type Props = {
  formModel: FormModel;
};

const PhoneNumberStep = ({ formModel }: Props) => {
  const { phoneNumber, agree } = formModel;

  return (
    <>
      <h1 className={styles.title}>Get moving with Uber</h1>
      <Field name={phoneNumber.name}>
        {({ field, meta, form }: FieldProps) => (
          <>
            <div
              className={`${styles.input} ${
                !!meta.error && meta.touched && styles.errorPhone
              }`}
            >
              <label htmlFor={phoneNumber.name}>+84</label>
              <input
                {...field}
                id={phoneNumber.name}
                placeholder={phoneNumber.placeholder}
                autoComplete="off"
                onChange={(e) => {
                  if (e.target.value.match(/^(\s*|\d+)$/)) {
                    form.setFieldValue(phoneNumber.name, e.target.value);
                    return;
                  }
                }}
              />
            </div>
            <ErrorMessage
              name={phoneNumber.name}
              render={(message) => (
                <ErrorText
                  message={message}
                  className={styles.errorPhoneText}
                />
              )}
            />
          </>
        )}
      </Field>
      <Field name={agree.name}>
        {({ field, meta }: FieldProps) => (
          <div
            className={`${styles.checkBox} ${
              !!meta.error && meta.touched && styles.errorAgree
            }`}
          >
            <input {...field} id={agree.name} type="checkbox" />
            <label htmlFor={agree.name}>{agree.label}</label>
          </div>
        )}
      </Field>
      <div className={styles.button}>
        <FormButton />
      </div>
    </>
  );
};

export default PhoneNumberStep;
