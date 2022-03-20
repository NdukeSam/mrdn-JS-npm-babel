import str from './models/Search';

import {add, multiply, ID} from './views/searchView';

console.log(`Using imported functions! ${add(ID, 2)} & ${multiply(3, 6)}. ${str}`);