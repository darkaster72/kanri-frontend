type InputType = "text" | "email" | "password";
type AppProps = { placeholder: string; type?: InputType; classes?: string };

const TextField = ({ placeholder, type = "text", classes }: AppProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`rounded-md w-full px-2 py-2 shadow-sm focus:outline-none focus:ring-2 ring-1 ring-gray-200 focus:ring-secondary ${classes}`}
  />
);

export default TextField;
