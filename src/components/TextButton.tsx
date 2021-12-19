type AppProps = { children: React.ReactNode };

const TextButton = ({ children }: AppProps) => (
  <button className="text-primary-dark px-3 py-2 hover:bg-gray-200 active:bg-gray-400 rounded-md">{children}</button>
);

export default TextButton;
