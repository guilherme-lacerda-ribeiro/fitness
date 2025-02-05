import Image from "next/image";
import { useState } from "react";

interface ExerciseVideoProps {
  videoUrl: string;
  imageUrl: string;
}

const ExerciseVideo = ({ videoUrl, imageUrl }: ExerciseVideoProps) => {
  const [playing, setPlaying] = useState(false);

  const width = 300;
  const height = width * 16 / 9;

  return (
    <div>
      {playing ? (
        <iframe
          width={width}
          height={height}
          src={videoUrl}
          title="Vídeo do exercício"
          allowFullScreen
          className="rounded-lg"
        />
      ) : (
        <Image
          src={imageUrl}
          alt={`Imagem do exercício ${imageUrl}`}
          width={width}
          height={height}
          style={{ cursor: "pointer" }}
          onClick={() => setPlaying(true)}
          className="rounded-lg"
        />
      )}
    </div>
  );
};

export default ExerciseVideo;
