interface BrandLogoProps {
  href?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  titleSize?: string;
  className?: string;
}

const BrandLogo = ({
  href,
  titleClassName = 'text-white',
  subtitleClassName = 'text-sage',
  titleSize = 'text-[1.08rem]',
  className = '',
}: BrandLogoProps) => {
  const inner = (
    <>
      <span className={`font-display font-black tracking-[0.22em] ${titleSize} ${titleClassName}`}>
        SUREEPHAK
      </span>
      <span className={`font-body font-light text-[0.5rem] tracking-[0.46em] mt-0.5 ${subtitleClassName}`}>
        REALESTATE
      </span>
    </>
  );

  return href ? (
    <a href={href} className={`flex flex-col leading-none select-none ${className}`}>
      {inner}
    </a>
  ) : (
    <div className={`flex flex-col leading-none ${className}`}>
      {inner}
    </div>
  );
};

export default BrandLogo;
