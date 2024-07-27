// var { User } = require("../models");
// const Walllet = require("../apis/wallet.api");

// const checkOnlineWalletAccount = async function (user_id, accessToken) {

//     let checkWallet = await Walllet.getWallet(user_id, accessToken)
//         .then(async (response) => {
//             return {
//                 code: response.status,
//                 result: response.data.result
//             }
//         }).catch(async (err) => {
//             return {
//                 code: err.response.status,
//                 result: err.message
//             }
//         });

//     if (checkWallet.code == 200) {
//         // let balance = checkWallet.result.balance;
//         let publicAddress = checkWallet.result.publicAddress;
//         await User.update({
//             wallet_address: publicAddress
//             // wallet_balance_blc: balance
//         }, {
//             where: { id: user_id }
//         });
//         return { data: checkWallet, message: 'Your wallet is already created.', statusCode: 200 };
//     } else {
//         await Walllet.createWallet(user_id, accessToken)
//             .then(async (response) => {
//                 let walletDetail = response.data.result;
//                 let publicAddress = walletDetail.publicAddress;
//                 await User.update({
//                     wallet_address: publicAddress
//                 }, {
//                     where: { id: user_id }
//                 });
//                 return { data: response.data, message: 'Your wallet has been created.', statusCode: 200 };
//             }).catch(async (err) => {
//                 return { wallerErrorMessage: err.message, message: 'Something went wrong.', statusCode: 400 };
//             });
//     }
// }

// const transactionSend = async function (data, accessToken) {
//     return await Walllet.transaction(data, accessToken)
//         .then(response => {
//             return { data: response.data.result, message: 'Transaction has been successfully.', statusCode: 200 };
//         }).catch(err => {
//             return { wallerErrorMessage: err.message, message: 'Something went wrong.', statusCode: 400 };
//         });
// }


// const getprivatekey = async function (data, accessToken) {
//     return await Walllet.getprivatekey(data, accessToken)
//         .then(response => {
//             return { data: response.data.result, message: 'Private Key has been successfully.', statusCode: 200 };
//         }).catch(err => {
//             return { wallerErrorMessage: err.message, message: 'Something went wrong.', statusCode: 400 };
//         });
// }

// const fetchTransactionBalanceOf = async function (data, accessToken) {
//     return await Walllet.transactionContractCall(data, accessToken)
//         .then(response => {
//             return { data: response.data.result, message: 'Transaction has been successfully.', statusCode: 200 };
//         }).catch(err => {
//             return { wallerErrorMessage: err.message, message: 'Something went wrong.', statusCode: 400 };
//         });
// }

// module.exports = {
//     checkOnlineWalletAccount,
//     transactionSend,
//     getprivatekey,
//     fetchTransactionBalanceOf
// }