import { composeBundles } from 'redux-bundler'

import ipfsBundle from './ipfs'
import exploreBundle from './explore'
import appIdle from './app-idle'
import peersBundle from './peers'
import routesBundle from './routes'
import redirectsBundle from './redirects'
import filesBundle from './files'

export default composeBundles(
  appIdle({idleTimeout: 5000}),
  ipfsBundle,
  exploreBundle,
  peersBundle,
  routesBundle,
  redirectsBundle,
  filesBundle
)