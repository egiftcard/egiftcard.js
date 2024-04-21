import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 29386,
  "explorers": [],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "https://images.ctfassets.net/9bazykntljf6/62CceHSYsRS4D9fgDSkLRB/877cb8f26954e1743ff535fd7fdaf78f/avacloud-placeholder.svg",
    "width": 256,
    "height": 256,
    "format": "svg"
  },
  "infoURL": "https://avacloud.io",
  "name": "QaUser4106 Testnet",
  "nativeCurrency": {
    "name": "QaUser4106 Testnet Token",
    "symbol": "BBS",
    "decimals": 18
  },
  "networkId": 29386,
  "redFlags": [],
  "rpc": [
    "https://29386.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
  ],
  "shortName": "QaUser4106 Testnet",
  "slug": "qauser4106-testnet",
  "testnet": true
} as const satisfies Chain;