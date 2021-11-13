(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{24:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"EthereumWave","sourceName":"contracts/EthereumWave.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"internalType":"struct EthereumWave.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"waves","outputs":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"stateMutability":"view","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601581526020017f5468697320697320457468657265756d205761766500000000000000000000008152506200005560201b620005fb1760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b61104b80620001f96000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063291bcab31461005c578063449d46c01461007a5780639a2cdc0814610096578063bd43a908146100b4578063c781267a146100d2575b600080fd5b610064610104565b6040516100719190610ca6565b60405180910390f35b610094600480360381019061008f9190610915565b61010a565b005b61009e61037d565b6040516100ab9190610ca6565b60405180910390f35b6100bc6103c8565b6040516100c99190610bc2565b60405180910390f35b6100ec60048036038101906100e79190610956565b610519565b6040516100fb93929190610b84565b60405180910390f35b60005481565b600160008082825461011c9190610d88565b925050819055506101626040518060400160405280600d81526020017f257320686173207761766564210000000000000000000000000000000000000081525033610694565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102219291906107f5565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f6728ef66814a55b797863bf8ffcd954b19cbca4ed4f0e6cf04c980705fd82c368242604051610276929190610c36565b60405180910390a26000655af3107a40009050478111156102cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c390610c66565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516102f290610b6f565b60006040518083038185875af1925050503d806000811461032f576040519150601f19603f3d011682016040523d82523d6000602084013e610334565b606091505b5050905080610378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036f90610c86565b60405180910390fd5b505050565b60006103c06040518060400160405280601781526020017f5765206861766520256420746f74616c20776176657321000000000000000000815250600054610730565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561051057838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461047590610e5c565b80601f01602080910402602001604051908101604052809291908181526020018280546104a190610e5c565b80156104ee5780601f106104c3576101008083540402835291602001916104ee565b820191906000526020600020905b8154815290600101906020018083116104d157829003601f168201915b50505050508152602001600282015481525050815260200190600101906103ec565b50505050905090565b6001818154811061052957600080fd5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461057290610e5c565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90610e5c565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b5050505050908060020154905083565b6106918160405160240161060f9190610be4565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107cc565b50565b61072c82826040516024016106aa929190610c06565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107cc565b5050565b6107c88282604051602401610746929190610c36565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107cc565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461080190610e5c565b90600052602060002090601f016020900481019282610823576000855561086a565b82601f1061083c57805160ff191683800117855561086a565b8280016001018555821561086a579182015b8281111561086957825182559160200191906001019061084e565b5b509050610877919061087b565b5090565b5b8082111561089457600081600090555060010161087c565b5090565b60006108ab6108a684610ce6565b610cc1565b9050828152602081018484840111156108c357600080fd5b6108ce848285610e1a565b509392505050565b600082601f8301126108e757600080fd5b81356108f7848260208601610898565b91505092915050565b60008135905061090f81610ffe565b92915050565b60006020828403121561092757600080fd5b600082013567ffffffffffffffff81111561094157600080fd5b61094d848285016108d6565b91505092915050565b60006020828403121561096857600080fd5b600061097684828501610900565b91505092915050565b600061098b8383610b01565b905092915050565b61099c81610dde565b82525050565b6109ab81610dde565b82525050565b60006109bc82610d27565b6109c68185610d4a565b9350836020820285016109d885610d17565b8060005b85811015610a1457848403895281516109f5858261097f565b9450610a0083610d3d565b925060208a019950506001810190506109dc565b50829750879550505050505092915050565b6000610a3182610d32565b610a3b8185610d66565b9350610a4b818560208601610e29565b610a5481610f4c565b840191505092915050565b6000610a6a82610d32565b610a748185610d77565b9350610a84818560208601610e29565b610a8d81610f4c565b840191505092915050565b6000610aa5602a83610d77565b9150610ab082610f5d565b604082019050919050565b6000610ac8602983610d77565b9150610ad382610fac565b604082019050919050565b6000610aeb600083610d5b565b9150610af682610ffb565b600082019050919050565b6000606083016000830151610b196000860182610993565b5060208301518482036020860152610b318282610a26565b9150506040830151610b466040860182610b51565b508091505092915050565b610b5a81610e10565b82525050565b610b6981610e10565b82525050565b6000610b7a82610ade565b9150819050919050565b6000606082019050610b9960008301866109a2565b8181036020830152610bab8185610a5f565b9050610bba6040830184610b60565b949350505050565b60006020820190508181036000830152610bdc81846109b1565b905092915050565b60006020820190508181036000830152610bfe8184610a5f565b905092915050565b60006040820190508181036000830152610c208185610a5f565b9050610c2f60208301846109a2565b9392505050565b60006040820190508181036000830152610c508185610a5f565b9050610c5f6020830184610b60565b9392505050565b60006020820190508181036000830152610c7f81610a98565b9050919050565b60006020820190508181036000830152610c9f81610abb565b9050919050565b6000602082019050610cbb6000830184610b60565b92915050565b6000610ccb610cdc565b9050610cd78282610e8e565b919050565b6000604051905090565b600067ffffffffffffffff821115610d0157610d00610f1d565b5b610d0a82610f4c565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610d9382610e10565b9150610d9e83610e10565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dd357610dd2610ebf565b5b828201905092915050565b6000610de982610df0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610e47578082015181840152602081019050610e2c565b83811115610e56576000848401525b50505050565b60006002820490506001821680610e7457607f821691505b60208210811415610e8857610e87610eee565b5b50919050565b610e9782610f4c565b810181811067ffffffffffffffff82111715610eb657610eb5610f1d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f5472616e73616374696f6e2063616e63656c6c65642e20496e7375666669636960008201527f656e742066756e64732e00000000000000000000000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177207061796d656e742066726f6d2060008201527f636f6e74726163742e0000000000000000000000000000000000000000000000602082015250565b50565b61100781610e10565b811461101257600080fd5b5056fea26469706673582212200670437a27f99867dd1794e919c327c76d2a9e3e75ffb5703399fe44cf36003064736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100575760003560e01c8063291bcab31461005c578063449d46c01461007a5780639a2cdc0814610096578063bd43a908146100b4578063c781267a146100d2575b600080fd5b610064610104565b6040516100719190610ca6565b60405180910390f35b610094600480360381019061008f9190610915565b61010a565b005b61009e61037d565b6040516100ab9190610ca6565b60405180910390f35b6100bc6103c8565b6040516100c99190610bc2565b60405180910390f35b6100ec60048036038101906100e79190610956565b610519565b6040516100fb93929190610b84565b60405180910390f35b60005481565b600160008082825461011c9190610d88565b925050819055506101626040518060400160405280600d81526020017f257320686173207761766564210000000000000000000000000000000000000081525033610694565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102219291906107f5565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f6728ef66814a55b797863bf8ffcd954b19cbca4ed4f0e6cf04c980705fd82c368242604051610276929190610c36565b60405180910390a26000655af3107a40009050478111156102cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c390610c66565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516102f290610b6f565b60006040518083038185875af1925050503d806000811461032f576040519150601f19603f3d011682016040523d82523d6000602084013e610334565b606091505b5050905080610378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036f90610c86565b60405180910390fd5b505050565b60006103c06040518060400160405280601781526020017f5765206861766520256420746f74616c20776176657321000000000000000000815250600054610730565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561051057838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461047590610e5c565b80601f01602080910402602001604051908101604052809291908181526020018280546104a190610e5c565b80156104ee5780601f106104c3576101008083540402835291602001916104ee565b820191906000526020600020905b8154815290600101906020018083116104d157829003601f168201915b50505050508152602001600282015481525050815260200190600101906103ec565b50505050905090565b6001818154811061052957600080fd5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461057290610e5c565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90610e5c565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b5050505050908060020154905083565b6106918160405160240161060f9190610be4565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107cc565b50565b61072c82826040516024016106aa929190610c06565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107cc565b5050565b6107c88282604051602401610746929190610c36565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107cc565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461080190610e5c565b90600052602060002090601f016020900481019282610823576000855561086a565b82601f1061083c57805160ff191683800117855561086a565b8280016001018555821561086a579182015b8281111561086957825182559160200191906001019061084e565b5b509050610877919061087b565b5090565b5b8082111561089457600081600090555060010161087c565b5090565b60006108ab6108a684610ce6565b610cc1565b9050828152602081018484840111156108c357600080fd5b6108ce848285610e1a565b509392505050565b600082601f8301126108e757600080fd5b81356108f7848260208601610898565b91505092915050565b60008135905061090f81610ffe565b92915050565b60006020828403121561092757600080fd5b600082013567ffffffffffffffff81111561094157600080fd5b61094d848285016108d6565b91505092915050565b60006020828403121561096857600080fd5b600061097684828501610900565b91505092915050565b600061098b8383610b01565b905092915050565b61099c81610dde565b82525050565b6109ab81610dde565b82525050565b60006109bc82610d27565b6109c68185610d4a565b9350836020820285016109d885610d17565b8060005b85811015610a1457848403895281516109f5858261097f565b9450610a0083610d3d565b925060208a019950506001810190506109dc565b50829750879550505050505092915050565b6000610a3182610d32565b610a3b8185610d66565b9350610a4b818560208601610e29565b610a5481610f4c565b840191505092915050565b6000610a6a82610d32565b610a748185610d77565b9350610a84818560208601610e29565b610a8d81610f4c565b840191505092915050565b6000610aa5602a83610d77565b9150610ab082610f5d565b604082019050919050565b6000610ac8602983610d77565b9150610ad382610fac565b604082019050919050565b6000610aeb600083610d5b565b9150610af682610ffb565b600082019050919050565b6000606083016000830151610b196000860182610993565b5060208301518482036020860152610b318282610a26565b9150506040830151610b466040860182610b51565b508091505092915050565b610b5a81610e10565b82525050565b610b6981610e10565b82525050565b6000610b7a82610ade565b9150819050919050565b6000606082019050610b9960008301866109a2565b8181036020830152610bab8185610a5f565b9050610bba6040830184610b60565b949350505050565b60006020820190508181036000830152610bdc81846109b1565b905092915050565b60006020820190508181036000830152610bfe8184610a5f565b905092915050565b60006040820190508181036000830152610c208185610a5f565b9050610c2f60208301846109a2565b9392505050565b60006040820190508181036000830152610c508185610a5f565b9050610c5f6020830184610b60565b9392505050565b60006020820190508181036000830152610c7f81610a98565b9050919050565b60006020820190508181036000830152610c9f81610abb565b9050919050565b6000602082019050610cbb6000830184610b60565b92915050565b6000610ccb610cdc565b9050610cd78282610e8e565b919050565b6000604051905090565b600067ffffffffffffffff821115610d0157610d00610f1d565b5b610d0a82610f4c565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610d9382610e10565b9150610d9e83610e10565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dd357610dd2610ebf565b5b828201905092915050565b6000610de982610df0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610e47578082015181840152602081019050610e2c565b83811115610e56576000848401525b50505050565b60006002820490506001821680610e7457607f821691505b60208210811415610e8857610e87610eee565b5b50919050565b610e9782610f4c565b810181811067ffffffffffffffff82111715610eb657610eb5610f1d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f5472616e73616374696f6e2063616e63656c6c65642e20496e7375666669636960008201527f656e742066756e64732e00000000000000000000000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177207061796d656e742066726f6d2060008201527f636f6e74726163742e0000000000000000000000000000000000000000000000602082015250565b50565b61100781610e10565b811461101257600080fd5b5056fea26469706673582212200670437a27f99867dd1794e919c327c76d2a9e3e75ffb5703399fe44cf36003064736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},38:function(f,e,b){f.exports=b(58)},43:function(f,e,b){},45:function(f,e,b){},47:function(f,e){},58:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),c=b(32),n=b.n(c),r=(b(43),b(2)),s=b.n(r),d=b(12),o=b(22),i=(b(45),b(19)),l=b(24);function m(){var f=Object(a.useState)(),e=Object(o.a)(f,2),b=e[0],c=e[1],n=Object(a.useState)([]),r=Object(o.a)(n,2),m=r[0],u=r[1],p=Object(a.useState)("Type something..."),v=Object(o.a)(p,2),y=v[0],w=v[1],h=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a,t;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=4;break}return f.abrupt("return");case 4:return f.next=6,b.request({method:"eth_accounts"});case 6:0!==(a=f.sent).length&&(t=a[0],console.log("Ethereum account connected:",t),c(t)),f.next=13;break;case 10:f.prev=10,f.t0=f.catch(0),console.error(f.t0);case 13:case"end":return f.stop()}}),f,null,[[0,10]])})));return function(){return f.apply(this,arguments)}}(),g=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,e=window,(b=e.ethereum)||alert("You must install MetaMask on your browser to use this app. Checkout https://metamask.io/ to get MetaMask"),f.next=5,b.request({method:"eth_requestAccounts"});case 5:a=f.sent,console.log("Wallet connected",a[0]),c(a[0]),f.next=13;break;case 10:f.prev=10,f.t0=f.catch(0),console.error(f.t0);case 13:case"end":return f.stop()}}),f,null,[[0,10]])})));return function(){return f.apply(this,arguments)}}(),E=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a,t,c,n,r,d;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return e=window,(b=e.ethereum)||console.error("Ethereum object not available. Get MetaMask"),a="0x5FbDB2315678afecb367f032d93F642f64180aa3",t=l.abi,f.prev=4,c=new i.a.providers.Web3Provider(b),f.next=8,c.getSigner();case 8:return n=f.sent,r=new i.a.Contract(a,t,n),f.next=12,r.wave(y);case 12:d=f.sent,console.log("Wave Txn Hash:",d.hash),f.next=19;break;case 16:f.prev=16,f.t0=f.catch(4),console.log("error:",f.t0);case 19:case"end":return f.stop()}}),f,null,[[4,16]])})));return function(){return f.apply(this,arguments)}}(),x=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a,t,c,n,r,d;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return e=window,(b=e.ethereum)||console.error("Ethereum object not available. Get MetaMask"),a="0x5FbDB2315678afecb367f032d93F642f64180aa3",t=l.abi,f.prev=4,c=new i.a.providers.Web3Provider(b),f.next=8,c.getSigner();case 8:return n=f.sent,r=new i.a.Contract(a,t,n),f.next=12,r.getAllWaves();case 12:return d=f.sent,f.abrupt("return",d);case 16:f.prev=16,f.t0=f.catch(4),console.log("error:",f.t0);case 19:case"end":return f.stop()}}),f,null,[[4,16]])})));return function(){return f.apply(this,arguments)}}();Object(a.useEffect)((function(){h(),function(){var f=Object(d.a)(s.a.mark((function f(){var e,b;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,x();case 2:e=f.sent,b=e&&e.map((function(f){return{address:f.waver,message:f.message,timeStamp:new Date(1e3*f.timeStamp)}})),u(b);case 5:case"end":return f.stop()}}),f)})));return function(){return f.apply(this,arguments)}}()()}),[]);var N=m&&m.map((function(f,e){return t.a.createElement("li",{key:"".concat(f.address,"-").concat(e),className:"wave-item"},t.a.createElement("article",{className:"wave-content"},t.a.createElement("section",{className:"wave-message"},t.a.createElement("span",{className:"wave-text"},f.message)),t.a.createElement("section",{className:"wave-address"},t.a.createElement("span",{className:"wave-label"},"Sender:"),t.a.createElement("span",{className:"wave-text"},f.address)),t.a.createElement("section",{className:"wave-time-stamp"},t.a.createElement("span",{className:"wave-label"},"Date:"),t.a.createElement("span",{className:"wave-text"},f.timeStamp.toLocaleString()))))}));return t.a.createElement("div",{className:"main-container"},t.a.createElement("div",{className:"data-container"},t.a.createElement("div",{className:"header"},t.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udc4b Hey, I'm George")),t.a.createElement("section",{className:"bio-container"},t.a.createElement("div",{className:"bio"},"A frontend developer based in Berlin, Germany."),t.a.createElement("div",{className:"bio"},'Connect your wallet then push the button "Wave at me" button to wave at me. Your wave will live on the Ethereum blockchain, forever',t.a.createElement("span",{role:"img","aria-label":"emoji",className:"emoji"},"\ud83e\udd2f")),t.a.createElement("div",{className:"waves-count"},"Wave count: ",m&&m.length>0?m.length:0,m&&m.length>0?t.a.createElement("span",{role:"img","aria-label":"emoji",className:"emoji"},"\ud83e\udd73"):t.a.createElement("span",{role:"img","aria-label":"emoji",className:"emoji"},"\ud83e\udd7a"))),t.a.createElement("form",{className:"form"},t.a.createElement("label",{className:"form-label"},t.a.createElement("h3",{className:"form-headline"},"Send a wave",t.a.createElement("span",{role:"img","aria-label":"emoji",className:"emoji"},"\ud83d\udc47\ud83c\udffd"),". Send it with text!"),t.a.createElement("textarea",{className:"comment-text-box",name:"comment",rows:"10",cols:"50",onChange:function(f){w(f.target.value)},placeholder:y}))),t.a.createElement("div",{className:"button-group"},t.a.createElement("button",{className:"wave-button",onClick:E},"Wave at Me"),!b&&t.a.createElement("button",{className:"wave-button",onClick:g},"Connect Wallet"))),t.a.createElement("ul",{className:"wave-list"},N))}n.a.render(t.a.createElement(m,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9b3b44b9.chunk.js.map