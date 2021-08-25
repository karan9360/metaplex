export type NftCandyMachineIDL = {"version":"0.0.0","name":"nft_candy_machine","instructions":[{"name":"initializeConfig","accounts":[{"name":"config","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"},{"name":"uuid","type":"string"},{"name":"symbol","type":"string"},{"name":"sellerFeeBasisPoints","type":"u16"},{"name":"creators","type":{"option":{"vec":{"defined":"Creator"}}}},{"name":"maxNumberOfLines","type":"u32"}]},{"name":"addConfigLines","accounts":[{"name":"config","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true}],"args":[{"name":"index","type":"u32"},{"name":"configLines","type":{"vec":{"defined":"ConfigLine"}}}]},{"name":"initializeCandyMachine","accounts":[{"name":"candyMachine","isMut":true,"isSigner":false},{"name":"wallet","isMut":false,"isSigner":false},{"name":"config","isMut":false,"isSigner":false},{"name":"authority","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"},{"name":"price","type":"u64"},{"name":"itemsAvailable","type":"u64"},{"name":"goLiveDate","type":{"option":"i64"}}]}],"accounts":[{"name":"candyMachine","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"wallet","type":"publicKey"},{"name":"tokenMint","type":{"option":"publicKey"}},{"name":"config","type":"publicKey"},{"name":"price","type":"u64"},{"name":"itemsAvailable","type":"u64"},{"name":"itemsRedeemed","type":"u64"},{"name":"goLiveDate","type":{"option":"i64"}},{"name":"bump","type":"u8"}]}},{"name":"config","type":{"kind":"struct","fields":[{"name":"bump","type":"u8"},{"name":"authority","type":"publicKey"},{"name":"uuid","type":"string"},{"name":"symbol","type":"string"},{"name":"sellerFeeBasisPoints","type":"u16"},{"name":"creators","type":{"option":{"vec":{"defined":"Creator"}}}},{"name":"maxNumberOfLines","type":"u32"}]}}],"types":[{"name":"ConfigLine","type":{"kind":"struct","fields":[{"name":"name","type":"string"},{"name":"uri","type":"string"},{"name":"isMutable","type":"bool"}]}},{"name":"Creator","type":{"kind":"struct","fields":[{"name":"address","type":"publicKey"},{"name":"verified","type":"bool"},{"name":"share","type":"u8"}]}}],"errors":[{"code":300,"name":"IncorrectOwner","msg":"Account does not have correct owner!"},{"code":301,"name":"Uninitialized","msg":"Account is not initialized!"},{"code":302,"name":"MintMismatch","msg":"Mint Mismatch!"},{"code":303,"name":"IndexGreaterThanLength","msg":"Index greater than length!"},{"code":304,"name":"ConfigMustHaveAtleastOneEntry","msg":"Config must have atleast one entry!"},{"code":305,"name":"NumericalOverflowError","msg":"Numerical overflow error!"},{"code":306,"name":"TooManyCreators","msg":"Can only provide up to 4 creators to candy machine (because candy machine is one)!"},{"code":307,"name":"ConfigUuidMustBeExactly6Length","msg":"Config uuid must be exactly of 6 length"}]};
import { IdlAccounts } from '@project-serum/anchor';



  

export type CandyMachine = IdlAccounts<NftCandyMachineIDL>["candyMachine"]

export type Config = IdlAccounts<NftCandyMachineIDL>["config"]
  
          