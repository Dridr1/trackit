import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function ThreeDotsLoader() {
    return (
         <ThreeDots type="ThreeDots" color="#FFFFFF" height={40} width={70} />
    )
}
