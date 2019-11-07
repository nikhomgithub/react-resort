import React from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import './Services.css'


export default function Services() {

    const [services] = React.useState(
        [
            {   icon:<FaCocktail/>,
                title:"Cocktail",
                info:"Aliqua culpa commodo laboris proident consequat ex ipsum duis commodo enim sit tempor."
            },
            {   icon:<FaHiking/>,
                title:"Hiking",
                info:"Aliqua culpa commodo laboris proident consequat ex ipsum duis commodo enim sit tempor."
            },
            {   icon:<FaShuttleVan/>,
                title:"Shuttle Van",
                info:"Aliqua culpa commodo laboris proident consequat ex ipsum duis commodo enim sit tempor."
            },
            {   icon:<FaBeer/>,
                title:"Beer",
                info:"Aliqua culpa commodo laboris proident consequat ex ipsum duis commodo enim sit tempor."
            },
        ]       
    )
        
    return (
        <section className="services">           
            <Title title="Services"/>
            <div className="services-center">
                {services.map((service,index)=>{
                    return (
                        <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>  
                    )      
                })}
            </div>
        </section>
    )
}
