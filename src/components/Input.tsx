export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="mb-4 py-2 px-5 border border-gray-300 rounded-full w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
    />
  );
};
