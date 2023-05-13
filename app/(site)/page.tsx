import Image from 'next/image';
import AuthForm from './components/AuthForm';

const Home = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-center lg:text-3xl md:text-2xl text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 whitespace-nowrap">
            Natter Ninja
          </h1>
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={48}
            width={48}
            className="md:w-8 w-6 ml-4"
          />
        </div>

        <h2 className="mt-6 text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default Home;
