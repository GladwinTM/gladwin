type ThreadEffectProps = {
  className?: string;
};

export function ThreadEffect({ className = "" }: ThreadEffectProps) {
  return (
    <div aria-hidden="true" className={`thread-effect ${className}`}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
