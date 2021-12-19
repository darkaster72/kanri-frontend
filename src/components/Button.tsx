type AppProps = { children: React.ReactNode; classes?: string };

const Button = ({ children, classes = "" }: AppProps) => (
  <button
    className={`w-full rounded-md px-2 py-2 hover:bg-accent-light active:bg-accent-dark shadow-sm text-primary-light bg-accent ${classes}`}
  >
    {children}
  </button>
);

export default Button;
