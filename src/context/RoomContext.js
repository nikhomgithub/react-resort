import React from 'react';
import rawdata from '../data';

export const RoomContext=React.createContext();
const RoomContextProvider = (props) => {

    const [roomState,setRoomState]=React.useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
    })

    const [roomFilter,setRoomFilter]=React.useState({
        type:'all',
        capacity:1,
        price:0,
        size:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    })
    //tempItems =[ {
    //   :name,slug,type,price,size,capacity,pets,
    //   breakfast,featured,description,extras,
    //   images[],id},...
    //   ]
    //}
    const formatData=(items)=>{

        let tempItems = items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=>
                image.fields.file.url
            )
            let room ={...item.fields,images,id};
            return room;
        })
        return tempItems;
    }

    const getRoom =(slug) =>{
        let tempRooms=[...roomState.rooms];
        const room = tempRooms.find(room=>room.slug===slug);
        return room;
    }

    const filterRooms=()=>{
        let {type,capacity,price,minSize,maxSize,breakfast,pets} = roomFilter;
        let{rooms}=roomState;
        let tempRooms=[...rooms];
        /*transform value*/
        capacity=parseInt(capacity)

        /* Filter by type */
        if(type!=='all'){
            tempRooms=tempRooms.filter(room=>room.type===type)
        }
        
        //Filter by capacity
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
        }

        //Filter by price
        tempRooms=tempRooms.filter(room=>room.price<=price)

        //Filter by size
        tempRooms=tempRooms.filter(room=>((room.size>=minSize) && (room.size<=maxSize)))

        //Filter by pets
        if(pets){
        tempRooms=tempRooms.filter(room=>room.pets===true)
        }

        //Filter by breakfast
        if(breakfast){
        tempRooms=tempRooms.filter(room=>room.breakfast===true)
        }
        //console.log(tempRooms)
        
        setRoomState({
            ...roomState,
            sortedRooms:tempRooms
        })
        
    }
    
    const handleChange=e=>{
        const type=e.target.type;
        const name=e.target.name;
        const value=(type==="checkbox")?e.target.checked:e.target.value;
        //console.log(value)
        setRoomFilter(
            {   ...roomFilter,
                [name]:value
            },
        );
    }

    React.useEffect(()=>{
        filterRooms();
    },[ roomFilter])


    React.useEffect(()=>{
        alert("start all over")
        let rooms=formatData(rawdata);
        let featuredRooms= rooms.filter(room=>{
            //console.log("Test")    
            return room.featured===true
        });
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))

        setRoomState({
            ...roomState,
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            
        })

        setRoomFilter({
            ...roomFilter,
            maxPrice,
            price:maxPrice,
            maxSize,
            size:maxSize
        })
    },[])

    return (
        <RoomContext.Provider value={{...roomState,...roomFilter,getRoom,handleChange}}>
            {props.children}
        </RoomContext.Provider>
    )
}
export default RoomContextProvider;