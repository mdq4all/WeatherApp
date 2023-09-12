import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  content: string | number;
}
export default function MiddleIcons({ src, alt, content }: Props) {
  return (
    <div className="text-white grid place-content-center">
      <Image src={src} width={40} height={40} alt={alt} />
      <article>{content}</article>
    </div>
  );
}
