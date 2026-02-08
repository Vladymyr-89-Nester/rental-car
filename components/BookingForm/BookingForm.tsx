import toast, { Toaster } from 'react-hot-toast';
import css from './BookingForm.module.css';
import Calendar from '../Calendar/Calendar';

export default function BookingForm() {
  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    
    toast.success(
      `Thank you for your order. We will contact you at the email address you provided.`,
      {
        duration: 7000,
      }
    );
  };

  return (
    <form className={css.bookingForm} action={handleSubmit}>
      <Toaster position='top-center' />
      <h4 className={css.formTitle}>Book your car now</h4>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <label>
        <input
          className={css.input}
          type='text'
          name='userName'
          placeholder='Name*'
          required
        />
      </label>
      <label>
        <input
          className={css.input}
          type='email'
          name='userEmail'
          placeholder='Email*'
          required
        />
      </label>
      <label htmlFor='calendar-input'>
        <Calendar />
      </label>
      <label>
        <textarea
          className={css.textarea}
          rows={4}
          name='message'
          placeholder='Comment'
        ></textarea>
      </label>
      <button className={css.submitButton} type='submit'>
        Send
      </button>
    </form>
  );
}
