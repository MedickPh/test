import React from "react"
import { TProd } from "../context/ProductContext"
interface Params {
    content: TProd
}
export const ItemList:React.FC<Params> = ({content}) => {
    return(
        <div className="list-item-product">
            <div className="id-wrapper">
                <span>{content.id}</span>
            </div>
            <div className="name-wrapper">
                <span>{content.name}</span>
            </div>
            <div className="btn-wrapper">
                <button type="button">Update</button>
                <button type="button">Remove</button>
            </div>
        </div>
    )
}