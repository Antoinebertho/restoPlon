import {useContext} from "react";
import {FavoritesContext} from "../context/favoritesContext"

export const useFavorites = () => {
    const {favorites, setFavorites} = useContext(FavoritesContext)

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }
    const removeFavorite = (restaurant) => {
        setFavorites(favorites.filter((fav) => fav.id !== restaurant.id))
    }
    const isFavorite = (restaurant) => {
        return favorites.some((fav) => fav.id === restaurant.id)
    }
    return {favorites, addFavorite, removeFavorite, isFavorite}
    }

