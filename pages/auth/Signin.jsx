import React, {useState} from 'react';

const Signin = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className='flex flex-col justify-center items-center align-center h-screen'>
      <div className='border px-10 py-2 rounded bg-yellow-200'>
        <h2 className='mb-5 text-[25px] '>Sign up</h2>
        <div>
          <div className='mt-1f'>Name</div>
            <input placeholder='Enter your name' className='border mt-1 rounded border-gray-400' type='text' name='name' value={name} />
        </div>
        <div>
          <div className='mt-2'>Surname</div>
          <input placeholder='Enter your surname' className='border mt-1 rounded border-gray-400' type='text' name='surname' value={surname} />
        </div>
        <div>
          <div className='mt-2'>Email</div>
            <input placeholder="Enter your email" className='border mt-1 rounded border-gray-400' type='text' name='email' value={email} />
        </div>
        <div>
          <div className='mt-2'>Password</div>
            <input placeholder="Enter your email" className='border mt-1 rounded border-gray-400' type='text' name='password' value={password} />
        </div>
        <div>
          <div className='mt-2'>Confirm Password</div>
          <input placeholder='confirm your email' className='border mt-1 rounded border-gray-400' type='text' name='password' value={confirmPassword} />
        </div>
      </div>
    </div>
  )
}

export default Signin