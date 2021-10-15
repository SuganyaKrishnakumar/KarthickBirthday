import React,{useState} from "react";
import ReactModal from 'react-modal';
import "./BirthdayScreen.css";
import Img1 from "./img/img1.jpg";
import Img2 from "./img/img2.jpg";
import Img03 from "./img/img03.jpg";
import Img3 from "./img/img3.jpg";
import Img4 from "./img/img4.jpg";
import Img5 from "./img/img5.jpg";
import Img6 from "./img/img6.jpg";
import Img7 from "./img/img7.jpg";
import Img8 from "./img/img8.jpg";
import Img9 from "./img/img9.jpg";
import Img10 from "./img/img10.jpg";
import Img11 from "./img/img11.jpg";
import Img12 from "./img/img12.jpg";
import Img13 from "./img/img13.jpg";
import Img14 from "./img/img14.jpg";
import Img15 from "./img/img15.jpg";
import Img16 from "./img/img16.jpg";
import Img17 from "./img/img17.jpg";
import Img18 from "./img/img18.jpg";
import Img19 from "./img/img19.jpg";
import Img20 from "./img/img20.jpg";
import Img21 from "./img/img21.jpg";
import Img22 from "./img/img22.jpg";
import Img23 from "./img/img23.jpg";
import Img24 from "./img/img24.jpg";
import Img31 from "./img/img31.jpg";
import Img32 from "./img/img32.jpg";
import Img33 from "./img/img33.jpg";

function BirthdayScreen(){
     
        let data = [
            {
                id:'1',
                img: Img1,
                width:'222px',
                msg: "While taking this photo you are too sad. The reason is your parents has not bought you the car for playing. Your face resembles your father's face in this pose."
             },
             {
                id:'2',
                img: Img2,
                width:'300px',
                msg:"This pic was taken on 12th grade. Those are the days you stayed in hostel and enjoyed your life very much. On the same day you have taken a video which was so cute. You sang a devotee song which was really nice and more interesting. I will definetely show those videos to our son saying that your father was doing these type of mischiefs"
             },
             {
               id:'03',
               img: Img03,
               width:'300px',
               msg:"This pic was taken while you are going for NCC. At that time your goal is to join in army. If you have joined army means then i would have missed you in my life. I am very lucky to have you as my husband."
            },
             {
                id:'3',
                img: Img3,
                width:'300px',
                msg:"This pic was taken during our college 2nd year. You have enjoyed those days very very much i know that. "
             },
             {
                id:'4',
                img: Img4,
                width:'300px',
                msg:"This pic was taken in padhu's home while you went for golu celebration. I think this is was taken while you are in 1st year"
             },
             {
                id:'5',
                img: Img5,
                width:'300px',
                msg:"This pic was taken while you are in 2nd year. You have given a pose like a near by animal which looks so cuteeee"
             },
             {
                id:'6',
                img: Img6,
                width:'300px',
                msg:"This pic was taken while your in last year or might me after completing the college. The special in this pic was the shirt weared by you was given by me. You are looking handsome in this pic. Love You Krtk"
             },
             {
                id:'7',
                img: Img7,
                width:'300px',
                msg:"This pic was taken after you have completed your college. This was taken in phoenix mall."
             },
             {
                id:'8',
                img: Img8,
                width:'300px',
                msg:"This pic was taken during your 2nd year. You went for a trip with your family members i think so. You look like a innocent boy."
             },
             {
                id:'9',
                img: Img9,
                width:'300px',
                msg:"You have moped this pic using photoshop. Not this photo alone. you have done so many photos like that. The most funny pic is you are sitting near the foreign lady which has proven me that you are so joyfull type."
             },
             {
                id:'10',
                img: Img10,
                width:'300px',
                msg:"This pic was taken in phoenix mall i haven't remember who have take this. may be you have gone with your friends i think so. You are looking charmful"
             },
             {
                id:'11',
                img: Img11,
                width:'300px',
                msg: "This pic was taken in banglore i think so. You are looking so smart love you dear...."
             },
             {
                id:'12',
                img: Img12,
                width:'300px',
                msg: "This pic was taken after our marriage while we celebrate our first pongal after marriage in your home town."
             },
             {
                id:'13',
                img: Img13,
                width:'300px',
                msg:"This pic was taken during our reception. I remember those moments. Its midnight we are taking our photoshoot. After completing our photoshoot You got so tired and haven't slept overnight. But those moments are very memorable moments which we will speak often in our life time"
             },
             {
                id:'14',
                img: Img14,
                width:'300px',
                msg:"This pic was taken in your accenture office you have given a pose like someone in your office. On seeing this photo you are looking a comedy person."
             },
             {
                id:'15',
                img: Img15,
                width:'300px',
                msg:"This pic was taken in your office. On seeing this you are looking like a professional person."
             },
             {
                id:'16',
                img: Img16,
                width:'300px',
                msg:"This pic was taken during our 1st new year after marriage. I think you won't forget that day. From morning we fought each other and canceled our reserveration and evening we booked a reservation once again and went there to have some romatic time. While having food itself rain came. We enjoyed a lot. And one memorable thing happens i think you remember that i won't say that here. Love you bava....."
             },
             {
                id:'17',
                img: Img17,
                width:'300px',
                msg:"This pic was taken on your birthday after our marriage. On that day you got fever. But you have given your time to me for making your birthday plans. Eventhough you are not feeling well you have spent a full day with us. I know that birthday was more special for you. We went for children's home and spent some quality time there."
             },
             {
               id:'18',
               img: Img18,
               width:'300px',
               msg:"This pic was taken on mahabaliburam. We went with your parents. The trip was good and we enjoyed a lot."
            },
            {
               id:'19',
               img: Img19,
               width:'300px',
               msg:"This pic was taken during our 1st new year after marriage. I think you won't forget that day. From morning we fought each other and canceled our reserveration and evening we booked a reservation once again and went there to have some romatic time. While having food itself rain came. We enjoyed a lot. And one memorable thing happens i think you remember that i won't say that here. Love you bava....."
            },
            {
               id:'20',
               img: Img20,
               width:'300px',
               msg:"This pic was taken in vandaloor zoo while we went with santhosh and shobhana. We enjoyed lot on the day."
            },
            {
               id:'21',
               img: Img21,
               width:'300px',
               msg:"This pic was taken before our marriage. This pic has more memorable moments. This is the pic you have shown to your parents for our marriage proposal. This pic was taken in metro sagar restaurant. We went there often in those days and always order fish finger and briyani. Love you krk i loved those days where we spent most of our special time"
            },
            {
               id:'22',
               img: Img22,
               width:'300px',
               msg:"This pic was taken on our marriage day. That was day we both get our hands together and our 6 years of love got succeed. That was most most memborable day in our life"
            },
            {
               id:'23',
               img: Img23,
               width:'300px',
               msg:"This pic was taken when you started your carrer in accenture. The friends you got that time are very best friends for you. I know you have lot of friends but those friends were very close. "
            },
            {
               id:'24',
               img: Img24,
               width:'300px',
               msg:"This pic was taken while you were staying in banglore. Your all time favourite burger shop. At that time you are looking so hot love your dear "
            },
            {
               id:'32',
               img: Img32,
               width:'300px',
               msg:"This pic was taken while you went to Goa with your friends. You enjoyed lot there. You frequently told me that you need to travel to Goa with your father. Soon this will happen dear. From Goa you bought many gifts for me. I loved all those things"
            },
            {
               id:'31',
               img: Img31,
               width:'300px',
               msg:"This pic was taken the day defore our marriage. You went to parlour for facial. After completing the facial there was heavy rain. But there is no use of facial it got wasted. Without doing facial itself you will be looking too hot and charming dear. Love you karthick."
            },
            {
               id:'33',
               img: Img33,
               width:'300px',
               msg:"This pic was taken on our 2nd anniversay. This photo is special because this is the good photo until that time you have taken with our son. You both are the one who have fullfilled my life with lot of happiness. Love you both."
            }
    ]
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [tempMsg, setTempMsg]=useState('')
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
    const getImg = (imgSrc,imgwidth,msg)=>{
         setIsOpen(true)
         setTempImgSrc(imgSrc)
         setTempMsg(msg)
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
           <ReactModal
               isOpen={modalIsOpen}
               onAfterOpen={afterOpenModal}
               onRequestClose={closeModal}
               style={customStyles}
               className="modelStyle"
               contentLabel="Example Modal"
               preventScroll={true}
               
         >
            
            <button onClick={closeModal} className="modelButton">X</button>
            <br/>
            <div style={{marginTop:'10px'}}>
            <img src={tempImgSrc} alt="model" style={{width:imgWidth}}/>
            </div>
            <div>
               <p>{tempMsg}</p>
            </div>
         </ReactModal>
           {/* <div className={model? "model open": "model"}>
          
               <img src={tempImgSrc} alt="model"/>
           </div> */}
            <div className="gallery">
             {data.map((item,index)=>{
                return (
                   <div className="pics" key={index} onClick={()=>getImg(item.img,item.width,item.msg)}>
                      <img src={item.img} alt={item.id} style={{width: '100%'}}/>
                   </div>
                )
             })}
            </div>
        </div>
    )
}
export default BirthdayScreen;