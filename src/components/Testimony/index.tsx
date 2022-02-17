/* eslint-disable @next/next/no-img-element */
import { TestimonyBox } from './styles'

interface TestimonyProps {
  content: string;
  imgUrl: string;
  profession: string;
  name: string;
}

export function Testimony({ content, imgUrl, profession, name }: TestimonyProps) {
  return (
    <TestimonyBox>
        <p>{content}</p>
        
        <div className="psychologist-information">
          <img
            src={imgUrl}
            alt="foto do profissional"
            width={56}
            height={56}
          />

          <div className="name-and-profession">
            <span>{name}</span>

            <span>{profession}</span>
          </div>
        </div>
    </TestimonyBox>
  );
}