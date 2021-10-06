import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MOMO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3f657c49031181aaf6c0dC2229DB16d319ED4B33',
    },
    tokenSymbol: 'MOMO',
    tokenAddresses: {
      97: '',
      56: '0xAFb2997fE9a99022E61C7e01B974E0e3D7704B02',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MOMO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xBDB9EeD8119405c4c0a9dC91e965AdC82246B2CC',
    },
    tokenSymbol: 'MOMO',
    tokenAddresses: {
      97: '',
      56: '0xAFb2997fE9a99022E61C7e01B974E0e3D7704B02',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MOMO',
    lpAddresses: {
      97: '',
      56: '0x3f657c49031181aaf6c0dC2229DB16d319ED4B33', // MOMO-BUSD LP
    },
    tokenSymbol: 'MOMO',
    tokenAddresses: {
      97: '',
      56: '0xAFb2997fE9a99022E61C7e01B974E0e3D7704B02',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
