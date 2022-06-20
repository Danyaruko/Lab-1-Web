import React, { useEffect, useState } from "react";
import '../style/catalog-body.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

function CatalogBody() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [filter, setFilter] = useState([])
    const [baskets, setBaskets] = useState([])
    const [loading, setLoading] = useState(true)

    const handleSearchChange = event => {
        setSearch(event.target.value)
    }

    const handleFitlerChange = event => {
        setFilter(event.target.value)
    }
    useEffect(() => {
        setFilter('all')
    }, [])
    
    useEffect(() => {
        const searchResults = baskets.filter(basket =>
            Object.values(basket).join(' ').toLowerCase().includes(search)
        )
        setResults(searchResults)
    }, [search, filter, baskets])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)  
        axios.get(`http://localhost:3036/catalog/filters/${filter}`).then((response) => {
            console.log(filter)
            setBaskets(response.data) 
        })
    }, [filter])
   
    return (
        <div className="catalog">
            <div className="filter-lists">
                <input type="text" className="filter-button" onChange={handleSearchChange} value={search} placeholder="Search baskets" />
                <select className="filter-button" id="select" onChange={handleFitlerChange}>
                    <option value="all">All</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            {loading ? <Spinner /> : <div className="baskets">
                {
                    results.map(basket => {
                        return (
                            <div className="basket" key={basket.name} id={basket.name}>
                                <div className="basket-tile">
                                    <p className="name">{basket.name}</p>
                                    <p className="basket-complexity">{basket.complexity}</p>
                                </div>
                                <div className="pricing">
                                    <hr className="br-line" />
                                    <p className="price">price: {basket.price} $</p>
                                    <Link to={`/catalog/${basket.name}`} className="more">View more</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}


export default CatalogBody


/*
{ name: "Anakonda", duration: 440, rating: 5, price: 152, genre: ["Action"] },
        { name: "Dimona", duration: 120, rating: 666, price: 25, genre: ["Horror", "Action", "Romance"] },
        { name: "Turtle", duration: 120, rating: 5, price: 15, genre: ["Action", "Racing"] },
        { name: "Gretha Tunberg", duration: 120, rating: 5, price: 65, genre: ["Horror"], },
        { name: "Anakonda 2", duration: 440, rating: 5, price: 252, genre: ["Action"] },
        { name: "JOAA", duration: 120, rating: 666, price: 14, genre: ["Slice of life"] },
        { name: "Ttrurtle", duration: 120, rating: 5, price: 45, genre: ["Thriller", "Racing"] },
        { name: "Zdershen", duration: 120, rating: 5, price: 75, genre: ["Mario"], },
        { name: "Xin Zheao", duration: 440, rating: 5, price: 65, genre: ["Action"] },
        { name: "RIOT", duration: 120, rating: 666, price: -205, genre: ["Horror", "Action", "Romance"] },
        { name: "Leagie", duration: 120, rating: 5, price: 151, genre: ["Action", "Racing"] },
        { name: "Legendoros", duration: 120, rating: 5, price: 465, genre: ["Horror"], }
        */