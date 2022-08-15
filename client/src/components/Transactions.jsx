import React, { useContext } from 'react';
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { shortenAddress } from '../utils/shortenAddress';
import { TransactionContext } from '../context/TransactionContext';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword })

    return (
        <div className='bg-[#181918] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col  rounded-md hover:shadow-2xl
        '>
            <div className='flex flex-col items-center w-full mt-3'>
                <div className='w-full mb-6 flex items-center flex-col gap-2'>
                    <div className=' flex flex-col items-center py-4 mb-2 mt-2 px-5 bg-slate-500/20 w-full'>
                        <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                            <p className='text-white text-base my-2'>
                                {shortenAddress(addressFrom)}
                            </p>
                        </a>
                        <div>
                            <BsFillArrowDownCircleFill fontSize={23} color="#fff" />
                        </div>
                        <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                            <p className='text-white text-base my-2'>
                                {shortenAddress(addressTo)}
                            </p>
                        </a></div>
                    <p className='text-[#f2a594] text-base font-semibold mt-2 bg-slate-500/20 p-1.5 w-full text-center'>
                        {amount} ETH
                    </p>
                    {message && (
                        <>
                            <br />
                            <p className='text-white text-base'>
                                <span className='text-white text-base font-semibold'>{message}</span>
                            </p>
                        </>
                    )}
                </div>
                <img
                    src={gifUrl || url}
                    alt='gif'
                    className='w-full h-64 2xl:h-96 shadow-lg object-cover'
                />

                <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
                    <p className='text-[#d6b549] font-bold'>
                        {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}


const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-welcome'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'>
                        Latest Transactions
                    </h3>
                )
                    : (
                        <h3 className='text-white text-3xl text-center my-2'>
                            Connect your account to see latest Transactions
                        </h3>
                    )
                }
                <div className='flex flex-wrap justify-center items-center mt-10'>
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transactions;