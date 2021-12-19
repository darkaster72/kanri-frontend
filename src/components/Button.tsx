type AppProps = { children: React.ReactNode; classes?: string };

const Button = ({ children, classes = "" }: AppProps) => (
  <button
    className={`w-full rounded-md p-2 hover:bg-accent-light active:bg-accent-dark shadow-sm text-primary-light bg-accent ${classes}`}
  >
    {children}
  </button>
);

export default Button;
