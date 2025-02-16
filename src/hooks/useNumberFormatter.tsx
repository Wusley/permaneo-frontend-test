const useNumberFormatter = () => {
  const formatCurrency = ( value ) => {
    return new Intl.NumberFormat( 'pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    } ).format( value )
  }

  return formatCurrency
}

export default useNumberFormatter
