import clsx from "clsx";
import Image from "next/image";

export default function MyImage({
  width,
  height,
  aspectRatio,
  src,
  alt,
  priority,
  className,
}: {
  width?: string;
  height?: string;
  aspectRatio?: string;
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx("relative shrink-0 overflow-hidden", className)}
      style={{ width, height, aspectRatio }}
    >
      <Image
        style={{ objectFit: "cover" }}
        alt={alt}
        src={src}
        fill={true}
        priority={priority}
      />
    </div>
  );
}
