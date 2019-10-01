var Metadata = artifacts.require('./Metadata.sol')
var RimbleToken = artifacts.require('./RimbleToken.sol')
var BigNumber = require('bignumber.js')
let gasPrice = 1000000000 // 1GWEI

let _ = '        '

contract('RimbleToken', async function(accounts) {
  let rimbleToken, metadata

  before(done => {
    ;(async () => {
      try {
        var totalGas = new BigNumber(0)

        // Deploy Metadata.sol
        metadata = await Metadata.new()
        var tx = await web3.eth.getTransactionReceipt(metadata.transactionHash)
        totalGas = totalGas.plus(tx.gasUsed)
        console.log(_ + tx.gasUsed + ' - Deploy Metadata')
        metadata = await Metadata.deployed()

        // Deploy RimbleToken.sol
        rimbleToken = await RimbleToken.new("RimbleToken", "RMBL", metadata.address)
        var tx = await web3.eth.getTransactionReceipt(rimbleToken.transactionHash)
        totalGas = totalGas.plus(tx.gasUsed)
        console.log(_ + tx.gasUsed + ' - Deploy RimbleToken')
        rimbleToken = await RimbleToken.deployed()

        console.log(_ + '-----------------------')
        console.log(_ + totalGas.toFormat(0) + ' - Total Gas')
        done()
      } catch (error) {
        console.error(error)
        done(false)
      }
    })()
  })

  describe('RimbleToken.sol', function() {
    it('should return metadata uints as strings', async function() {
      const URI = 'https://domain.com/metadata/'
  
      let tokenURI_uint = 12
      let tokenURI_result = await rimbleToken.tokenURI(tokenURI_uint)
      assert(
          URI + tokenURI_uint.toString() === tokenURI_result,
          'incorrect value "' + tokenURI_result + '" returned'
      )

      tokenURI_uint = 2345
      tokenURI_result = await rimbleToken.tokenURI(tokenURI_uint)
      assert(
        URI + tokenURI_uint.toString() === tokenURI_result,
        'incorrect value "' + tokenURI_result + '" returned'
      )

      tokenURI_uint = 23452345
      tokenURI_result = await rimbleToken.tokenURI(tokenURI_uint)
      assert(
        URI + tokenURI_uint.toString() === tokenURI_result,
        'incorrect value "' + tokenURI_result + '" returned'
      )

      tokenURI_uint = 134452
      tokenURI_result = await rimbleToken.tokenURI(tokenURI_uint)
      assert(
        URI + tokenURI_uint.toString() === tokenURI_result,
        'incorrect value "' + tokenURI_result + '" returned'
      )
    })

    it('should mint a rimbleToken from the owner account', async function() {
      // begin with zero balance
      let zeroBalance = await rimbleToken.totalSupply()
      assert(
        zeroBalance.toString(10) === '0',
        "Contract should have no rimbleTokens at this point"
      )
    
      // try minting a new rimbleToken and checking the totalSupply
      try {
        await rimbleToken.mint(accounts[0])
      } catch (error) {
        console.log(error)
        assert(false, error)
      }
      let totalSupply = await rimbleToken.totalSupply()
      assert(
        totalSupply.toString(10) === '1',
        "Contract should have balance of 1 instead it has " + totalSupply.toString(10)
      )
    
      // check that the balance increased to 1
      let ownerBalance = await rimbleToken.balanceOf(accounts[0])
      assert(
        ownerBalance.toString(10) === '1',
        "Owner account should have 1 rimbleToken instead it has " + ownerBalance.toString(10)
      )
    
      // make sure the token at index 0 has id 1
      let rimbleTokenId = await rimbleToken.tokenOfOwnerByIndex(accounts[0], "0")
      assert(
        rimbleTokenId.toString(10) === '1',
        "RimbleToken at index 0 is " + rimbleTokenId.toString(10)
      )
    })
  
  })
})
