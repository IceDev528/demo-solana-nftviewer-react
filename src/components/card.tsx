import { FC, useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import starFilled from '../assets/img/star-filled.svg'
import starOutline from '../assets/img/star-outline.svg'
import errImg from '../assets/img/not-found.png'

type Props = {
  details: any;
  index: number;
  onSelect: (id: number, status: boolean) => void;
};

export const Card: FC<Props> = ({
  details,
  index,
  onSelect,
}) => {
  const { data, error } = useSWR(
    details.data.uri,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { image } = data ?? {};
  const cardData = details.data;
  const [bookmark, setBookmark] = useState(false);

  const linkNFTToken = (mint: string) => {
    let url = 'https://solscan.io/token/' + mint;
    window.open(url, '_blank');
  }

  return (
    <div className="card" onClick={() => linkNFTToken(details.mint)}>
      <div className="card-preview">
        <img className="card-image" src={image ? image : errImg} alt="nft image" />
        <img className="star" src={bookmark ? starFilled : starOutline} alt="star image" onClick={() => { setBookmark(!bookmark); onSelect(index, bookmark) }} />
      </div>
      <div className="card-details">
        <span className="card-title">{cardData.name}</span>
        <span className="card-creator">
          Creator :   {cardData.creators[0].address.substr(0, 4)}
          ...
          {cardData.creators[0].address.substr(cardData.creators[0].address.length - 4, cardData.creators[0].address.length)}
        </span>
      </div>
    </div>
  );
}