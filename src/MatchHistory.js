import React from 'react';

const MatchHistory = (props) => {
  return (
      <div className="MatchHistory">
        {
          props.data.map((listing) => {
            return (
                <div className="listing">
                  <div className={listing.winner === 1 ? "listing-name won" : "listing-name lost"}>{listing.playerOneName}</div>
                  <div className="spacer"></div>
                  <div className="date-box">{listing.date}</div>
                  <div className="spacer"></div>
                  <div className={listing.winner === 2 ? "listing-name won" : "listing-name lost"}>{listing.playerTwoName}</div>
                </div>
            )
          })
        }
      </div>
  )
}

export default MatchHistory;