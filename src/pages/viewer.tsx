import { useState } from "react";
import { Connection } from '@metaplex/js';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { Card } from '../components/card';
import IconSearch from '../assets/img/search.svg';

export default function Viewer() {
  const [publicKey, setPublicKey] = useState("");
  const [nftData, setNFTData] = useState<any[]>();
  
  const changePublicKey = (e: any) => {
    setPublicKey(e.target.value);
  }

  const searchPublicKey = async () => {
    const connection = new Connection('devnet');
    const nftsmetadata = await Metadata.findDataByOwner(connection, publicKey);
    setNFTData(nftsmetadata)
    console.log(nftData)
  }

  const bookmarkCard = (id: number, status: boolean) => {
    console.log(id, status)
  }

  return (
    <div className="nft-viewer">
      {!nftData ?
        <div className="home">
          <div className="nft-search-container">
            <label className="nft-viewer-title">NFT Viewer</label>
            <div className="search-container">
              <input className="search-input" placeholder="search owner public key" onChange={changePublicKey} />
              <img className="search-icon" src={IconSearch} alt="search icon" onClick={searchPublicKey} />
            </div>
          </div>
        </div>

        :

        <div className="nft-viewer-container">
          <div className="nft-search-container">
            <label className="nft-viewer-title">NFT Viewer</label>
            <div className="search-container">
              <input className="search-input" placeholder="search owner public key" onChange={changePublicKey} />
              <img className="search-icon" src={IconSearch} alt="search icon" onClick={searchPublicKey} />
            </div>
          </div>

          <div className="nft-btn-group">
            <div className="btn-last-group">
              <button className="btn-primary">Last transaction time</button>
              <button className="btn-primary">Last creation time</button>
            </div>
            <button className="btn-clear">Clear bookmark</button>
          </div>

          <div className="nft-card-container">
            {nftData?.map((nft, idx) => (
              <Card key={nft.mint} details={nft} index={idx} onSelect={(id, status) => {bookmarkCard(id, status)}} />
            ))}
          </div>
        </div>
      }
    </div>
  );
}