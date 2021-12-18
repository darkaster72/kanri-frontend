type AppProps = { children: React.ReactNode; classes?: string };

const Button = ({ children, classes = '' }: AppProps) => (
  <button className={`rounded-md px-3 py-2 font-bold shadow-sm text-primary-light bg-accent ${classes}`}>
    {children}
  </button>
);

export default Button;
