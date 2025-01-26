
export const Balance = ({ value }) => {
    return <div className="flex ">
        <div className="font-bold text-3xl text-green-500 item-center">
            Your balance  
        </div>
        <div className="font-semibold ml-20 mt-1 text-2xl text-blue-500">
        ₹ {value}
        </div>
    </div>
}