import React from 'react'
import { FaBold } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from 'axios';
// import Form from "./Form"
// 
interface Crypto {
    body: string,
    headers: object,
    data: string
}

const getUsers = async () => {
    const productid = '16235'

    try {
        const { data, status } = await axios.post<Crypto>(
            `https://giftcards-sandbox.reloadly.com/orders`,
            {
                productId: 16235,
                countryCode: 'US',
                quantity: 1,
                unitPrice: 50,
                senderName: 'John Doe',
                recipientEmail: 'anyone@email.com',
            }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.RELOADLY_TOKEN}`
            },
        },
        )

        console.log(JSON.stringify(data, null, 4));
        console.log('response status is: ', status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error: ', error.message);
            return error.message
        } else {
            console.log('unexpected error: ', error);
            return error
        }
    }
}
export const Homepage = () => {
    return (
        <div className='crypto'>
            {/* <h2>Binance USD</h2> */}
            <div className="cards">
                <div className="bin">
                    <img
                        src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1661613925/binance_logo.png"
                        alt="The cover of Binance USD"
                    />
                    <div className="header">
                        <h2>Binance US</h2>
                        <p> US$50.00</p>
                    </div>
                </div>

                <Link to='/checkout' onClick={getUsers}>
                    buy now
                </Link>

            </div>
        </div>
    )
}
