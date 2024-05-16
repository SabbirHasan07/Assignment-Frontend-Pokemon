

import { useRouter } from 'next/router'
import useLogin from '@/pages/Store/useLogin'
import Link from 'next/link';
import useCounter from '@/pages/Store/useCart';


export default function Example() {
  const router = useRouter();
  const { login, name, updateLogin, updateUsername } = useLogin();
  const count = useCounter((state) => state.count);
  const reset = useCounter((state) => state.reset);
  console.log(name);
  const handleLogin = () => {
    updateLogin("Login");
    updateUsername("");
    router.push("/Login");
  }

  return (
    <div className="navbar bg-gray-100">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">Pokemon</Link>
      </div>
      <div>
        <button onClick={()=>{reset()}} className="btn btn-ghost text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <p className='text-orange-600 text-sm'>{count}</p>
        </button>
        
      </div>

      <div className="navbar-end">
        <p className='mr-4'>{name}</p>
        <div className='px-6 py-2 bg-orange-400 mr-2 text-white font-bold hover:bg-orange-600 rounded-md'><button onClick={handleLogin}>{login}</button></div>
      </div>
    </div>
  )
}

