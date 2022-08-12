import axios from "axios";
import React from "react";
import  Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const cardColors = ["#FEFBF6","#A6D1E6","#7F5283","#C7D36F","#FFB4B4","#B67171"];
const arrlen=6;

function Politics(){
        let colIndex=0;
        const [newsData,setNewsData]=React.useState(null);
     
        const getNewsBlocks = async()=>{
           console.log("Inside block");
           var news = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`);
           if(news.status==200){
              setNewsData(news.data);
              console.log(newsData);
           }       
               
        }
        React.useEffect(()=>{
          getNewsBlocks();
        },[]);
        
        return (
           <div style={{paddingTop:"200px"}}>
           <Container style={{paddingTop:"160px"}}>
           <Row>
              {newsData!==null?<>
            {newsData.articles.map((news,index)=>{
               return (
                 <Card className="m-4" key={index} style={{ border:"2px solid black",width: "18rem" , backgroundColor: cardColors[(colIndex++)%arrlen]}}>
                       <SportsBlock block={news} />
                 </Card>        
               ); 
            })}</>:<></>}
           </Row>
        </Container>
        </div>
          );
}

function SportsBlock(props){
   return(
      <div>
      <Card.Body >
         <Card.Img variant="top" src={props.block.urlToImage} style={{border:"2px solid black"}}/>
          <Card.Title style={{color:"solid-black"}}>{props.block.title}</Card.Title>
          <Card.Text>{props.block.content}</Card.Text>
          <Button variant="dark" onClick={()=>{
            window.open(props.block.url);
          }}>read more...</Button>
      </Card.Body>
    </div>
   );
}
const politicalNewsData =[
    {
         key : 1,
       author: "Engadget",
       title: "The best Amazon Prime Day wearable deals from Apple, Samsung, Fitbit and others",
       description: "Smartwatches and fitness trackers keep track of your activity throughout the day, but they've also become some of the most popular accessories over the past few years. There are more options to choose from now than ever before, and Amazon Prime Day deals have…",
       url: "https://www.engadget.com/best-wearable-deals-amazon-prime-day-2022-180023695.html", 
       urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2021-10/ed61c5f0-2c26-11ec-bfff-fc22ded728bb",
       publishedAt: "2022-07-13T18:00:23Z",
        content: "Smartwatches and fitness trackers keep track of your activity throughout the day, but they've also become some of the most popular accessories over the past few years. There are more options to choos… [+3401 chars]"
    },
    {
        key : 2,
        "author": "Adam Speight, Julian Chokkattu",
        "title": "The 63 Best Prime Day Deals if You Work (and Play) From Home",
        "description": "These are all the top discounts on essential home office gear, from laptops, desks, and chairs to monitors, keyboards, and mice.",
         "url": "https://www.wired.com/story/best-amazon-prime-day-home-office-laptop-deals-2022-3/",
         "urlToImage": "https://media.wired.com/photos/62cc7244fbd0691ce2826576/191:100/w_1280,c_limit/Box-E_WFH.png",
         "publishedAt": "2022-07-13T19:37:00Z", 
          "content": "Looking to outfit your home office? Its a good idea, even if youre still going to the office a few times a week. Our ultimate Home Office Gear guide has dozens of recommendations, from portable monit… [+25736 chars]"
},
{
    key:3,
    "title": "The 79 Best Prime Day Deals Under $50 (Day 2)",
    "description": "Do you already have a TV, mattress, or laptop? From smart bulbs to board games, these are the best cheap deals to fill your shopping needs.",
    "url": "https://www.wired.com/story/best-amazon-prime-day-deals-under-50-2022-2/",
    "urlToImage": "https://media.wired.com/photos/62be2746771e09d34c800971/191:100/w_1280,c_limit/splat-E_Under-50.png",
    "publishedAt": "2022-07-13T21:21:00Z",
    "content": "Amazon Prime Day promises hundreds of thousands of deals, but not everyone has been saving all year for a big-ticket purchase. Beneath the noise, there are some great finds on deals under $50. We've … [+31551 chars]"
    },
   
];


export default Politics;