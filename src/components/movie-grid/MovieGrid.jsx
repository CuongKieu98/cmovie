import React, { useCallback, useEffect, useState } from 'react'
import './movie-grid.scss'
import {useParams} from 'react-router'
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';
import Button, { OutLineButton } from '../button/Button';
import Input from '../input/Input';
import {useNavigate} from 'react-router-dom'

const MovieGrid = (props) => {
    const [items ,setItems] = useState([]);
    const [page ,setPage ] = useState(1);
    const [totalPage,setTotalPage] = useState(0);

    const {keyword} = useParams();

     
    useEffect(() =>{
        const getList = async () =>{
            let response = null;

            if(keyword === undefined){
                const params = {}
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming,{params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular,{params});
                }

            }else{
                const params = {
                    query:keyword
                }
                response = await tmdbApi.search(props.category,{params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    },[props.category,keyword])

    const loadMore = async () =>{
        let response = null;

            if(keyword === undefined){
                const params = {
                    page:page+1
                }
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming,{params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular,{params});
                }

            }else{
                const params = {
                    page:page+1,
                    query:keyword
                }
                response = await tmdbApi.search(props.category,{params});
            }
            setItems([...items,...response.results]);
            setPage(page+1)
           
        }
    
  return (
    <>
    <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword}/>
    </div>
    <div className='movie-grid'>
        {
            items.map((item,index) =>(
                <MovieCard key={index} category={props.category} item={item}/>
            ))
        }
    </div>
    {
        page < totalPage ? (
            <div className="movie-grid__loadmore">
                <OutLineButton className="small" onClick={loadMore}>Load More</OutLineButton>
            </div>
        ): null
    }
    </>
  )
}

const MovieSearch = props =>{
    const navigate = useNavigate();

    const [keyword,setKeyWord] = useState(props.keyword ? props.keyword : "")
    const goToSearch = useCallback(
        () =>{
            if(keyword.trim().length > 0){
                navigate(`/${category[props.category]}/search/${keyword}`)
            }
        },[keyword,props.category,navigate]
    )
    useEffect(() =>{
        const enterEvent = (e) =>{
            e.preventDefault();
            if(e.keyCode === 13){
                goToSearch();
            }

        }
        document.addEventListener('keyup',enterEvent);
        return () =>{
            document.removeEventListener('keyup',enterEvent)
        }
     },[keyword,goToSearch])
    return (
        <div className='movie-search'>
            <Input type={"text"} placeholder="Enter keyword" value={keyword} onChange={(e) => setKeyWord(e.target.value)}  />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
}

export default MovieGrid