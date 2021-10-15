import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import history from "./../history";
import './MemorableMoments.css';
import Img6 from "./img/img6.jpg";
import Img11 from "./img/img11.jpg";
import Img24 from "./img/img24.jpg";
import Img26 from "./img/img26.jpg";
import Img27 from "./img/img27.jpg";
import Img28 from "./img/img28.jpg";
import Img29 from "./img/img29.jpg";
import Img30 from "./img/img30.jpg";

function MemorableMoments() {

    const onNext = () => {
        history.push('/Birthday')
    }
    return (
        <div>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">1<sup>st</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>We both together celebrated your birthday for the first time while we are in our last year of our college. I have presented you a shirt which you loved most.</CardText>
                    <CardImg top width="100%" src={Img6} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">2<sup>nd</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>During that time I haven't spoken with you. Due to some issues we can't able to talk with each other. But I called you on your birthday and convey my wishes to you. I am the one who wished you first. I called you at 11.45pm itself and started talking.
                        Those days are very memorable. If I think about those days it looks funny. 
                    </CardText>
                    <CardImg top width="100%" src={Img11} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">3<sup>nd</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>During that time our relationships gets stronger than the previous year. You was staying in banglore. 
                        I was in chennai. I like to meet you on that stay but that's not happened. I haven't bought any gifts for you. Just i went to temple and prayed for you.

                    </CardText>
                    <CardImg top width="100%" src={Img24} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">4<sup>th</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>During that time our relationships gets more stronger than the previous year. You was staying in banglore. 
                        I was in chennai. I like to meet you on that stay but that's not happened. I asked your friends to bought a cake and make a video call 
                        at 12 pm. You were trying to speak with me at 11.45pm like all year we do. But on this year i haven't attended your call.
                        Because i planned to have a video call with you by 12pm. I wished you at 12. Really i felt happy for you.
                    </CardText>
                    <CardImg top width="100%" src={Img26} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">5<sup>th</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>
                            This year you celebrated your birthday at komarapalyam. I asked mohan to bought cakes and dairymilk chocolate to your home.
                            You got surprised on seeing that. Your parents got little doubt that mohan won't celebrates your birthday like this. 
                            After you cuts the cake only you came to know that it was arranged by me. 
                    </CardText>
                    <CardImg top width="100%" src={Img28} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">6<sup>th</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>
                            This year is speial. We bought reveal our relationship to our parents and they said okay. 
                            I bought you a bronze anklet for you. When i told the gift i am going to bought for you. My mom scolded me that
                            why are you buying bronze instead you buy silver ankelt. But at that time i can't able to bought silver. so i gifted bronze
                            anklet. You liked so much. Also we celebrated your birthday on that evening in a special place we went outside. I think you 
                            have remembered the place.
                    </CardText>
                    <CardImg top width="100%" src={Img27} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">7<sup>th</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>
                            This year is very very speial. We got married and we celebrated your birthday in some different manner.
                            We went to children's home and spend some quality time. You were very happy and got so surprised. In evening 
                            we celebrated your birthday with some funny ideas. I know that's the birthday you loved most. 
                    </CardText>
                    <CardImg top width="100%" src={Img29} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="main">

                <CardBody className='card-body'>
                    <CardTitle tag="h5">8<sup>th</sup> BIRTHDAY AFTER OUR RELATIONSHIP STARTS:</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle> */}
                    <CardText>
                            This year is very very speial. We were staying in Sathyamangalam. This year i planned to bought a cake for you. 
                            But i couldn't . You strictly told not to buy cake and don't need any celebration. I too can't go outside and plan 
                            some thing since i was pregnant and my health is not good that much. But your mom prepared some gulabo jamuns.
                            My mom prepared payasam for you. This also makes something good feel i think so.
                    </CardText>
                    <CardImg top width="100%" src={Img30} alt="Card image cap" />
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>

            <div class="container">
  <div class="center">
            <button className="MemoButton" onClick={onNext}>Click Me</button>
            </div>
            </div>
            {/* </marquee> */}
        </div>
    )
}

export default MemorableMoments;