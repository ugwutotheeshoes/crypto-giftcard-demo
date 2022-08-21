import React from 'react'
import axios from 'axios'
import express, {Request, Response} from 'express'
// import Stripe from 'stripe'
import fetch from 'node-fetch';

export const Server = () => {
  require('dotenv').config();
  const express = require("express");
  const app = express();
  const axios = require("axios");
  // const stripe = require("stripe")(process.env.STRIPE_KEY);
  const accessToken = process.env.RELOADLY_TOKEN
  const query = new URLSearchParams({
    size: '10',
    page: '1',
    productName: 'Amazon',
    countryCode: 'US',
    includeRange: 'true',
    includeFixed: 'true'
  }).toString();
  const url = `https://giftcards-sandbox.reloadly.com/products?${query}`
  async function run() {
  app.get("/giftcards", (req: Request, res: Response) => {
    axios
      .get(url, { Authorization: accessToken })
      .then((response: { data: any }) => {
        const giftCardsData = response.data;
        // giftCardsAmount = giftCardsData.fixedRecipientDenominations[0] * 100
        res.send({
          success: true,
          data: giftCardsData,
        });
      })
      .catch((error: any) => {
        res.send({
          success: false,
          data: error,
        });
      });
                // console.log(gif);
  });
}

  // async function getGiftCards() {
  //   // buju.loading = true;
  //   try {
  //     const returnValue = await fetch(url);
  //     const response = await returnValue.json();
  //     const results = response.data;
  //     console.log(results)
  //     buju = {
  //       productName: results.productName,
  //       loading: false,
  //     };
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

//   async function run() {
//     const query = new URLSearchParams({
//       size: '10',
//       page: '1',
//       productName: 'Amazon',
//       countryCode: 'US',
//       includeRange: 'true',
//       includeFixed: 'true'
//     }).toString();
//   const resp = await fetch(
//     `https://giftcards-sandbox.reloadly.com/products?${query}`,
//     {
//       method: 'GET',
//       headers: {
//         Authorization: 'eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNjcyNSIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjE2NzI1IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE2NjEwOTk1NzksImF6cCI6IjE2NzI1Iiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE2NjExODU5NzksImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImE1YTJmNDc3LWQ3YWYtNGViNC04ZTFjLTBmZjFhY2RiN2NlMCIsImlhdCI6MTY2MTA5OTU3OSwianRpIjoiYjZmNTVjMTEtZDdjMi00YzQ0LTk3Y2YtOWUzYmU3MTQ2NDMzIn0.9s__tasMjI_XP-0AnkfnipxBKSWAhdbo-b6g1RLrq1M'
//       }
//     }
//   );

//   const data = await resp.text();
//   console.log(data);
// }

// run();
  return (
    <button className="search_button" onClick={run}>SEARCH</button>
  )
}

// export {}
