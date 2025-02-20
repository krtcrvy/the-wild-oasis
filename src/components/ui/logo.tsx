type LogoProps = {
  className?: string;
};

function Logo({ className }: LogoProps) {
  return <img src="/logo.png" alt="Logo" className={className} />;
}

export default Logo;
