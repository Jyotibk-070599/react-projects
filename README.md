# npm init --> Create package.json
- package.json -> It is configuration for npm , It keeps the track of what version of the package is installed into our system.

^ (caret)--> It will install Minor versions automatically.
~ (tilde)--> It will install Major versions automatically.


# npm install -D parcel --> Creates the package-lock.json
- package-lock.json -> It keeps the track of exact version of the  installed dependencies.

# Parcel
- Creates Dev Buid 
- Creates local server 
- HMR - Hot Module Replacement (Automatically refersh the Page )
- Parsel uses the File Watching Algorithm -> Written in C++
- Caching --> Faster Builds
- Parsel will do Image Optimization 
- Minification of the files for production env
- Bundling the files
- Compressing the files
- Consistenat Hashing
- code spitting
- Diffrential Bundling -> to support Older Browsers
- Diagnostic
- Error Handling
- It create Different build for Dev and Prod
- HTTPs
- Tree Shaking - Removing unused code
- diffrent dev amd prod bundles


# Pickle App structure
/*
 * App Component
 *   - Header Component
 *      -Logo
 *      -Nav items - menu
 *      -Nav profile ,cart, search
 *  - Body Component
 *      -Heading
 *      - Pickle container
 *      -pickle card
 * -Footer Component
 *     -copyright
 *     -links
 *     -address
 *     -contact
 * 
 */

 ----------------------------------------------
 There are Two types of Export/Import
 - Default Export/Import
    export default <ComponentName>
    import <ComponentName> from "Path"

 - Named Export/Import
    export const ComponentName = ()
    import {ComponentName} from "Path"

------------------------------------------------
