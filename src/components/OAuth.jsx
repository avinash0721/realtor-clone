import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-600 px-3 py-3 rounded text-white font-semibold uppercase hover:bg-red-700 active:bg-red-800">
      <FcGoogle className="text-2xl bg-white rounded-full mr-3" />
      Continue with google
    </button>
  );
};

export default OAuth;
