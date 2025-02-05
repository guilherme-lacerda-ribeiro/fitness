import Image from "next/image";
import { useState } from "react";

interface ExerciseVideoProps {
  videoUrl: string;
}

const ExerciseVideo = ({ videoUrl }: ExerciseVideoProps) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      {playing ? (
        <iframe
          width="300"
          height="200"
          src={videoUrl}
          title="Vídeo do exercício"
          allowFullScreen
        />
      ) : (
        <Image
          src={videoUrl}
          alt="Thumbnail do vídeo"
          width={300}
          height={200}
          style={{ cursor: "pointer" }}
          onClick={() => setPlaying(true)}
        />
      )}
    </div>
  );
};

export default ExerciseVideo;
