type AppProps = { children: React.ReactNode; classes: string };

const Button = ({ children, classes }: AppProps) => (
  <button className={`rounded-md bg-white px-3 py-2 font-bold ${classes}`}>
    {children}
  </button>
);

export default Button;
