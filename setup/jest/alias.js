const { TSConfigUtil } = require( '../../utils/tsconfig' )

module.exports.getAlias = ( { CURRENT_CLIENT } ) => {
  return TSConfigUtil.getAllAliases( { CURRENT_CLIENT } ).reduce( ( prev, next ) => {
    const { key, value } = next

    const keyAlias = `^${key}(?!-)(.*)$`
    const valueAlias = `<rootDir>/${value}$1`

    prev[keyAlias] = valueAlias

    return prev
  }, {} )
}
