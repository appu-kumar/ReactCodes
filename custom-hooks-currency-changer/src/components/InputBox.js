
export default function InputBox({
   
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions=[],
        selectCurrency,
        amountDisable=false,
        currencyDisable=false

}){


        return (
             <div className='m-5 bg-white flex justify-between'>
                <div className='flex flex-col space-y-10'>
                  <label htmlFor='label'>{label}</label>
                  <input type='number'
                    id='label'
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                  
                  />
                </div>  

                <div className='flex flex-col space-y-10'>
                  <label htmlFor='label'>CurrencyType</label>
                  <select value={selectCurrency}
                  disabled={currencyDisable}
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                  >
                  {currencyOptions.map((currency)=>(<option key={currency} value={currency}>${currency}</option>))}
                  </select>
                </div> 
             </div>
        )
}