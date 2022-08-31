import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { ImageListAdd } from "../redux/modules/ImageSlice";
import {useNavigate} from "react-router-dom"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {

    const [Upimage, setUpimage] = useState([]);
    const [image, setImage] = useState(undefined)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pageimg = useSelector((state) => state.ImageSlice.ImageList);

    const handleAddImages = (e) => {
        
        const imageLists = e.target.files;
        let imageUrlLists = [...Upimage];
        setImage(e.target.files[0])
        

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
           
        }
        if (imageUrlLists.length > 11) {
            imageLists = imageLists.slice(0, 10);
        }
        setUpimage( !pageimg.Upimage ? imageUrlLists : [...pageimg?.Upimage , imageUrlLists]);
    }
    
   
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

            <MainBox>
                <Contain>
                    <h1>
                        이미지 선택하기
                    </h1>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => {
                            handleAddImages(e)
                        }}
                    />
                    <br />
                    <div className="otherBox">
                        {Upimage.map((t, i) => (
                            <>
                                <p>{i + 1} : {t}</p>

                            </>


                        ))}
                        <br />

                        <button onClick={() => { 
                            dispatch(ImageListAdd({
                                 Upimage
                            }));
                            navigate("/upload") 
                            }}>업로드</button>
                    </div>
                    <br />
                    <br />
                    <br />

                    {/* {pageimg?.Upimage?.map((t,i)=>(
                <>
                    <ImageBox src={t} style={{flex:"1"}}/>
                </>
                ))} */}
                 <StyledSlider {...settings}>
                    
                    {pageimg?.Upimage?.map((t,i)=>(
                        <>
                            <div>
                                <img src={t} alt='slider' style={{flex:"1"}}/>
                            </div>
                        </>
                    ))}
                    
                </StyledSlider> 
                </Contain>
                
                
            </MainBox>
        </>
    )
}


const MainBox = styled.div`
    display:flex;
    justify-content:center;
`;
const Contain = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:400px;
    height:80vh;
    background-color:rosybrown;

    .otherBox {
        flex-direction:row;
        font-size:10px;
    }
`;

const StyledSlider = styled(Slider)`
  //  //슬라이드 컨테이너 영역
  all: unset;
   position: relative;
   height: 200px;  
   width : 200px;
   box-sizing: border-box;
   
  .slick-list {  //슬라이드 스크린

  }

  .slick-slide div { //슬라이더  컨텐츠
    cursor: pointer;
    // outline: none;
  }
  .slick-slide img {
    height: 200px;
    width : 200px;
  }
`;


const ImageBox = styled.img`
    width:200px;
    height:200px;
`;

export default Main;