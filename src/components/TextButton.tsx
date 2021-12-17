type AppProps = { children: React.ReactNode };

const TextButton = ({ children }: AppProps) => (
  <button className="text-white px-3 py-2 font-bold">{children}</button>
);

export default TextButton;
