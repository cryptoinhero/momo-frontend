import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.momoprotocol.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.momoprotocol.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xafb2997fe9a99022e61c7e01b974e0e3d7704b02',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/momo-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/momo-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0xafb2997fe9a99022e61c7e01b974e0e3d7704b02',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MomoProtocol762/',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://momoprotocol-1.gitbook.io/momoprotocol/',
      // },
      {
        label: 'Blog',
        href: 'https://medium.com/@momoprotocol',
      },
    ],
  },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: 'https://github.com/MomoProtocol762/momoprotocol.finance/blob/main/audits/audit.pdf',
  },
  {
    label: 'Bsccsan',
    icon: 'BscScanIcon',
    href: 'https://bscscan.com/token/0xafb2997fe9a99022e61c7e01b974e0e3d7704b02',
  },
  {
    label: 'CoinMarketCap',
    icon: 'CoinMarketCapIcon',
    href: 'https://coinmarketcap.com/currencies/momo-protocol/',
  },
  {
    label: 'Coingecko',
    icon: 'CoinGeckoIcon',
    href: 'https://www.coingecko.com/en/coins/momo-protocol',
  },
  {
    label: 'CoinTiger',
    icon: 'CoinTigerIcon',
    href: 'https://www.cointiger.com/en-us/#/trade_center?coin=momo_usdt',
  },
  {
    label: 'Hotbit',
    icon: 'HotBitIcon',
    href: 'https://www.hotbit.io/exchange?symbol=MOMO_USDT',
  },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/momo-finance',
  // },
]

export default config
