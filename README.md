# Leny-Space

Leverages blockchain technology and decentralization principles on Lens Protocol and Magic to create a more secure, private, and user-controlled social networking experience.
![Screenshot from 2023-10-08 19-40-55](https://github.com/jerrymusaga/leny-space/assets/94830918/abc117ab-f538-4ec7-8323-69646a34cff4)

# [Video Link](https://youtu.be/LnqY9WvBq24)

## Summary of Project with Screenshots

1. # Passwordless Login with Magic

   ![Screenshot from 2023-10-08 19-15-35](https://github.com/jerrymusaga/leny-space/assets/94830918/4cc7e9b3-13b0-46aa-a1d7-d63b3664202c)
   A user logs in with Email address without needing to provide a password without jeopardizing security. Onboarding of users into web3 will be massive with this type of authentication which doesnt require the need to have a password
   ![Screenshot from 2023-10-08 20-05-39](https://github.com/jerrymusaga/leny-space/assets/94830918/c89e0c49-8ab2-4bda-aeda-cb18ece4e402)
   After authorization is successful, the user gets redirected to the main page of the application
   ![Screenshot from 2023-10-08 20-25-32](https://github.com/jerrymusaga/leny-space/assets/94830918/e0323211-7bfc-4766-85c6-c6efc531645f)
   ![Screenshot from 2023-10-08 20-26-35](https://github.com/jerrymusaga/leny-space/assets/94830918/01e4248c-52f8-4366-a47f-9bde091b7f56)

2. # Integrating Lens for a decentralized social feeling

   - Connect Wallet address to the application either with MetaMask, Coinbase or WalletConnect. I used the wallet connect plugin from **ThirdWeb SDK** for the functionality
     ![Screenshot from 2023-10-08 20-54-55](https://github.com/jerrymusaga/leny-space/assets/94830918/820fe1a3-1bc2-4500-9194-5745b7e18bb9)

   - If you on the wrong network, you will have a button to switch to Polygon Mainnet Network.
     ![Screenshot from 2023-10-08 21-29-22](https://github.com/jerrymusaga/leny-space/assets/94830918/216bbd60-02cd-4697-8d4b-1a016515eccf)

   - After connecting the wallet address, you will be prompt to **Sign in with Lens** before you can perform any transaction on the application. This signing of message generates a challenge gotten from the **Lens API** to sign in. After sign in, you get an access and refresh tokens which gets stored in the local storage and lasts about 30minutes.
     ![Screenshot from 2023-10-08 21-49-20](https://github.com/jerrymusaga/leny-space/assets/94830918/590e99da-f6aa-4cb6-8f61-b59c22824fb8)

   - After signing in, if you have a profile created on Lens, your profile handle will show but if you do not have a profile, a link to [create profile on lens](https://claim.lens.xyz/) will be seen instead. Creating of profile on this application will be the next goal so as to avoid making users go to different website to do task for easier UX.
     ![Screenshot from 2023-10-08 20-52-48](https://github.com/jerrymusaga/leny-space/assets/94830918/407c067b-9224-4f6c-8ff3-981e5dd11bc2)

   - Following a user is an impressive feature from the LensHub API and smart contract in which users could earn based on a follow. In this release, users follow others after signing in and sending signatures to the smart contract after providing certain fields like the profile ID.
     ![Screenshot from 2023-10-08 22-11-40](https://github.com/jerrymusaga/leny-space/assets/94830918/e0ec5b99-9924-4539-b117-0572dc7846b4)
     ![Screenshot from 2023-10-08 22-12-09](https://github.com/jerrymusaga/leny-space/assets/94830918/aa647d63-7e95-47dc-9fbc-f62aee81a207)
     ![Screenshot from 2023-10-08 22-12-36](https://github.com/jerrymusaga/leny-space/assets/94830918/da6e8216-ffd2-4228-8472-f60321d7268e)

   - Authenticated users who have profiles created can navigate to their own profile and edit some profile fields, just like in web2 applications.
     ![Screenshot from 2023-10-08 22-02-03](https://github.com/jerrymusaga/leny-space/assets/94830918/3d224a08-c2de-4033-83e2-cb109baebd8a)

   - Users can as well create post with several fields like title, image, description and content. The image is the required field, which gets stored in IPFS. The user needs to be signed in with lens to be able to perform this.

3. # Future Plans

   - Improve massively the UI UX of the application
   - Explore more from LensHub and create logics from the public API like rewarding users based on certain conditions.
   - Work on the comment and mirror sections to make it more like a modern social media.
   - Integrate NFTs and see where we go from there

4. # Technologies Used

   - Javascript
   - Typescript
   - NextJS
   - React-Query
   - ThirdWeb
   - GraphQL
   - Lens
   - Magic

5. # Run project locally
   - Need to have node and git installed
   - git clone `git@github.com:jerrymusaga/leny-space.git`
   - cd leny-space
   - yarn
   - create an .env environment and get the keys from (Magic)[https://magic.link/docs/home/welcome]
   - yarn run dev
