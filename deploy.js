const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'avocado tail please around gentle carpet tissue shove robot relax chair awake',
    'https://rinkeby.infura.io/v3/47a0e2cbbe91445c83c85e45db67b090'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log('Attempting to deploy from accounts', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas : '1000000', from: accounts[0] })

    console.log('Contract deployed to', result.options.address)
    provider.engine.stop()
}

deploy()