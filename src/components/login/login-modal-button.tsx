import Image from 'next/image';

type LoginModalButtonProps = {
  onClickFn: () => void;
  text: string;
  imgSrc?: string;
  imgAlt?: string;
  icon?: React.ReactNode;
};

export function LoginModalButton({
  onClickFn,
  text,
  imgSrc,
  imgAlt,
  icon,
}: LoginModalButtonProps) {
  return (
    <button
      className="rounded-md flex items-center justify-center p-4 gap-8 cursor-pointer w-full bg-neutral hover:opacity-50"
      onClick={onClickFn}
    >
      {icon ? (
        <>{icon}</>
      ) : (
        <Image src={imgSrc!} alt={imgAlt!} width={32} height={32} />
      )}{' '}
      {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </button>
  );
}
