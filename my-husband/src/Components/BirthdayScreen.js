import React,{useState} from "react";
import Modal from 'react-modal';
import "./BirthdayScreen.css";
import Img1 from "./img/img1.jpg";
import Img2 from "./img/img2.jpg";
import Img3 from "./img/img3.jpg";
import Img4 from "./img/img4.jpg";
import Img5 from "./img/img5.jpg";
import Img6 from "./img/img6.jpg";
import Img7 from "./img/img7.jpg";
import Img8 from "./img/img8.jpg";
import Img9 from "./img/img9.jpg";
import Img10 from "./img/img10.jpg";
import Img11 from "./img/img11.jpg";
// import Img12 from "./img/img12.jpg";
// import Img13 from "./img/img13.jpg";
// import Img14 from "./img/img14.jpg";
// import Img15 from "./img/img15.jpg";
// import Img16 from "./img/img16.jpg";
// import Img17 from "./img/img17.jpg";

function BirthdayScreen(){
     
        let data = [
            {
                id:'1',
                img: Img1,
                width:'222px'
             },
             {
                id:'2',
                img: Img2,
                width:'300px'
             },
             {
                id:'3',
                img: Img3,
                width:'300px'
             },
             {
                id:'4',
                img: Img4,
                width:'300px'
             },
             {
                id:'5',
                img: Img5,
                width:'300px'
             },
             {
                id:'6',
                img: Img6,
                width:'300px'
             },
             {
                id:'7',
                img: Img7,
                width:'300px'
             },
             {
                id:'8',
                img: Img8,
                width:'300px'
             },
             {
                id:'9',
                img: Img9,
                width:'300px'
             },
             {
                id:'10',
                img: Img10,
                width:'300px'
             },
             {
                id:'11',
                img: Img11,
                width:'300px'
             },
            //  {
            //     id:'12',
            //     img: Img12
            //  },
            //  {
            //     id:'13',
            //     img: Img13
            //  },
            //  {
            //     id:'14',
            //     img: Img14
            //  },
            //  {
            //     id:'15',
            //     img: Img15
            //  },
            //  {
            //     id:'16',
            //     img: Img16
            //  },
            //  {
            //     id:'17',
            //     img: Img17
            //  },
    ]
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [imgWidth, setImgWidth] = useState('')

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    const getImg = (imgSrc,imgwidth)=>{
         setIsOpen(true)
         setTempImgSrc(imgSrc)
         setImgWidth(imgwidth)                  
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
     // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return(
        <div>
           <Modal
               isOpen={modalIsOpen}
               onAfterOpen={afterOpenModal}
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Example Modal"
         >
            
            <button onClick={closeModal} className="modelButton">X</button>
            <img src={tempImgSrc} alt="model" style={{width:imgWidth}}/>
            <span>YOu remebered those days </span>
         </Modal>
           {/* <div className={model? "model open": "model"}>
          
               <img src={tempImgSrc} alt="model"/>
           </div> */}
            <div className="gallery">
             {data.map((item,index)=>{
                return (
                   <div className="pics" key={index} onClick={()=>getImg(item.img,item.width)}>
                      <img src={item.img} alt={item.id} style={{width: '100%'}}/>
                   </div>
                )
             })}
            </div>
        </div>
    )
}
export default BirthdayScreen;