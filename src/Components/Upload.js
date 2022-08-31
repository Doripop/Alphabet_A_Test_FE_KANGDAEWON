import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ImageListAdd } from "../redux/modules/ImageSlice";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Upload = () => {

    const pageimg = useSelector((state) => state.ImageSlice.ImageList);
    // console.log(pageimg?.Upimage)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const settings = {
        infinite: true,
        speed: 1000,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };


    return (
        <>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
                <div style={{
                    flex:"1",
                    width:"30px",
                    height:"30px",
                    display:"flex",
                    justifyContent:"center",
                    }}>
                <button 
                onClick={()=>{
                    dispatch(ImageListAdd([]));
                    navigate("/")
                }}
                >이전</button>
                </div>
                <StyledSlider {...settings}>
                    
                    {pageimg?.Upimage.map((t,i)=>(
                        <>
                            <div>
                                <img src={t} alt='slider' style={{flex:"1"}}/>
                            </div>
                        </>
                    ))}
                    
                </StyledSlider> 
                {/* {pageimg?.Upimage.map((t,i)=>(
                <>
                    <ImageBox src={t} style={{flex:"1"}}/>
                </>
                ))} */}
                <div style={{
                    flex:"1",
                    width:"30px",
                    height:"30px",
                    display:"flex",
                    justifyContent:"center",
                    }}>
                    <button onClick={()=>{
                        navigate("/")
                    }}>등록</button>
                </div>
                
                

            </div>
        </>
    )
}


const StyledSlider = styled(Slider)`
  //  //슬라이드 컨테이너 영역
  all: unset;
   position: relative;
   height: 400px;  
   width : 400px;
   box-sizing: border-box;
   
  .slick-list {  //슬라이드 스크린

  }

  .slick-slide div { //슬라이더  컨텐츠
    cursor: pointer;
    // outline: none;
  }
  .slick-slide img {
    height:400px;
    width : 400px;
  }
`;

export default Upload;