import {useState } from 'react';
import {useQuery} from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Item from './Item/Item';


import {Wrapper} from './App.styles';
import { VolumeUpTwoTone } from '@material-ui/icons';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[] > =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App =()=> {
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProducts
   ); 
  console.log(data);
  
  const getTotalItems = () =>null;
  const handleRemoveFromCart = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;     

  if (isLoading) return <LinearProgress />;
  if (error) return <div> Something went wrong</div>;
  return (
    <div className="App">
       hello
    </div>
  );
}

export default App;
