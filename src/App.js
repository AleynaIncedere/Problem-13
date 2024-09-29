import { useState } from 'react';

export default function PersonalInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timezone, setTimezone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = firstName && lastName && timezone;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className='bg-gray-800 h-screen divide-y divide-white/5 relative'>
      <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-white'>Adı Soyadı</h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>Zaman Dilimi</p>
        </div>

        <form className='md:col-span-2' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-white'>Adınız</label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  onChange={(event) => setFirstName(event.target.value)}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-white'>Soyadınız</label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  onChange={(event) => setLastName(event.target.value)}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='timezone' className='block text-sm font-medium leading-6 text-white'>Zaman Dilimi</label>
              <div className='mt-2'>
                <select
                  id='timezone'
                  name='timezone'
                  onChange={(event) => setTimezone(event.target.value)}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option value=''>Seçiniz</option>
                  <option>Pasifik Standart Saati</option>
                  <option>Doğu Standart Saati</option>
                  <option>Greenwich Ortalama Saati</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-8 flex'>
            <button
              type='submit'
              disabled={!isFormValid}
              className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${isFormValid ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-gray-500 cursor-not-allowed'}`}
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className='absolute bottom-25 left-5 text-white block text-base rounded-md border-0 bg-white/5 w-full md:w-1/3 p-3 md:p-3'>

          <p>Ad: {firstName}</p>
          <p>Soyad: {lastName}</p>
          <p>Saat Dilimi: {timezone}</p>
        </div>
      )}
    </div>
  );
}
