import Image from "next/image";

interface ExerciseImageProps {
  src: string;
  alt: string;
}

const ExerciseImage = ({ src, alt }: ExerciseImageProps) => {
  return <Image src={src} alt={alt} width={300} height={300} />;
};

export default ExerciseImage;
