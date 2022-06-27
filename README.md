### **Product requirements**

- Use React or ReactNative.
- Once a user inputs a public key then the viewer app displays all of the NFTs held by the public key.
- The NFT data should be retrieved from Solana itself directly using libraries such as `solana-web3.js`. Do not extract data from other centralized services.
- The list of retrieved NFTs should be up to date.
- NFT listing can be customized.
    - There are two buttons, **order by last transaction time** and **order by creation tim**e. Both of them make the items listed in decreasing order in time.
    - If a user clicks **order by last transaction time** then the resulting NFTs become re-ordered according to their last transaction times.
    - If a user clicks **order by creation tim**e ****then the resulting NFTs become re-ordered according to their last creation times.
    - Initially the list is ordered by the last transaction times of the NFTs of a wallet.
    - A user can change the order of ordered NFTs with drag-and-drop. (order customization).
    - If a user clicks **order by last transaction time** after changing the existing order with drag-and-drops, the custom change is forgotten and the NFTs are only ordered by their last transaction times. The same happens for **order by creation tim**e.
- A user can bookmark NFTs.
    - Bookmarked NFTs always come before NFTs that are not bookmarked.
    - Each bookmark can be removed individually.
    - There is a button that can be used to get rid of the existing bookmarks.
- When a user click a NFT card, it should link to `solscan.io/token/${nft_mint_public_key}`
- There is an undo button with which a user can undo the last change in order he caused. Undos can be done 4 times consecutively at most.
- The result of the order customization or bookmarks are persisted even after reopening the window.

### **How to submit the project**

- We will create you a private Git repository and you can use it to make commits while you work.

### **Notes**

- For testing, you can use the devnet addresses below. They are holders of multiple NFTs.
`E2APdVioPqt8nXFn2Qqu5TKfU2Zp9vB3WP49J7PADWDH`
`3sqgCvvQTqWpCydeQL9w1FwVFQpkkBM6eK1qa3WZD7Wg`
Check out [this](https://solscan.io/account/E2APdVioPqt8nXFn2Qqu5TKfU2Zp9vB3WP49J7PADWDH?cluster=devnet#tokenAccounts)

- Try make as many commits as possible whenever in question. Making only a single big commit can adversely affect the evaluation of your implementation.
- Do not copy and paste code that was written by others. However, you can use third party libraries if they are widely adopted libraries and considered as almost standards. (e.g. Django, ReactJS, Material UI)
- Do not share the task description with others. All rights are reserved by Konstellation.
- Do not share your implementation with others. If we find out your submission overlaps with subsequent submissions you may be held accountable for it.
- It is okay to submit your work with some of the requirements unsatisfied as far as you clearly denote what have been implemented and what not in `README.md`