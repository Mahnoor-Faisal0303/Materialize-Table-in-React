import { detailData } from '../Data/Detail'
import { useParams } from 'react-router-dom';
import { TypographyStyle, TypographyStyle2 } from './Style';

export const DetailComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const detailItem = detailData.find(item => Number(id) == item.id);

  return (
    <div>
      <TypographyStyle variant="h2">Discription</TypographyStyle>
        <TypographyStyle2>{detailItem!.details}</TypographyStyle2>
    </div>
  )
}
