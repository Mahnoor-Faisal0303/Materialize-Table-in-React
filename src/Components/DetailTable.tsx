import { detailData } from '../Data/Detail'
import { useParams } from 'react-router-dom';
import { TypographyStyle, TypographyStyle2 } from './Style';
export const DetailComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const itemId = +id!;  //coverted nullable string into non-nullable number
  const detailItem = detailData.find(item => item.id === itemId);
  return (
    <div>
      <TypographyStyle variant="h2">Discription</TypographyStyle>
        <TypographyStyle2 key={detailItem!.id}>{detailItem!.details}</TypographyStyle2>
    </div>
  )
}
