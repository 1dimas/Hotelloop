import { FaG } from 'react-icons/fa6';


export const LoginGoogleButton = () => {
  return (
    <form >
      <button className='flex items-center gap-2 w-full h-full bg-blue-700 text-white
      font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer'>
        <FaG size="6" />
        Sign In With Google
      </button>
    </form>
  );
};

