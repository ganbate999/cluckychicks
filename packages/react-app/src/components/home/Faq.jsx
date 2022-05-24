import React, { useState } from 'react';
import { Accordion } from './';

export default function Faq() {
  const [selectedIndex, setSelectedIndex] = useState(6)

  return (
    <div className="faqContainer" id="faqContainer">
      <h1>FAQ</h1>
      <div className="accordion">
        <Accordion title="WHAT ARE CLUCKY CHICKS?" index={0} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <p>Clucky Chicks is a collection of 10,000 unique hand drawn NFTs on the Ethereum Blockchain. Each one is badass and in great shape! Ready to take on the Cluckyverse and it’s variants!</p>
        </Accordion>
        <Accordion title="HOW MUCH DO CLUCKY CHICKS COST?" index={1} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <p>The OG collection of Clucky Chicks are launching at only 0.03 ETH. The price will slowly raise through each launch phase, so getting in early is more beneficial. We want to promote a profitable and stable floor for all holders over time.</p>
        </Accordion>
        <Accordion title="HOW WERE CLUCKY CHICKS CREATED?" index={2} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <p>Clucky Chicks are generated algorithmically by mixing up a variety of hand drawn properties with different rarities in the following categories:<br />
            Background, Aura, Body, Clothing, Face, Eyes / Eyewear, Head, Weapon and Accessory.</p>
        </Accordion>
        <Accordion title="WHERE CAN WE TALK TO YOU?" index={3} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <p>You can either tweet me at <a href='https://twitter.com/CluckyChicksNFT'>@CluckyChicksNFT</a> on Twitter. Or preferably join our Discord at <a href="/discord" target="_blank"> https://cluckychicks.app/discord</a> for a chat! <br />
            If you wish to contact privately, email to <a href='mailto:paul@cluckychicks.app'>Paul@CluckyChicks.app</a>.</p>
        </Accordion>
        <Accordion title="WHAT IS THE SMART CONTRACT ADDRESS OF CLUCKY CHICKS?" index={4} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <p>Chicks Contract – <a href='https://etherscan.io/address/0x54c399e16ec2a508f20b0a2660588fc474ef0495'>https://etherscan.io/address/0x54c399e16ec2a508f20b0a2660588fc474ef0495</a><br />
            $EGG Contract – <a href='https://etherscan.io/address/0x610e5b83f5c69217d065e44415c0d2dfa497f9ab'>https://etherscan.io/address/0x610e5b83f5c69217d065e44415c0d2dfa497f9ab</a><br />
            Staking Contract – <a href='https://etherscan.io/address/0xb4e6899b11b9f15d953cf0f58fdc6813f5547caa'>https://etherscan.io/address/0xb4e6899b11b9f15d953cf0f58fdc6813f5547caa</a></p>
        </Accordion>
        <Accordion title="WHAT IS THE CLUCKY DAO?" index={5} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
          <p>You can find our DAO at <a href='https://snapshot.org/#/clucky.eth'>https://snapshot.org/#/clucky.eth</a><br />
            The DAO will let all Clucky Chicks holders vote on the future of the NFT and the Cluckyverse. As we say, community comes first, so for you to have a dedicated place to vote on economy changing decisions is vital.</p>
        </Accordion>
      </div>
    </div>
  );
}



// import React, { useEffect, useState } from 'react';
// import { Accordion } from './';

// export default function Faq() {
//   const [selectedIndex, setSelectedIndex] = useState(5)

//   const accordionData = [
//     {
//       title: 'WHAT ARE CLUCKY CHICKS?',
//       content: `Clucky Chicks is a collection of 10,000 unique hand drawn NFTs on the Ethereum Blockchain. Each one is badass and in great shape!`
//     },
//     {
//       title: 'HOW MUCH DO CLUCKY CHICKS COST?',
//       content: `The OG collection of Clucky Chicks are launching at only 0.05 ETH. Once they hit secondary market however, it's anyone's guess, as we don't control that.`
//     },
//     {
//       title: 'HOW WERE CLUCKY CHICKS CREATED?',
//       content: `Clucky Chicks are generated algorithmically by mixing up a variety of hand drawn properties with different rarities in the following categories:
//       Background, Aura, Body, Clothing, Face, Eyes / Eyewear, Head, Weapon and Accessory.`
//     },
//     {
//       title: 'WHERE CAN WE TALK TO YOU?',
//       content: `You can either tweet me at @CluckyChicksNFT on Twitter. Or preferably join our Discord at https://cluckychicks.app/discord for a chat! If you wish to contact privately, email to Paul@CluckyChicks.app.`
//     },
//     {
//       title: 'WHAT IS THE SMART CONTRACT ADDRESS OF CLUCKY CHICKS?',
//       content: `This link will be added as soon as it is live.`
//     }
//   ];

//   return (
//     <div className="faqContainer" id="faqContainer">
//       <h1>FAQ</h1>
//       <div className="accordion">
//         {accordionData.map((data, index) => (
//             <Accordion
//               title={data.title}
//               content={data.content}
//               index={index}
//               key={index}
//               selectedIndex={selectedIndex}
//               setSelectedIndex={setSelectedIndex} />
//           ))}
//       </div>
//     </div>
//   );
// }
