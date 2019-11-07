import React from 'react'
import './RoomsFilter.css'
import { RoomContext } from '../context/RoomContext';
import Title from './Title'

export default function RoomsFilter({rooms}) {
    const {type,capacity,price,size,minPrice,maxPrice,minSize,maxSize,breakfast,pets,handleChange} = React.useContext(RoomContext)
    
    //get all unique values
    const getUnique=(items,value)=>{
        return [...new Set(items.map(item=>item[value]))]
    } 
    
    //get unique types
    let typelist=getUnique(rooms,'type')
    //add all
    typelist = ['all',...typelist];
    //creat <option>
    typelist = typelist.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>)
    }) 
    //get unique capacity
    let capacitylist=getUnique(rooms,'capacity');
    //creat <option>
    capacitylist = capacitylist.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>)
    }) 
    
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type-id">room type : {type}</label>
                    <select className="form-control" 
                            name="type" 
                            id="type-id" 
                            value={type}
                            onChange={handleChange}>
                        {typelist}       
                    </select> 
                </div>
                {/*end select type*/}

                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="capacity-id">Guests : {capacity}</label>
                    <select className="form-control" 
                            name="capacity" 
                            id="capacity-id" 
                            value={capacity}
                            onChange={handleChange}>
                        {capacitylist}       
                    </select> 
                </div>
                {/*end guests*/}

                {/*price*/}
                <div className="form-group">
                    <label htmlFor="price-id">room price : {price}</label>
                    <input  className="form-control" 
                            type="range"
                            name="price" 
                            min={minPrice}
                            max={maxPrice}
                            id="price-id" 
                            value={price}
                            onChange={handleChange}>     
                    </input> 
                </div>
                {/*end price*/}
                
                {/*size*/}
                <div className="form-group">
                    <label htmlFor="size-id">room size : {maxSize}</label>
                        <div className="size-inputs">
                            <input
                                className="size-input"
                                type="number"
                                name="minSize"
                                id="size-id"
                                value={minSize}
                                onChange={handleChange}
                                >
                            </input>
                            <input
                                className="size-input"
                                type="number"
                                name="maxSize"
                                id="size-id"
                                value={maxSize}
                                onChange={handleChange}
                                >
                            </input>
                        </div>    
                </div>
                {/*end size*/}

                {/*extra*/}
                <div className="form-group">    
                    <div className="single-extra">
                        <input  type="checkbox"
                                name="breakfast"
                                id="breakfast-id"
                                onChange={handleChange}
                        />
                        <label htmlFor="breakfast-id">breakfast : {breakfast}</label>
                    </div>
                    <div className="single-extra">
                        <input  type="checkbox"
                                name="pets"
                                id="pets-id"
                                onChange={handleChange}
                        />
                        <label htmlFor="pets-id">pets : {pets}</label>
                    </div>
                </div>
                {/*end extra*/}

            </form>
        </section>
    )
}
