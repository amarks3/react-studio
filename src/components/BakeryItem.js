import  'bootstrap/dist/css/bootstrap.min.css';
// TODO: create a component that displays a single bakery item
const  BakeryItem = (props) => {

    return (
        // <div class='BakeryItem flex-[2] md:flex-[1.5] w-full h-60 bg-gray-200 rounded-md overflow-hidden'>
        //     <img class ="BakeryImage" src= {props.item.image}></img>
        //     <h2>{props.item.name}</h2>
        //     <h3>{props.item.price}</h3>
        //     <p>{props.item.description}</p>
        //     <button  onClick={() => props.handleInput(props.item)} >add to cart</button>
        // class="bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex flex-col"
        // </div>
         <div class="BakeryItem">
            <div class="bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex flex-col">
                <div class="flex-[2] md:flex-[1.5] w-full h-60 bg-gray-200 rounded-md overflow-hidden">
                    <img src={props.item.image} class="BakeryImage "/>

                </div>
            </div>
            
            <div class="flex-1 flex-grow p-4 flex flex-col justify-between">
                <div>
                    <h2 class="text-xl font-bold">{props.item.name}</h2>
                    <p>{props.item.description}</p>
                </div>
                <div class="flex items-center justify-between">
                    <p>{props.item.price}</p>
                    <button class="px-4 py-2 rounded-md"  onClick={() => props.handleInput(props.item)} >Add to Cart</button>
                </div>
            </div>
        </div>

    );
    
};

export default BakeryItem;


