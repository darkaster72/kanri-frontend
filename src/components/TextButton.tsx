type AppProps = { children: React.ReactNode };

const TextButton = ({ children }: AppProps) => (
  <button className="text-primary-dark px-3 py-2">{children}</button>
);

export default TextButton;
